FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Create uploads directory and ensure proper permissions
RUN mkdir -p uploads/products && chmod -R 777 uploads

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "./dist/index.js"]