from fastapi import APIRouter
from pydantic import BaseModel

from database.save_interaction import save_interaction

router = APIRouter()


class SaveRequest(BaseModel):
    hcpName: str
    hospital: str
    interactionDate: str
    interactionType: str
    productsDiscussed: str
    meetingSummary: str
    followUp: str


@router.post("/save")
def save(data: SaveRequest):

    return save_interaction(data.model_dump())