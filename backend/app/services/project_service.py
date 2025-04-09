from ..repositories.project_repository import get_all, save
from ..models.project import Project

def get_all_projects():
    projects = get_all()
    return [{"id": p.id, "title": p.title, "description": p.description} for p in projects]

def create_new_project(data):
    project = Project(title=data["title"], description = data.get("description"))
    save(project)
    return {"id": project.id, "title": project.title}