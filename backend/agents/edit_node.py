import json
import re

from services.llm import llm
from prompts.edit_prompt import SYSTEM_PROMPT


def edit_interaction(state):

    prompt = f"""
{SYSTEM_PROMPT}

Current Data:

{json.dumps(state, indent=2)}

User Update:

{state["user_input"]}
"""

    response = llm.invoke(prompt)

    content = response.content.strip()

    # Remove markdown if present
    content = re.sub(r"^```json", "", content)
    content = re.sub(r"^```", "", content)
    content = re.sub(r"```$", "", content)
    content = content.strip()

    try:
        updates = json.loads(content)
    except Exception:
        updates = {}

    # Update only non-null fields
    for key, value in updates.items():
        if value is not None:
            state[key] = value

    return state