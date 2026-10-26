from fastapi import APIRouter
from ..models import SuccessPredictionRequest, CommonResponse , SuccessPredictionData

success_prediction_router = APIRouter()

@success_prediction_router.post("/")
def get_rag(request: SuccessPredictionRequest) -> CommonResponse:
    text = request.input_data

    return  CommonResponse( message="received successfully" ,
                            success=True,
                            data=SuccessPredictionData(
                                prediction="you will fail" + text
                            ) 
            )