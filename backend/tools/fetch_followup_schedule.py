from database.search_interaction import search_interaction_db


def followup_reminder(state):

    hcp = state.get("hcpName", "")

    if not hcp:
        return {
            **state,
            "response": "Please mention doctor's name."
        }

    result = search_interaction_db(hcp)

    if result:
        return {
            **state,
            "followUp": result["followUp"],
            "response": f"Next Follow-up: {result['followUp']}"
        }

    return {
        **state,
        "response": "No Follow-up Found."
    }