const { Pool } = require('pg')
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

const fs = require('fs')
const path = require('path')

// Database configuration
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'visa_applications',
  password: process.env.DB_PASSWORD || 'your_password',
  port: parseInt(process.env.DB_PORT || '5432'),
})

async function initializeDatabase() {
  try {
    console.log('Connecting to PostgreSQL...')
    
    // Read the schema file
    const schemaPath = path.join(__dirname, 'schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')
    
    console.log('Creating tables...')
    
    // Execute the schema
    await pool.query(schema)
    
    console.log('✅ Database initialized successfully!')
    console.log('✅ Tables created:')
    console.log('   - applications')
    console.log('   - Indexes created for performance')
    console.log('   - Triggers set up for automatic timestamp updates')
    
  } catch (error) {
    console.error('❌ Error initializing database:', error.message)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

// Run the initialization
initializeDatabase() 