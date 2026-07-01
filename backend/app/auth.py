from datetime import datetime, timedelta
from jose import JWTError, jwt

SECRET_KEY = "my-super-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})   #earlieer sub:5 and now ti becomes sub:5 and exp:6:30pm
    encoded_jwt=jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM
    )
    return encoded_jwt

# these functions will be added here
# hash_password()

# verify_password()

# create_access_token()

# verify_token()