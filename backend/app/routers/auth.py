from passlib.context import CryptContext  #it is a bycrpt machine hashes the password

pwd_context=CryptContext(schemes=["bcrypt"]),
deprecated="auto"

def hash_password(password:str):
    return pwd_context.hash(password)

def verify_password(plain_password,hashed_password):
    return pwd_context.verify(plain_password,hashed_password)




# here will all these function will come
# 
# POST /signup

# POST /login

# POST /refresh

# POST /logout