from database.search_interaction import search_interaction_db


def get_hcp_profile(state):

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
            **result,
            "response": f"Doctor Profile Loaded for {hcp}"
        }

    return {
        **state,
        "response": "Doctor profile not found."
    }