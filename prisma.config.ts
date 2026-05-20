import { defineConfig } from '@prisma/config'

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL // O Prisma Migrate vai ler a URL daqui agora
  }
})