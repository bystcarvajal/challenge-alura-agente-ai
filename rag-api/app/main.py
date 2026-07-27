from fastapi import FastAPI

app = FastAPI(
    title="PDF RAG API",
    description="API para consultar documentos PDF utilizando Gemini y Qdrant",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "PDF RAG API funcionando correctamente"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
    }