from typing import TypedDict

class CRMState(TypedDict):
    user_input: str

    hcpName: str
    hospital: str
    interactionDate: str
    interactionType: str
    productsDiscussed: str
    meetingSummary: str
    followUp: str

    response: str