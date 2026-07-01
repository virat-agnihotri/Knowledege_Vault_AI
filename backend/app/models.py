from sqlalchemy import create_engine,text,ARRAY,String
from sqlalchemy.orm import DeclarativeBase,Mapped,mapped_column,Session,sessionmaker
from sqlalchemy import ForeignKey, String
from datetime import datetime
from app.database import base


class Users(base):
    __tablename__="LoginData"
    user_id:Mapped[int]=mapped_column(primary_key=True,autoincrement=True)
    user_name:Mapped[str]=mapped_column(nullable=False)
    password_hash:Mapped[str]=mapped_column(nullable=False)
    email_id:Mapped[str]=mapped_column(nullable=False)
class Private(base):
    __tablename__="PrivateData"
    user_id:Mapped[int]=mapped_column(ForeignKey("LoginData.user_id"))
    workspace_id:Mapped[int]=mapped_column(default=1)
    private_id:Mapped[int]=mapped_column(primary_key=True,autoincrement=True)
    private_title:Mapped[str]=mapped_column(default="New Page")
    parent_page_id:Mapped[int|None]=mapped_column(ForeignKey("PrivateData.private_id"),nullable=True)
    date_time:Mapped[datetime]=mapped_column(default=datetime.utcnow)
class Agent(base):
    __tablename__="AgentData"
    user_id:Mapped[int]=mapped_column(ForeignKey("LoginData.user_id"))
    workspace_id:Mapped[int]=mapped_column(default=1)
    agent_id:Mapped[int]=mapped_column(primary_key=True,autoincrement=True)
    agent_title:Mapped[str]=mapped_column(default="New Page")
    parent_page_id:Mapped[int|None]=mapped_column(ForeignKey("PrivateData.private_id"),nullable=True)
    date_time:Mapped[datetime]=mapped_column(default=datetime.utcnow)

#this is the pruposed one solution by gpt that we should create 1 table and differentiate them by page type

class Page(base):
    __tablename__ = "PageData"
    page_id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("LoginData.user_id"),nullable=False)
    workspace_id: Mapped[int] = mapped_column(default=1)
    title: Mapped[str] = mapped_column(default="New Page")
    # "private" or "agent"
    page_type: Mapped[str] = mapped_column(nullable=False)
    # NULL = top-level page
    parent_page_id: Mapped[int | None] = mapped_column(ForeignKey("PageData.page_id"),nullable=True)
    created_at: Mapped[DateTime] = mapped_column(DateTime,default=DateTime.utcnow)