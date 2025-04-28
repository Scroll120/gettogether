from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config.config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    CORS(app)

    from .controllers.hangout_routes import hangout_bp
    from .controllers.account_routes import account_bp
    from .controllers.auth_routes import auth_bp

    app.register_blueprint(hangout_bp, url_prefix="/api/hangouts")
    app.register_blueprint(account_bp, url_prefix="/api/accounts")
    app.register_blueprint(auth_bp, url_prefix="/api/auth")

    return app