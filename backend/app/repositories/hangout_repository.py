from .. import db
from ..models.hangout import Hangout

def get_all():
    return Hangout.query.all()

def save(hangout):
    db.session.add(hangout)
    db.session.commit()