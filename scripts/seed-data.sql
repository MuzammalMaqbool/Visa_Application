-- Insert sample admin user
INSERT INTO admin_users (username, password_hash, email) 
VALUES ('admin', '$2b$10$rQZ9QmjQZ9QmjQZ9QmjQZO', 'admin@canadavisapro.com')
ON CONFLICT (username) DO NOTHING;

-- Insert sample applications for testing
INSERT INTO applications (
    tracking_id, first_name, last_name, email, phone, date_of_birth,
    nationality, passport_number, visa_type, purpose, duration,
    address, city, country, postal_code, occupation, employer,
    annual_income, emergency_contact, emergency_phone, status, notes
) VALUES 
(
    'CVP-2024-000001', 'John', 'Smith', 'john.smith@email.com', '+1-555-0101',
    '1985-03-15', 'American', 'US123456789', 'tourist', 'Vacation',
    '1-7', '123 Main St', 'New York', 'USA', '10001',
    'Software Engineer', 'Tech Corp', 75000.00,
    'Jane Smith', '+1-555-0102', 'approved',
    'All documents verified. Visa approved for 6 months.'
),
(
    'CVP-2024-000002', 'Maria', 'Garcia', 'maria.garcia@email.com', '+1-555-0201',
    '1990-07-22', 'Mexican', 'MX987654321', 'business', 'Conference',
    '8-30', '456 Oak Ave', 'Los Angeles', 'USA', '90210',
    'Marketing Manager', 'Global Inc', 65000.00,
    'Carlos Garcia', '+1-555-0202', 'under_review',
    'Pending document verification.'
),
(
    'CVP-2024-000003', 'David', 'Johnson', 'david.johnson@email.com', '+1-555-0301',
    '1988-11-08', 'British', 'GB456789123', 'student', 'University',
    '1year+', '789 Pine St', 'London', 'UK', 'SW1A 1AA',
    'Student', 'University of Toronto', 0.00,
    'Sarah Johnson', '+44-20-7946-0958', 'pending',
    'Application received. Initial review in progress.'
);
