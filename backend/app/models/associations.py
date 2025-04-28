from .. import db

hangout_accounts = db.Table('hangout_accounts', 
        db.Column('account_id', db.Integer, db.ForeignKey('account.id'), primary_key=True),
        db.Column('hangout_id', db.Integer, db.ForeignKey('hangout.id'), primary_key=True)
)