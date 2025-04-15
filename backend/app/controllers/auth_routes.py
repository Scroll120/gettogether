from flask import Blueprint, request, jsonify
from ..models.account import Account
from .. import db

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()