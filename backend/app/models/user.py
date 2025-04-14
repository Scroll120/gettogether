from .. import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(100), nullable = False)

    projects = db.relationship('Project', back_populates = 'user', cascade = "all, delete-orphan")