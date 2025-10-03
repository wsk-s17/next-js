FROM node:lts-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM node:lts-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:lts-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

COPY --from=builder /app/next.config.mjs ./

EXPOSE 3000
CMD ["npm", "start"]