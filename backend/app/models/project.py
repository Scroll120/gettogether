from .. import db
from .associations import project_users

class Project(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    description = db.Column(db.Text, nullable = False)

    users = db.relationship('User', secondary=project_users, back_populates='projects')