from flask import Blueprint, request, jsonify
from ..services.project_service import get_all_projects, create_new_project

project_bp = Blueprint("projects", __name__)

@project_bp.route("/", methods=["GET"])
def get_projects():
    return jsonify(get_all_projects())

@project_bp.route("/", methods=["POST"])
def create_project():
    data = request.get_json()
    project = create_new_project(data)
    return jsonify(project), 201