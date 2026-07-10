import mysql.connector

print("DB FILE LOADED")

connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="qwerty",
    database="ai_first_crm",
)

print("DATABASE CONNECTED")

cursor = connection.cursor()