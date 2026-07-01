from app.database import engine, Users, get_db,Login
from sqlalchemy.orm import Session 
from pydantic import BaseModel, EmailStr, Field
from typing import List

class UserCreate(BaseModel):
    email: EmailStr=Field(min_length=3,max_length=30)
    password:str=Field(min_length=8)

class SignupUser(BaseModel):
    user_id:int
    user_name:str
    passwd:str
    email_id:str