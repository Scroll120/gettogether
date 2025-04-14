from .. import db
from ..models.account import Account

def get_all():
    return Account.query.all()

def save(account):
    db.session.add(account)
    db.session.commit()