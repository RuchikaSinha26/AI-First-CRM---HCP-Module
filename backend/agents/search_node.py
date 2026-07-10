import re

from tools.search_hcp import search_hcp


def search_interaction(state):

    text = state["user_input"]

    match = re.search(r"Dr\.\s*[A-Za-z]+", text)

    if match:
        state["hcpName"] = match.group()

    return search_hcp(state)