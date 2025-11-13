from flask_cors import CORS
from importlib import import_module
from dynaconf import FlaskDynaconf

def init_app(app):
    FlaskDynaconf(app)

    CORS(app, resources={
        r"/api/*": {
            "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
            "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

def load_extensions(app):
    for extensao in app.config.get("EXTENSOES"):
        modulo = import_module(extensao)
        modulo.init_app(app)

def load_routes(app, api):
    for route in app.config.get(api.title+api.version):
        module = import_module(route)
        api.add_namespace(module.ns)