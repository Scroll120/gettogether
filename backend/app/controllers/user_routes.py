from flask import Blueprint, request, jsonify
from ..services.user_service import get_all_users, create_user

user_bp = Blueprint("user", __name__)

@user_bp.route("/", methods=["GET"])
def get_users():
    return jsonify(get_all_users())