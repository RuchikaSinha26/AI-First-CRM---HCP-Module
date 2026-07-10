from langgraph.graph import StateGraph, END

from agents.state import CRMState

from agents.nodes import extract_interaction
from agents.edit_node import edit_interaction

from agents.search_node import search_interaction
from agents.profile_lookup_node import profile_lookup
from agents.followup_lookup_node import followup_lookup


def router(state):

    text = state["user_input"].lower()

    # Search History
    if (
        "history" in text
        or "search" in text
        or "previous" in text
        or "last interaction" in text
    ):
        return "search"

    # HCP Profile
    if (
        "profile" in text
        or "doctor profile" in text
    ):
        return "profile_lookup"

    # Follow-up Reminder
    if (
        "follow up" in text
        or "followup" in text
        or "reminder" in text
        or "next follow" in text
    ):
        return "followup_lookup"

    # Edit Interaction
    edit_keywords = [
        "change",
        "update",
        "actually",
        "correct",
        "edit",
        "replace",
        "instead",
        "not",
    ]

    for word in edit_keywords:
        if word in text:
            return "edit"

    # Default → Log Interaction
    return "extract"


workflow = StateGraph(CRMState)

workflow.add_node("extract", extract_interaction)
workflow.add_node("edit", edit_interaction)
workflow.add_node("search", search_interaction)
workflow.add_node("profile_lookup", profile_lookup)
workflow.add_node("followup_lookup", followup_lookup)

workflow.set_conditional_entry_point(router)

workflow.add_edge("extract", END)
workflow.add_edge("edit", END)
workflow.add_edge("search", END)
workflow.add_edge("profile_lookup", END)
workflow.add_edge("followup_lookup", END)

graph = workflow.compile()