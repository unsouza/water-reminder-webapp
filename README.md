# Water Reminder Webapp

Aplicação web para lembrar de beber água.

## Váriaveis ambiente
Antes de rodar a aplicação, copie o arquivo de exemplo para criar seu arquivo .env local:
```bash
cp .env.example .env
```

## Como Rodar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/water-reminder-webapp.git
cd water-reminder-webapp
```

2. Inicie a aplicação:
```bash
docker compose up -d
```

3. Acesse a aplicação:
- Abra seu navegador e acesse: `http://localhost:5173`

## Desenvolvimento

- A aplicação está configurada com hot-reload
- As alterações no código serão refletidas automaticamente no navegador
- Os logs do servidor de desenvolvimento aparecerão no terminal

## Parar a Aplicação

Para parar a aplicação, pressione `Ctrl+C` no terminal ou execute:
```bash
docker compose down
```

## Tecnologias Utilizadas
- Vite: ferramenta rápida para build e desenvolvimento com hot-reload.

- React (TypeScript): biblioteca para criar a interface usando tipagem para mais segurança.

- TailwindCSS: framework CSS baseado em classes para estilizar de forma rápida e fácil.

- Docker & Docker Compose: para rodar a aplicação em containers, garantindo ambiente padronizado e fácil de usar.
