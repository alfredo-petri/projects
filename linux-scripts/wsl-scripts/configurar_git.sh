#!/bin/bash

# Solicita o nome de usuário e armazena na variável userName
read -p "Digite o nome de usuário que deseja utilizar no Git: " userName

# Configura o nome de usuário global no Git
git config --global user.name "$userName"

# Solicita o email e armazena na variável email
read -p "Digite o email que deseja utilizar no Git: " email

# Configura o email global no Git
git config --global user.email "$email"

# Exibe a configuração do branch padrão de inicialização
echo "Branch padrão de inicialização:"
git config --global --get init.defaultBranch

# Configura o editor padrão para o Git
git config --global core.editor "code --wait"

# Configura o helper de credenciais
git config --global credential.helper store

echo "Configuração do Git concluída com sucesso!"

