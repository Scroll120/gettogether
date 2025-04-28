from .. import db
from .associations import hangout_accounts

class Account(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), unique=True, nullable = False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable = False)

    hangouts = db.relationship('Hangout', secondary=hangout_accounts, back_populates='accounts')