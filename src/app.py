from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = '13542'
socketio = SocketIO(app)

if __name__ == '__main__':
    socketio.run(app)