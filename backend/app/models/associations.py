from .. import db

project_users = db.Table('project_users', 
        db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
        db.Column('project_id', db.Integer, db.ForeignKey('project.id'), primary_key=True)
)