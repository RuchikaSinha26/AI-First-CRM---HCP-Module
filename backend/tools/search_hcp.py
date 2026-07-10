import re

from database.search_interaction import search_interaction_db


def search_hcp(state):

    hcp = state.get("hcpName", "").strip()

    # Agar state me naam nahi hai to user_input se nikaalo
    if not hcp:

        text = state.get("user_input", "")

        match = re.search(r"(Dr\.?\s+[A-Za-z]+)", text, re.IGNORECASE)

        if match:
            hcp = match.group(1).strip()

    if not hcp:
        return {
            **state,
            "response": "Please mention the doctor's name."
        }

    result = search_interaction_db(hcp)

    if result:
        return {
            **state,
            **result,
            "response": "Previous interaction found successfully."
        }

    return {
        **state,
        "response": "No Previous Interaction Found."
    }