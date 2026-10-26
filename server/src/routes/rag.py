from fastapi import APIRouter
from ..models import RagRequest, CommonResponse , RagData

rag_router = APIRouter()

@rag_router.post("/")
def get_rag(request: RagRequest) -> CommonResponse:
    text = request.query

    return  CommonResponse(message="received successfully" ,
                           success=True,
                          data=RagData(
                              answer="Generated answer for the query: " + text
                          )
            )