-- Create database (run this separately if needed)
-- CREATE DATABASE visa_applications;

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    tracking_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    nationality VARCHAR(100) NOT NULL,
    passport_number VARCHAR(50) NOT NULL,
    visa_type VARCHAR(50) NOT NULL,
    purpose TEXT NOT NULL,
    duration VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    occupation VARCHAR(100) NOT NULL,
    employer VARCHAR(255),
    annual_income DECIMAL(12,2),
    previous_visits TEXT,
    criminal_record BOOLEAN DEFAULT FALSE,
    medical_conditions TEXT,
    emergency_contact VARCHAR(100) NOT NULL,
    emergency_phone VARCHAR(20) NOT NULL,
    additional_info TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    notes TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for tracking_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_applications_tracking_id ON applications(tracking_id);

-- Create index for email for faster lookups
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);

-- Create index for status for filtering
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);

-- Create index for submitted_at for date-based queries
CREATE INDEX IF NOT EXISTS idx_applications_submitted_at ON applications(submitted_at);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_applications_updated_at 
    BEFORE UPDATE ON applications 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 