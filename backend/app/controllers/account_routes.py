from flask import Blueprint, request, jsonify
from ..services.account_service import get_all_accounts, create_new_account, get_account_by_id

account_bp = Blueprint("account", __name__)

@account_bp.route("/", methods=["GET"])
def get_accounts():
    return jsonify(get_all_accounts())

@account_bp.route("/<int:id>", methods=["GET"])
def get_account(id):
    account = get_account_by_id(id)
    return jsonify(account), 201

@account_bp.route("/", methods=["POST"])
def create_account():
    data = request.get_json()
    account = create_new_account(data)
    return jsonify(account), 201