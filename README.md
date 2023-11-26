## Camada de dominio
- ./Domain/repositories => cria as intefaces para os dados que serão armazenados
- ./Domain/models => logica de negócios

## Camada de aplicação
- ./app/dtos => utilizados para transferir os dados do dominio (iterators)
- ./app/controllers => controladores (controllers)
- ./app/factory => factrory

## Camada de infraestrutura
- ./infra/context => armazenamento dos itens
- ./infra/strategy => estrategias