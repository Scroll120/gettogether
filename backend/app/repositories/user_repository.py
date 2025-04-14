from .. import db
from ..models.user import User

def get_all():
    return User.query.all()

def save(user):
    db.session.add(user)
    db.session.commit()