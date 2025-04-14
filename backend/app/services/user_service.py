from ..repositories.user_repository import get_all, save
from ..models.user import User

def get_all_users():
    users = get_all()
    return [{"id": u.id, "username": u.username} for u in users]