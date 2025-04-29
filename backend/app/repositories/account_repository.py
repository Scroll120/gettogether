from .. import db
from ..models.account import Account

def get_all():
    return Account.query.all()

def get_account_by_username(username):
    return Account.query.filter_by(username=username).first()

def get_by_id(id):
    return Account.query.get(id)

def get_account_by_email(email):
    return Account.query.filter_by(email=email).first()

def save(account):
    db.session.add(account)
    db.session.commit()