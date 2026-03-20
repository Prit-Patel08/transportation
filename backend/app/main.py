from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import simulation

app = FastAPI(title="AI City Traffic Digital Twin API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(simulation.router)

@app.get("/")
def read_root():
    return {"status": "AI City Traffic Digital Twin Backend is Operational"}
