from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

from agents.graph import graph

router = APIRouter()


class ChatRequest(BaseModel):
    message: str

    hcpName: Optional[str] = ""
    hospital: Optional[str] = ""
    interactionDate: Optional[str] = ""
    interactionType: Optional[str] = ""
    productsDiscussed: Optional[str] = ""
    meetingSummary: Optional[str] = ""
    followUp: Optional[str] = ""


@router.post("/chat")
def chat(request: ChatRequest):

    state = {
        "user_input": request.message,

        "hcpName": request.hcpName,
        "hospital": request.hospital,
        "interactionDate": request.interactionDate,
        "interactionType": request.interactionType,
        "productsDiscussed": request.productsDiscussed,
        "meetingSummary": request.meetingSummary,
        "followUp": request.followUp,

        "response": "",
    }

    result = graph.invoke(state)

    return result