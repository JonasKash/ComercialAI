# Dockerfile para Lavitta / ComercialAI (Vite + React + TS)
# Local: /docker/ComercialAI/Dockerfile

# --- Estágio de Build ---
FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN chmod +x /app/node_modules/.bin/vite
# Removido o chmod para tsc, pois "build": "vite build" não o usa diretamente
# RUN if [ -f /app/node_modules/.bin/tsc ]; then chmod +x /app/node_modules/.bin/tsc; fi

# Execute o build e capture a saída ou pare se falhar
RUN npm run build || (echo "BUILD FALHOU" && exit 1)

# DEPURAR: Veja o que foi criado em /app após o build
RUN echo "Conteúdo de /app após o build:" && ls -la /app
RUN echo "Conteúdo de /app/dist (se existir):" && if [ -d /app/dist ]; then ls -la /app/dist; else echo "/app/dist NÃO EXISTE OU ESTÁ VAZIA" && exit 1; fi
# A linha acima com 'exit 1' vai parar o build se /app/dist não existir,
# para que possamos ver os logs dos 'ls' anteriores.

# --- Estágio de Produção (Servindo com Nginx) ---
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf # Se usar

# Copia os arquivos estáticos da pasta de build correta para o Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
