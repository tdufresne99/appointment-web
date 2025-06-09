import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  console.log('Appointment received:', data)

  return NextResponse.json({ message: 'Appointment received' }, { status: 200 })
}
// This route handles POST requests to the appointment API, logging the appointment data and returning a success response.
// It is used to process appointment bookings from the BookingForm component in the appointment app.