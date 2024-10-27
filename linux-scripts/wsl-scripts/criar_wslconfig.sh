#!/bin/bash

# Caminho para o arquivo .wslconfig na pasta do usuário
ARQUIVO="$HOME/.wslconfig"

# Cria o arquivo .wslconfig e adiciona o conteúdo
echo "# Settings apply across all Linux distros running on WSL 2" > "$ARQUIVO"
echo "[wsl2]" >> "$ARQUIVO"
echo "networkingMode=mirrored" >> "$ARQUIVO"

echo "Arquivo .wslconfig criado e configurado com sucesso em $ARQUIVO"