from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=".env")

print("Current Folder:", os.getcwd())
print("API Key:", os.getenv("GROQ_API_KEY"))