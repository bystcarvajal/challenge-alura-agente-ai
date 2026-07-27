import requests
from pypdf import PdfReader
from io import BytesIO


def load_pdf_from_url(url):

    response = requests.get(url)

    response.raise_for_status()

    pdf_file = BytesIO(response.content)

    reader = PdfReader(pdf_file)


    text = ""

    for page in reader.pages:
        text += page.extract_text() + "\n"


    return text