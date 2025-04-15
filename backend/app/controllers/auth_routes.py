from flask import Blueprint, request, jsonify
from ..services.auth_service import register_account, login_account

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    response, status = register_account(data)
    return jsonify(response), status

@auth_bp.route("/login", methods=[POST])
def login():
    data = request.get_json()
    response, status = login_account(data)
    return jsonify(response), status