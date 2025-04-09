from .. import db

class Project(db.Model):
    id = db.Column(db.Integer, primaryKey = True)
    title = db.Column(db.String(100), nullable = False)
    description = db.Column(db.Test, nullable = False)