from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config.config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init.app(app)
    CORS(app)

    from .controllers.project_routes import project_bp
    app.register_blueprint(project_bp, url_prefix="/api/projects")

    return app