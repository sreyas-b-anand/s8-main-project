from pydantic import BaseModel
from typing import Generic, TypeVar

T = TypeVar("T")

class CommonResponse(BaseModel, Generic[T]):
    success: bool
    message: str
    data: T

# We will use the CommonResponse class to wrap the response data for all endpoints, 
# making it easier to handle success and error messages consistently across the application.
# Make sure to import this class in your route files 
# and use it as the return type for your endpoint functions.
# The 'data' field will hold the actual response data, 
# which can be of any type (hence the use of generics).
# And these generic dtypes must strictly be from the below section.

class RagData(BaseModel):
    answer: str
    
class SuccessPredictionData(BaseModel):
    prediction: str
    
class FundingAnalysisData(BaseModel):
    funding_status: str
    recommended_investors: str