import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "this_is_a_temp_key")

    SQLALCHEMY_DATABASE_URI = ("postgresql://postgres:MrWorldWide12@localhost:5432/gettogether")
    SQLALCHEMY_TRACK_MODIFICATIONS = False