from datetime import timedelta
import logging as log

from flask import Flask, request, Response, session, redirect, url_for

from backend.data import Data
from backend.session import Session

app = Flask(__name__)
app.secret_key = 'wdfdf'
ALLOWED_EXTENSIONS = set(['txt'])
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024
app.permanent_session_lifetime = timedelta(days=3)


def is_object_session(name):
    """
    Проверяет наличие объекта в сессии.
    :param name: имя объекта.
    :return: True, если объект есть в данных сессии,
             False, в противном случае.
    """

    if name in session:
        return True

    return False


def get_object_session(name):
    """
    Получает объект из данных сессии.
    :param name: имя объекта.
    :return: объект.
    """

    return session[name]


def set_object_session(name, value):
    """
    Добавляет объект в данные сессии.
    :param name: имя объекта.
    :param value: объект.
    """

    session[name] = value


def get_session():
    """
    Получает кастомную сущность сессии. Если токен протух, то создает новый.
    Все токены протухаю в 4:00 +08 UTC.
    """

    if is_object_session('token'):
        s = Session.get_session(get_object_session('token'))
        set_object_session('token', s.token.body)
        return s
    return Session()


def save_session(_session: Session):
    set_object_session('token', _session.token.body)


def allowed_file(filename):
    """
    Проверяет соответствие расширений файлов к разрешённым.
    :param filename: имя загруженного файла.
    :return: True, если файл соответствует маске,
             False, если файл не соответствует маске.
    """

    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route('/')
def print_hi():
    return 'Hello!'


@app.route('/mod')
def mod():
    return Response(status=201)


@app.route('/api/loadFile', methods=['POST'])
def load_file():
    _session = get_session()
    save_session(_session)

    file = request.files['file']
    if file and allowed_file(file.filename):
        _list = []
        for line in file.stream.readlines():
            _list.append(list(map(float, line.decode('utf-8').split())))
        file.close()
        log.debug(_list)
        data = Data()
        data.data = _list
        _session.data = data
    return redirect(url_for('mod'))


@app.route('/api/data')
def get_data():
    _session = get_session()
    save_session(_session)

    return _session.data.data


if __name__ == '__main__':
    log.basicConfig(
        format='%(asctime)s - [%(levelname)s] -  %(name)s - (%(filename)s).%(funcName)s(%(lineno)d) - %(message)s',
        level=log.DEBUG)
    #
    # import pydevd_pycharm
    # pydevd_pycharm.settrace('192.168.0.101', port=5001, stdoutToServer=True, stderrToServer=True)

    app.run(host='0.0.0.0', debug=True)
