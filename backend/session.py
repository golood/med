import json
from datetime import datetime, timedelta, date
from types import SimpleNamespace

import jwt
import redis

from backend.api import Encoder
from backend.config import SECRET_JWT, REDIS_HOST, REDIS_PORT
from backend.data import Data


class Token:
    """
    Токен для идентификации сессий пользователей.
    """

    body: str
    create_time: datetime

    def __init__(self, token: str = None):
        if token is None:
            self.create_time = datetime.now()
            self.body = jwt.encode(payload={'create_time': str(self.create_time)}, key=SECRET_JWT, algorithm="HS512")
        else:
            data = Token.decode(token)
            self.body = token
            self.create_time = datetime.fromisoformat(data['create_time'])

    @staticmethod
    def decode(token: str):
        return jwt.decode(jwt=token, key=SECRET_JWT, algorithms="HS512")

    def __str__(self):
        return self.body


class Session:
    """
    Кастомная сессия пользователя.
    """

    token: Token
    _data: Data

    def __init__(self, token: Token = None):
        if token:
            self.token = token
        else:
            self.create_token()

        self._data = None

    @property
    def data(self) -> Data:
        r = Session._get_redis()
        data = r.get(self.token.body + '_data')
        if data:
            self._data = json.loads(data, object_hook=lambda d: SimpleNamespace(**d))
        else:
            self._data = Data()

        return self._data

    @data.setter
    def data(self, new_data: Data):
        self._data = new_data

        r = Session._get_redis()
        r.set(self.token.body + '_data', Encoder().encode(self._data))
        r.expireat(self.token.body + '_data',
                   datetime.fromisoformat(f'{date.today() + timedelta(days=3)} 04:00:00'))
        r.close()

    def create_token(self):
        self.token = Token()
        r = Session._get_redis()
        r.set(
            self.token.body, "")
        r.expireat(
            self.token.body,
            datetime.fromisoformat(f'{date.today() + timedelta(days=1)} 04:00:00'))
        r.close()

    @staticmethod
    def get_session(_token: str):
        try:
            token = Token(_token)

            r = Session._get_redis()
            data = r.get(token.body)
            if data is None:
                r.close()
                return Session()
            r.close()
            return Session(token)

        except jwt.exceptions.InvalidSignatureError:
            return Session()

    @staticmethod
    def _get_redis() -> redis.Redis:
        return redis.Redis(decode_responses=True, host=REDIS_HOST, port=REDIS_PORT)