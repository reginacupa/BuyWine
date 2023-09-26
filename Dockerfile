# specify the node base image with your desired version node:<version>
FROM node:14

#definir diretoria de trabalho
WORKDIR /app

#copiar os arquivos package.json  e lock json para aproveitar o cache de camadas
COPY package*.json ./

#instalar dependencias do projeto
RUN npm install

#copie todos so arquivos do diretório atual para o diretório de trabalho no container
COPY . .

#Compile o aplicativo React para a produção
RUN npm run build

# replace this with your application's default port
EXPOSE 3000


CMD ["npm", "start"]




