import BookingForm from '@/components/BookingForm'

export default function AppointmentPage() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <BookingForm />
    </main>
  )
}
// This is the appointment page where users can book appointments using the BookingForm component.