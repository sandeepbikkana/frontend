# # -----------------------
# # 1. Builder Stage
# # -----------------------
# FROM node:18-alpine AS builder

# # Create app directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the full source code
# COPY . .

# # Build the Next.js app
# RUN npm run build



# # -----------------------
# # 2. Production Stage
# # -----------------------
# FROM node:18-alpine AS runner

# WORKDIR /app

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# # Copy only necessary files from builder
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules

# # Expose app port
# EXPOSE 3000

# # Start Next.js in production mode
# CMD ["npm", "start"]






# -----------------------
# 1. Builder Stage
# -----------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else
COPY . .

# Build the Next.js app in standalone mode
RUN npm run build


# -----------------------
# 2. Runner Stage (Ultra Small Image)
# -----------------------
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only the standalone build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
