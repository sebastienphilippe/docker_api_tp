# Récupèrela dernière version de nodejs pour l'image docker.

FROM node:latest

# Définition du répertoire de travail dans lequel nos fichiers seront présents
WORKDIR /api

# copy demande la source et la destination, il transfert les fichiers locaux vers le container docker
COPY . .

# Installation des package du service
CMD npm install && node server.js

