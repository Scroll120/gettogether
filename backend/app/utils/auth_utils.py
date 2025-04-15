from functools import wraps
from flask import request, jsonify
import jwt
from ..config.config import Config
from ..repositories.account_repository import get_by_id

SECRET_KEY = Config.SECRET_KEY

def token_required(f):
    
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]
        
        if not token:
            return jsonify({"error": "Token is missing."}), 403
        
        try:
            data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            curren_user_id = data["user_id"]
        except jwt.ExpiredSignatureError:
            return jsonify({"error": "Token has expired"}), 403
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token"}), 403
        
        kwargs['current_user_id'] = curren_user_id

        return f(*args, **kwargs)
    
    return decorated_function