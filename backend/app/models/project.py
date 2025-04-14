from .. import db
from .associations import project_accounts

class Project(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    description = db.Column(db.Text, nullable = False)

    accounts = db.relationship('Account', secondary=project_accounts, back_populates='projects')