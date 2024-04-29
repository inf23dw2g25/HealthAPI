# Use a imagem oficial do Node.js
FROM inf2023dw2g25/healthapi:healthapi-node

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários e instale as dependências
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Defina as variáveis de ambiente
ENV NODE_PORT=3000
ENV GOOGLE_CLIENT_ID=860907029773-f1k556igmjvjdm8lpg0cja24olm2mhnf.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV GOOGLE_CALLBACK_URI=http://localhost:3000/google/callback
ENV SESSION_SECRET=gatos
ENV PROTOCOL=http
ENV ENV=Development
ENV HOSTNAME=localhost

# Exponha a porta do aplicativo Node.js
EXPOSE 3000

# Comando para iniciar o servidor Node.js
CMD ["npm", "start"]
