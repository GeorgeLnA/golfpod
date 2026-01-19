-- Create the golfpod_leads table
CREATE TABLE IF NOT EXISTS golfpod_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_golfpod_leads_created_at 
  ON golfpod_leads(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_golfpod_leads_email 
  ON golfpod_leads(email);

-- Disable Row Level Security (RLS) for public form submissions
-- This allows anyone to insert data into the table
ALTER TABLE golfpod_leads DISABLE ROW LEVEL SECURITY;
