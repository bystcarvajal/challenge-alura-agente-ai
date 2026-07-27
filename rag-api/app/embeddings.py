from langchain_google_genai import GoogleGenerativeAIEmbeddings
from app.config import GEMINI_API_KEY


def get_embedding_model():

    embeddings = GoogleGenerativeAIEmbeddings(
        model="models/embedding-001",
        google_api_key=GEMINI_API_KEY
    )

    return embeddings