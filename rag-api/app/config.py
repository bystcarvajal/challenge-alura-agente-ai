import os
from dotenv import load_dotenv

load_dotenv()


GEMINI_API_KEY = os.getenv(
    "GEMINI_API_KEY"
)

QDRANT_URL = os.getenv(
    "QDRANT_URL"
)

QDRANT_API_KEY = os.getenv(
    "QDRANT_API_KEY"
)

COLLECTION_NAME = os.getenv(
    "COLLECTION_NAME",
    "pdf_knowledge"
)

PDF_URL = os.getenv(
    "PDF_URL"
)