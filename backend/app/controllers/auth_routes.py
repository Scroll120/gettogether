from flask import Blueprint, request, jsonify
from ..services.auth_service import register_account, login_account
from ..utils.auth_utils import token_required

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    response, status = register_account(data)
    return jsonify(response), status

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    response, status = login_account(data)
    return jsonify(response), status

@auth_bp.route("/check", methods=["GET"])
@token_required
def check_token(current_user_id=None):
    return jsonify({"message": "Token is valid"}), 200