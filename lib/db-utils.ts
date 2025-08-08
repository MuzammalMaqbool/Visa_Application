import pool from './db'

export interface ApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  nationality: string
  passportNumber: string
  visaType: string
  purpose: string
  duration: string
  address: string
  city: string
  country: string
  postalCode: string
  occupation: string
  employer?: string
  annualIncome?: string
  previousVisits?: string
  criminalRecord: boolean
  medicalConditions?: string
  emergencyContact: string
  emergencyPhone: string
  additionalInfo?: string
}

export interface ApplicationRecord extends ApplicationData {
  id: number
  trackingId: string
  status: string
  notes?: string
  submittedAt: Date
  updatedAt: Date
}

// Generate tracking ID
export function generateTrackingId(): string {
  const year = new Date().getFullYear()
  const timestamp = Date.now().toString().slice(-6)
  return `TVH-${year}-${timestamp}`
}

// Insert new application
export async function insertApplication(data: ApplicationData): Promise<{ trackingId: string; id: number }> {
  const trackingId = generateTrackingId()
  
  const query = `
    INSERT INTO applications (
      tracking_id, first_name, last_name, email, phone, date_of_birth,
      nationality, passport_number, visa_type, purpose, duration,
      address, city, country, postal_code, occupation, employer,
      annual_income, previous_visits, criminal_record, medical_conditions,
      emergency_contact, emergency_phone, additional_info
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24)
    RETURNING id, tracking_id
  `

  const values = [
    trackingId,
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.dateOfBirth,
    data.nationality,
    data.passportNumber,
    data.visaType,
    data.purpose,
    data.duration,
    data.address,
    data.city,
    data.country,
    data.postalCode,
    data.occupation,
    data.employer || null,
    data.annualIncome ? parseFloat(data.annualIncome) : null,
    data.previousVisits || null,
    data.criminalRecord,
    data.medicalConditions || null,
    data.emergencyContact,
    data.emergencyPhone,
    data.additionalInfo || null,
  ]

  const result = await pool.query(query, values)
  return {
    trackingId: result.rows[0].tracking_id,
    id: result.rows[0].id
  }
}

// Get application by tracking ID
export async function getApplicationByTrackingId(trackingId: string): Promise<ApplicationRecord | null> {
  const query = 'SELECT * FROM applications WHERE tracking_id = $1'
  const result = await pool.query(query, [trackingId])
  
  if (result.rows.length === 0) {
    return null
  }

  const row = result.rows[0]
  return {
    id: row.id,
    trackingId: row.tracking_id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    dateOfBirth: row.date_of_birth,
    nationality: row.nationality,
    passportNumber: row.passport_number,
    visaType: row.visa_type,
    purpose: row.purpose,
    duration: row.duration,
    address: row.address,
    city: row.city,
    country: row.country,
    postalCode: row.postal_code,
    occupation: row.occupation,
    employer: row.employer,
    annualIncome: row.annual_income?.toString(),
    previousVisits: row.previous_visits,
    criminalRecord: row.criminal_record,
    medicalConditions: row.medical_conditions,
    emergencyContact: row.emergency_contact,
    emergencyPhone: row.emergency_phone,
    additionalInfo: row.additional_info,
    status: row.status,
    notes: row.notes,
    submittedAt: row.submitted_at,
    updatedAt: row.updated_at,
  }
}

// Get application by numeric ID
export async function getApplicationById(id: number): Promise<ApplicationRecord | null> {
  const query = 'SELECT * FROM applications WHERE id = $1'
  const result = await pool.query(query, [id])
  if (result.rows.length === 0) {
    return null
  }
  const row = result.rows[0]
  return {
    id: row.id,
    trackingId: row.tracking_id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    dateOfBirth: row.date_of_birth,
    nationality: row.nationality,
    passportNumber: row.passport_number,
    visaType: row.visa_type,
    purpose: row.purpose,
    duration: row.duration,
    address: row.address,
    city: row.city,
    country: row.country,
    postalCode: row.postal_code,
    occupation: row.occupation,
    employer: row.employer,
    annualIncome: row.annual_income?.toString(),
    previousVisits: row.previous_visits,
    criminalRecord: row.criminal_record,
    medicalConditions: row.medical_conditions,
    emergencyContact: row.emergency_contact,
    emergencyPhone: row.emergency_phone,
    additionalInfo: row.additional_info,
    status: row.status,
    notes: row.notes,
    submittedAt: row.submitted_at,
    updatedAt: row.updated_at,
  }
}

// Get all applications (for admin)
export async function getAllApplications(): Promise<ApplicationRecord[]> {
  const query = 'SELECT * FROM applications ORDER BY submitted_at DESC'
  const result = await pool.query(query)
  
  return result.rows.map(row => ({
    id: row.id,
    trackingId: row.tracking_id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    dateOfBirth: row.date_of_birth,
    nationality: row.nationality,
    passportNumber: row.passport_number,
    visaType: row.visa_type,
    purpose: row.purpose,
    duration: row.duration,
    address: row.address,
    city: row.city,
    country: row.country,
    postalCode: row.postal_code,
    occupation: row.occupation,
    employer: row.employer,
    annualIncome: row.annual_income?.toString(),
    previousVisits: row.previous_visits,
    criminalRecord: row.criminal_record,
    medicalConditions: row.medical_conditions,
    emergencyContact: row.emergency_contact,
    emergencyPhone: row.emergency_phone,
    additionalInfo: row.additional_info,
    status: row.status,
    notes: row.notes,
    submittedAt: row.submitted_at,
    updatedAt: row.updated_at,
  }))
}

// Update application status
// export async function updateApplicationStatus(trackingId: string, status: string, notes?: string): Promise<void> {
//   const query = 'UPDATE applications SET status = $1, notes = $2 WHERE tracking_id = $3'
//   await pool.query(query, [status, notes, trackingId])
// } 
// ... existing code ...
// Update application status
  export async function updateApplicationStatus(id: number, status: string, notes?: string): Promise<void> {
    const query = 'UPDATE applications SET status = $1, notes = $2 WHERE id = $3'
  await pool.query(query, [status, notes, id])
  }
