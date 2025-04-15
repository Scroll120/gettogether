from werkzeug.security import generate_password_hash
from ..repositories import account_repository
from ..models.account import Account

def register_account(data):
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return {"error": "Missing required field!"}, 400

    if account_repository.get_account_by_username(username) or account_repository.get_account_by_email(email):
        return {"error": "User already exists!"}, 400
    
    hashed_password = generate_password_hash(password)
    new_account = Account(username=username, email=email, password=hashed_password)
    account_repository.save(new_account)
    return {"message": "User registered successfully!"}, 201