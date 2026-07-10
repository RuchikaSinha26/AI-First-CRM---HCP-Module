import json
import re

from services.llm import llm
from prompts.extract_prompt import SYSTEM_PROMPT


def extract_interaction(state):

    prompt = f"""
{SYSTEM_PROMPT}

User:

{state["user_input"]}
"""

    response = llm.invoke(prompt)

    print("\n========== RAW LLM==========")
    print(response.content)
    print("======================================\n")

    content = response.content.strip()

    # Remove markdown if present
    content = re.sub(r"^```json", "", content)
    content = re.sub(r"^```", "", content)
    content = re.sub(r"```$", "", content)
    content = content.strip()

    print("CONTENT BEFORE JSON:")
    print(content)

    try:
        data = json.loads(content)
        print("JSON Parsed Successfully")

    except Exception as e:

        print("JSON ERROR:", e)

        data = {
            "hcpName": "",
            "hospital": "",
            "interactionDate": "",
            "interactionType": "",
            "productsDiscussed": "",
            "meetingSummary": content,
            "followUp": ""
        }

    return {
        **state,
        **data
    }