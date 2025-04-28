from ..repositories.hangout_repository import get_all, save
from ..models.hangout import Hangout

def get_all_hangouts():
    hangouts = get_all()
    return [{"id": h.id, "title": h.title, "description": h.description} for h in hangouts]

def create_new_hangout(data):
    hangout = Hangout(title=data["title"], description = data.get("description"))
    save(hangout)
    return {"id": hangout.id, "title": hangout.title}