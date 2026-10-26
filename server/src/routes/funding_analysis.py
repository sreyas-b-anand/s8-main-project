from fastapi import APIRouter
from ..models import FundingAnalysisData, CommonResponse , FundingAnalysisRequest

funding_analysis_router = APIRouter()

@funding_analysis_router.post("/")
def get_rag(request: FundingAnalysisRequest) -> CommonResponse:
    obj = request

    return CommonResponse( message="received successfully" ,
                            success=True,
                            data=FundingAnalysisData(
                                funding_status="Your startup is likely to receive funding",
                                recommended_investors="Investor A, Investor B, Investor C"
                            ) 
           )