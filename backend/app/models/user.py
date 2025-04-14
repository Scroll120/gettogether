from .. import db
from .associations import project_users

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(100), nullable = False)

    projects = db.relationship('Project', secondary=project_users, back_populates='users')