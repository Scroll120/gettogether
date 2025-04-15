from flask import Blueprint, request, jsonify
from ..services.project_service import get_all_projects, create_new_project
from ..utils.auth_utils import token_required

project_bp = Blueprint("projects", __name__)

@project_bp.route("/", methods=["GET"])
@token_required
def get_projects():
    return jsonify(get_all_projects()), 200

@project_bp.route("/", methods=["POST"])
@token_required
def create_project():
    data = request.get_json()
    project = create_new_project(data)
    return jsonify(project), 201