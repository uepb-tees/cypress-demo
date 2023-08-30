#language:pt

Funcionalidade: Google Search
  Cenario: Busca no Google por UEPB - estou com sorte
    Dado Eu entro na URL Base
    Quando Eu digito "UEPB" na caixa de pesquisa
    E Eu clico no botao estou com sorte
    Entao Eu devo ver a string "UEPB" no site "https://uepb.edu.br"

  Cenario: Busca no Google por UEPB
    Dado Eu entro na URL Base
    Quando Eu digito "UEPB" na caixa de pesquisa
    E Eu clico no botao pesquisar
    Entao Eu devo ver a string "UEPB" no site "google.com"
