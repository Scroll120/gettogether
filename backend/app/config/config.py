import os

class Config:
    SQLALCHEMY_DATABASE_URI = ("postgresql://postgres:MrWorldWide12@localhost:5432/gettogether")
    SQLALCHEMY_TRACK_MODIFICATIONS = False