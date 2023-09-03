from sqlalchemy import Column, String, Integer, Float
from Model import Base

class Produto(Base):
    __tablename__ = 'produto'

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome = Column(String(15), default='Vinho')
    descricao = Column(String(35), nullable=True)
    preco = Column(Float)
    avaliacao = Column(String(80))
    categoria = Column(String(80))
    quantidade = Column(Integer)
    imagem = Column(String)

    def __init__(self, nome: str, descricao: str, preco: float, avaliacao: str, categoria: str, quantidade: int,   imagem: str):
        self.nome = nome
        self.descricao = descricao
        self.preco = preco
        self.avaliacao = avaliacao
        self.categoria = categoria
        self.quantidade = quantidade
        self.imagem = imagem

