'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', date: '', time: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setSuccess(true)
      setForm({ name: '', date: '', time: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="border p-2 w-full"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Book
      </button>
      {success && <p className="text-green-700">Appointment successfully booked!</p>}
    </form>
  )
}
// This component renders a booking form where users can enter their name, date, and time for an appointment.
// It handles form submission, sends the data to the server, and displays a success message upon successful booking.