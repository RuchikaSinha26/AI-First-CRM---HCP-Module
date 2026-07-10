from database.db import cursor


def search_interaction_db(hcp_name):

    query = """
    SELECT
        hcp_name,
        hospital,
        interaction_date,
        interaction_type,
        products_discussed,
        meeting_summary,
        follow_up
    FROM interactions
    WHERE hcp_name=%s
    ORDER BY id DESC
    LIMIT 1
    """

    cursor.execute(query, (hcp_name,))

    result = cursor.fetchone()

    if result:
        return {
            "hcpName": result[0],
            "hospital": result[1],
            "interactionDate": result[2],
            "interactionType": result[3],
            "productsDiscussed": result[4],
            "meetingSummary": result[5],
            "followUp": result[6],
        }

    return None