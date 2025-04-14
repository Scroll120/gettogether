from .. import db
from .associations import project_accounts

class Account(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(100), nullable = False)

    projects = db.relationship('Project', secondary=project_accounts, back_populates='users')