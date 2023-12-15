<h1 align="center">
  Backend - Hospeda Eventos
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre-o-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-uso">Uso</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## 🌐 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org) 
[![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)

## 💻 Sobre o Projeto

O backend oferece um serviço de reserva de quartos em hotéis associados a eventos que acontecerão na cidade. O servidor foi projetado para facilitar a pesquisa, seleção e reserva de acomodações para participantes de eventos, permitindo uma experiência de hospedagem conveniente e personalizada. Também é possível promotores de eventos solicitarem hotéis oficiais para servirem de acomodações para seus eventos, e assim o admin do sistema aprovar estas solicitações, e o mesmo pode cadastrar novos hotéis e quartos. 

Trabalhamos com quatro níveis de acesso `["guest" | "user" | "promoter" | "admin"]`, onde todo usuário cadastrado na aplicação será por padrão um `user`, mas o mesmo pode ter previlégios adicionais como se tornar um `promoter` para poder solicitar hospedagens para eventos, e por fim o `admin` é o usuário com maior nível de acesso na aplicação. Mesmo estando de forma implícita, temos o `guest`, que é um cliente/browser que ainda não se cadastrou na plataforma, ou um `user` que não está logado para podermos identificar, e assim este `guest` não poderá realizar algumas ações que necessitam do nível de `user` para serem realizadas.
 
## 📦 Instalação

Para clonar o projeto, com o [Git](https://git-scm.com/) já instalado no seu computador, execute o comando abaixo:

```bash
git clone https://github.com/hospeda-eventos/hospeda-server.git
```

Em seguida, abra seu editor de código no diretório do seu projeto.

Para instalar as dependências execute o comando abaixo na pasta do projeto:

```bash
npm install
```

## 🔨 Uso

Primeiramente garanta que os containers [Docker](https://www.docker.com/) estajam sendo construídos com as últimas alterações realizadas no arquivo Dockerfile e Docker Compose: 
```bash
docker compose build
```

Depois suba os containers em sua máquina com o seguinte comando:
```bash
docker compose up -d
```

Em seguida entre no serviço que está rodando o processo da aplicação em NestJS:
```bash
docker compose exec nestjs bash
```

Dentro do container server, crie as tabelas do banco de dados:
```bash
npm run prisma:migrate
```

Crie as *seeds* do banco com o comando abaixo:
```bash
npm run prisma:seed
```

Para rodar o servidor execute algum dos comandos abaixo:
```bash
npm run start:dev
npm run start:server
```