import Link from 'next/link'

export default function HomePage() {
    return (
        <main className="min-h-screen p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Appointment App</h1>
            <p className="mb-4">Book appointments quickly and easily online</p>
            <ul className="flex justify-center space-x-4 mb-8">
                <li>
                    <Link href="/appointment" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Book an appointment
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        About us
                    </Link>
                </li>
            </ul>
        </main>
    )
}
// This is the main page of the appointment app, providing a welcome message and a link to book an appointment.