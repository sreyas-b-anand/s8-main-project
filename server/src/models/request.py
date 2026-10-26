from pydantic import BaseModel 

class RagRequest(BaseModel):
    query : str 
    
class SuccessPredictionRequest(BaseModel):
    input_data : str
    
class FundingAnalysisRequest(BaseModel):
    startup_name : str
    founder_name : str
    industry : str
    funding_amount : float