from fastapi import APIRouter
from database.db import cursor

router = APIRouter()

@router.get("/dashboard")
def dashboard():

    cursor.execute("SELECT COUNT(DISTINCT hcp_name) FROM interactions")
    doctors = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM interactions")
    interactions = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM interactions WHERE follow_up<>''")
    followups = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(DISTINCT products_discussed) FROM interactions")
    products = cursor.fetchone()[0]

    return {
        "doctors": doctors,
        "interactions": interactions,
        "followups": followups,
        "products": products
    }