#!/bin/sh
set -e

echo "Iniciando entrypoint..."

if [ ! -d /usr/src/node_modules ]; then
  echo "node_modules não encontrado. Instalando dependências..."
  npm install
fi

echo "Subindo servidor com Vite..."
exec npm run dev -- --host
