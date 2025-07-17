'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:3003/')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message)
      })
      .catch(() => setMessage('Failed to load backend.'))
  }, [])

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-gray-800">🦎 Salamander Dashboard</h1>
      <p className="mt-6 text-lg text-green-600">
        API Response: {message}
      </p>
    </main>
  )
}
