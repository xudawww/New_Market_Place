from flask import Flask
import uuid
import logging
from flask import Flask, render_template, request, redirect, session, abort, jsonify, make_response

app = Flask(__name__)
app.secret_key = '79537d00f4834892986f09a100aa1edf'


@app.route("/")
def hello_world():
    response = make_response(render_template("index.html"))
    response.set_cookie('XSRF-TOKEN', generate_csrf_token())
    return response


@app.route("/test", methods=['POST'])
def post():
    response = make_response(render_template("index.html"))

    return response


@app.before_request
def csrf_protect():
    if request.method == "POST":
        print(session)
        if session['_csrf_token']:
            token = session['_csrf_token']

        if not token or token != request.headers.get('X-XSRF-TOKEN'):
            abort(403)


@app.errorhandler(403)
@app.errorhandler(500)
def server_error(e):
    logging.exception(e)
    return 'an error occurred.', e.code


def generate_csrf_token():
    if '_csrf_token' not in session:
        session['_csrf_token'] = str(uuid.uuid4())
    return session['_csrf_token']
