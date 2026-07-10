from database.db import connection, cursor


def save_interaction(data):

    query = """
    INSERT INTO interactions
    (
        hcp_name,
        hospital,
        interaction_date,
        interaction_type,
        products_discussed,
        meeting_summary,
        follow_up
    )

    VALUES
    (%s,%s,%s,%s,%s,%s,%s)
    """

    values = (

        data["hcpName"],
        data["hospital"],
        data["interactionDate"],
        data["interactionType"],
        data["productsDiscussed"],
        data["meetingSummary"],
        data["followUp"]

    )

    cursor.execute(query, values)

    connection.commit()

    return {
        "message": "Interaction Saved Successfully"
    }