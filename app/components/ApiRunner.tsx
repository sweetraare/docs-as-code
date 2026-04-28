'use client'

import { useState } from 'react'

type ApiRunnerType = {
  endpoint: string
}

export function ApiRunner({ endpoint }: ApiRunnerType) {
  const [res, setRes] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const callAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch(endpoint)
      const json = await response.json()
      setRes(json)
    } catch (e) {
      setRes({ error: e })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <p>
        Endpoint: <code>{endpoint}</code>
      </p>
      <button
        className="h-12 w-50  rounded-full border-white border px-5 transition-colors hover:bg-[#1a1a1a] disabled:cursor-progress disabled:bg-white/70"
        disabled={loading}
        onClick={callAPI}
      >
        {loading ? 'Loading...' : 'Make API call'}
      </button>
      {res && (
        <pre className="bg-cyan-900 p-3 overflow-y-auto">
          {JSON.stringify(res, null, 2)}
        </pre>
      )}
    </div>
  )
}
