# 🤖 Agente IA - Chat con documentos usando n8n + Qdrant

Proyecto desarrollado como implementación de un agente de inteligencia artificial capaz de responder preguntas utilizando información almacenada en documentos mediante una arquitectura **RAG (Retrieval Augmented Generation)**.

El sistema integra:

- 🌐 Interfaz web desplegada en GitHub Pages.
- 🔗 Comunicación mediante Webhook con n8n.
- 🧠 Agente IA para procesamiento de preguntas.
- 📚 Base vectorial Qdrant para recuperación de información.
- 📄 Documentos indexados para consultas inteligentes.

---

# 🚀 Chat del Agente IA

Puedes acceder directamente al asistente desde el siguiente enlace:

👉 [Abrir Agente IA - Chat](https://bystcarvajal.github.io/challenge-alura-agente-ai/agt-chat/)

---

# 🏗️ Arquitectura del proyecto

El flujo general del sistema es:

```
Usuario
   |
   |
GitHub Pages
(Chat Web)
   |
   |
Webhook POST
   |
   |
n8n Cloud
   |
   |
Agente IA
   |
   |
Qdrant Vector Database
   |
   |
Respuesta al usuario
```

---

# 🔧 Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript
- GitHub Pages

## Automatización e IA

- n8n Cloud
- Webhooks
- Agente IA

## Base de conocimiento

- Qdrant Vector Database
- Embeddings
- Arquitectura RAG

---

# 📡 Comunicación con n8n

El frontend envía las preguntas mediante una petición HTTP POST:

```json
[
  {
    "question": "Pregunta del usuario"
  }
]
```

El agente procesa la consulta y devuelve:

```json
[
  {
    "output": "Respuesta generada por la IA"
  }
]
```

---

# 📸 Evidencias del proyecto

## Flujo del agente IA en n8n

![Evidencia n8n](images/evidencia-n8n.jpg)


## Base vectorial Qdrant

![Evidencia Qdrant](images/evidencia-qdrant.jpg)

---

# 📂 Estructura del repositorio

```
challenge-alura-agente-ai/
│
├── agt-chat/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── images/
│   ├── evidencia-1-n8n.jpg
│   └── evidencia-2-qdrant.jpg
│
└── README.md
```

---

# 🎯 Objetivo del proyecto

Implementar un asistente virtual basado en inteligencia artificial capaz de consultar información contenida en documentos, utilizando técnicas modernas de recuperación aumentada por generación (**RAG**) y herramientas de automatización.

---

# 👨‍💻 Autor

**Bystcarvajal**

Proyecto desarrollado como parte del desafío de implementación de agentes de inteligencia artificial.
