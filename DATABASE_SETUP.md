# PostgreSQL Database Setup Guide

## Prerequisites

1. **Install PostgreSQL** on your system:
   - Windows: Download from https://www.postgresql.org/download/windows/
   - macOS: `brew install postgresql`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Start PostgreSQL service**:
   - Windows: PostgreSQL service should start automatically
   - macOS: `brew services start postgresql`
   - Linux: `sudo systemctl start postgresql`

## Database Setup

### 1. Create Database

Connect to PostgreSQL as the postgres user:

```bash
# Windows (if using pgAdmin, you can also use the GUI)
psql -U postgres

# macOS/Linux
sudo -u postgres psql
```

Create the database:

```sql
CREATE DATABASE visa_applications;
```

### 2. Run Schema Script

Execute the schema script to create tables:

```bash
psql -U postgres -d visa_applications -f scripts/schema.sql
```

Or connect to the database and run the script:

```bash
psql -U postgres -d visa_applications
\i scripts/schema.sql
```

## Environment Configuration

### 1. Create Environment File

Copy the example environment file:

```bash
cp env.example .env.local
```

### 2. Update Database Credentials

Edit `.env.local` with your PostgreSQL credentials:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=visa_applications
DB_PASSWORD=your_actual_password
DB_PORT=5432
```

## Application Setup

### 1. Install Dependencies

The PostgreSQL dependencies are already installed:

```bash
npm install
```

### 2. Test Database Connection

Start the development server:

```bash
npm run dev
```

Submit a test application through the form to verify the database connection.

## Database Schema

The `applications` table includes the following fields:

- `id`: Primary key (auto-increment)
- `tracking_id`: Unique tracking identifier
- `first_name`, `last_name`: Applicant name
- `email`, `phone`: Contact information
- `date_of_birth`: Date of birth
- `nationality`: Nationality
- `passport_number`: Passport number
- `visa_type`: Type of visa requested
- `purpose`: Purpose of visit
- `duration`: Duration of stay
- `address`, `city`, `country`, `postal_code`: Address information
- `occupation`, `employer`: Employment details
- `annual_income`: Annual income
- `previous_visits`: Previous visits to Canada
- `criminal_record`: Criminal record flag
- `medical_conditions`: Medical conditions
- `emergency_contact`, `emergency_phone`: Emergency contact
- `additional_info`: Additional information
- `status`: Application status (pending, under_review, approved, rejected)
- `notes`: Internal notes
- `submitted_at`, `updated_at`: Timestamps

## API Endpoints

### POST /api/applications
Submit a new visa application

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1-555-0123",
  "dateOfBirth": "1990-01-01",
  "nationality": "American",
  "passportNumber": "US123456789",
  "visaType": "tourist",
  "purpose": "Vacation",
  "duration": "1-7",
  "address": "123 Main St",
  "city": "New York",
  "country": "USA",
  "postalCode": "10001",
  "occupation": "Software Engineer",
  "employer": "Tech Corp",
  "annualIncome": "75000",
  "previousVisits": "",
  "criminalRecord": false,
  "medicalConditions": "",
  "emergencyContact": "Jane Doe",
  "emergencyPhone": "+1-555-0124",
  "additionalInfo": ""
}
```

**Response:**
```json
{
  "success": true,
  "trackingId": "TVH-2024-123456",
  "message": "Application submitted successfully"
}
```

### GET /api/applications
Get all applications (for admin use)

**Response:**
```json
[
  {
    "id": 1,
    "trackingId": "TVH-2024-123456",
    "firstName": "John",
    "lastName": "Doe",
    // ... all application fields
    "status": "pending",
    "submittedAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
]
```

## Troubleshooting

### Connection Issues

1. **Check PostgreSQL service is running**
2. **Verify credentials in `.env.local`**
3. **Ensure database exists**: `psql -U postgres -l` to list databases
4. **Check firewall settings** if connecting remotely

### Permission Issues

1. **Create user with proper permissions**:
```sql
CREATE USER your_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE visa_applications TO your_user;
```

2. **Or use postgres user** (default superuser)

### Schema Issues

1. **Drop and recreate database** if needed:
```sql
DROP DATABASE IF EXISTS visa_applications;
CREATE DATABASE visa_applications;
```

2. **Run schema script again**:
```bash
psql -U postgres -d visa_applications -f scripts/schema.sql
```

## Security Considerations

1. **Use environment variables** for sensitive data
2. **Implement proper authentication** for admin endpoints
3. **Add input validation** and sanitization
4. **Use HTTPS** in production
5. **Regular database backups**
6. **Implement rate limiting** for API endpoints

## Production Deployment

1. **Use managed PostgreSQL service** (AWS RDS, Google Cloud SQL, etc.)
2. **Set up connection pooling** for better performance
3. **Configure proper indexes** for query optimization
4. **Implement monitoring** and logging
5. **Set up automated backups** 