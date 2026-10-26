
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .routes import rag_router , success_prediction_router , funding_analysis_router
app = FastAPI(
    title="UBSP",
    description="UBSP backend server",
    version="1.0.0",

)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(rag_router, prefix="/api/rag")
app.include_router(success_prediction_router, prefix="/api/success_prediction")
app.include_router(funding_analysis_router, prefix="/api/funding_analysis")




@app.get("/health")
def health_check():
    return {"status": "healthy"}

