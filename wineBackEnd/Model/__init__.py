from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database
import os

from Model.Base import Base
from Model.Produto import Produto

db_path = 'database/'
db_url = 'sqlite:///%s/db.sqlite3' % db_path

if not os.path.exists(db_path):
    os.makedirs(db_path)

engine = create_engine(db_url, echo=False)

Session = sessionmaker(bind=engine)

if not database_exists(db_url):
    create_database(db_url)

Base.metadata.create_all(engine)
session = Session()
itens = [
    {
            "nome": "Montes Alpha - Cabernet Sauavignon",
            "descricao": "Verdadeiro clássico da América do Sul, o Montes Alpha foi o primeiro grande tinto chileno, inspirado nos melhores vinhos de Bordeaux.  Um vinho excelente, de imbatível relação qualidade/preço",
            "preco": "259,23",
            "avaliacao": 8.8,
            "categoria": "Cabernet Sauavignon",
            "quantidade": 25,
            "imagem":
                "https://cdn.mistral.com.br/products/35015/img_m_35015.png"
    }
    ]

for item in itens:
    novo_item = Produto (
        nome=item['nome'],
        descricao=item['descrição'],
        preco=item['preço'],
        avaliacao=item['avaliação'],
        categoria=item['categoria'],
        quantidade=item['quantidade'],
        imagem=item['imagem'],
    )
    session.add(novo_item)
session.commit()









