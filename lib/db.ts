import { Pool } from 'pg'

const isProduction = process.env.NODE_ENV === 'production'

const pool = new Pool({
  connectionString: isProduction
    ? process.env.DATABASE_URL
    : `postgresql://${process.env.DB_USER || 'postgres'}:${process.env.DB_PASSWORD || 'your_password'}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '5432'}/${process.env.DB_NAME || 'visa_applications'}`,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
})

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database')
})

pool.on('error', (err) => {
  console.error('❌ Unexpected error on idle client', err)
  process.exit(-1)
})

export default pool
