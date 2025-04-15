from ..repositories.account_repository import get_all, save, get_by_id
from ..models.account import Account

def get_all_accounts():
    accounts = get_all()
    return [{"id": a.id, "username": a.username} for a in accounts]

def get_account_by_id(id):
    account = get_by_id(id)
    return {"id": account.id,
             "username": account.username,
             "email": account.email
             }
    return None

def create_new_account(data):
    account = Account(username=data["username"])
    save(account)
    return {"id": account.id, "username": account.username}