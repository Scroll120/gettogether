from flask import Blueprint, request, jsonify
from ..services.hangout_service import get_all_hangouts, create_new_hangout
from ..utils.auth_utils import token_required

hangout_bp = Blueprint("hangouts", __name__)

@hangout_bp.route("/", methods=["GET"])
@token_required
def get_hangouts(current_user_id=None):
    return jsonify(get_all_hangouts()), 200

@hangout_bp.route("/", methods=["POST"])
@token_required
def create_hangout(current_user_id=None):
    data = request.get_json()
    hangout = create_new_hangout(data)
    return jsonify(hangout), 201