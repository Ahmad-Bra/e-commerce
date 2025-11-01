FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Create uploads directories and ensure proper permissions
RUN mkdir -p /app/uploads/products /app/uploads/profile && \
    chown -R node:node /app/uploads && \
    chmod -R 755 /app/uploads

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "./dist/index.js"]