#!/bin/bash

# Verifica se o script está sendo executado como root
if [ "$(id -u)" -ne "0" ]; then
  echo "Este script deve ser executado como root. Use sudo para executar o script."
  exit 1
fi

echo "Atualizando pacotes"
apt update -y
echo

echo "Atualizando pacotes"
apt full-upgrade -y
echo

PACKAGES="curl git adb ffmpeg"
echo "Instalando pacotes essenciais"
echo $PACKAGES | xargs apt install -y
echo

echo "Instalando a versão mais recente do nvm"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
#curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash


# Carregar nvm
#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
# Carrega nvm

source ~/.bashrc

echo "Instalando Node.js"
nvm install node

echo "Instalando yarn e nodemon"
npm install -g yarn nodemon

echo "Configuração concluída!"
