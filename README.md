# [Desafio] - Node.js (Express)

# Descrição do projeto

Este projeto é uma api para plataforma de ensino a distância da [BITEDUC](https://gabriel-trevisan.github.io/biteduc-landing_page/). Ela pode ser considerada o backend, na qual os usuários vão se cadastrar, criar cursos ou assistir as aulas disponibilizadas por outros usuários.

Atualmente, o projeto se encontra incompleto.

# Construido com

* NodeJS: v14.18.2
* Yarn: v1.22.17
* PostgreSQL: v14.1

# Como executá-lo

Com as tecnologias acima acima instaladas e configuradas, clone este repositório para máquina local, com o comando abaixo.

```
git clone https://github.com/gabriel-trevisan/biteduc-api.git
```

Depois de clonado o repositório, acesse o projeto com o terminal usando o comando abaixo.

```
cd biteduc-api
```

Após acessar a pasta do projeto, execute o comando abaixo para fazer o download das dependencias do projeto.

```
yarn install
```

Depois execute o comando abaixo para gerar a build do projeto 

```
yarn tsc
```

Depois de gerado a build, execute o comando abaixo para criar as tabelas do banco de dados.


```
yarn typeorm migration:run
```

Depois de gerado as tabelas, execute a api com o comando abaixo.

```
node dist/server.js
```

Pronto! A api estará pronta para uso. 

Deixei uma pasta de collections na raiz do projeto para realizar as requisições com o Insominia.


# Sobre o desafio

Nesse desafio você irá desenvolver uma aplicação utilizando Node.js que deverá resolver o seguinte problema: 👇

> "Pensando em construir o futuro, como você solucionaria os problemas de acesso à educação hoje, utilizando a tecnologia?"
> 

Com essa ideia em mente, crie uma API REST para propor a solução (imaginando que uma aplicação front-end irá consumi-la). Dessa forma, não é necessário se preocupar com a parte visual do projeto, focando completamente nas funcionalidades e regras de negócio de um back-end real.

Para que seu desafio possa ser avaliado, você deverá disponibilizar o código completo no Github. Esse repositório também deve conter um **README** com a descrição do projeto e um passo a passo de como executar o projeto.

Por isso, é importante que você tente deixar seu código limpo, claro e organizado, para que fique de fácil entendimento no momento da correção.

**Lembre-se:** não existe certo ou errado. O nosso objetivo é que você tenha a liberdade de construir a sua solução, porém, limitando-se a algumas tecnologias que são as mais desejadas hoje pelas empresas parceiras.

## Tecnologias

Para desenvolver seu projeto, é necessário utilizar algumas tecnologias (obrigatórias) como base. Elas costumam ser necessárias em qualquer cenário, então não se sinta limitado(a) a utilizar somente elas. Além delas, trouxemos algumas **sugestões**, conforme a solução que você preferir desenvolver.

Foque em entregar o melhor que você pode com o que você sabe, não se sinta forçado(a) a aplicar todas as ferramentas sugeridas. Na avaliação, será levado em conta o seu nível e sua habilidade dentro da sua esfera de conhecimento. E as sugestões são sugestões de verdade, elas não afetam a avaliação. 💜

**Obrigatórias:**

- Express;
- TypeScript;

**Sugestões:**

- Prisma ou TypeORM;
- SQLite/Postgres;
- Docker;

# 📅 Entrega

Deve ser entregue para esse desafio:

- Código do projeto no GitHub;

Essas informações devem ser enviadas no formulário abaixo. 

Após concluir seu envio, que tal compartilhar no Linkedin seu projeto? É uma ótima forma de mostrar seus conhecimentos e celebrar este marco na evolução da sua carreira! Um bom portfólio sempre atrai boas oportunidades!
