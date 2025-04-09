from .. import db
from ..models.project import Project

def get_all():
    return Project.query.all()

def save(project):
    db.session.add(project)
    db.session.commit()