'use client'

import { useState } from "react"

type ApiRunnerType = {
  endpoint: string
}

export function ApiRunner({ endpoint }: ApiRunnerType) {
  const [res, setRes] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  console.log('endpoint', endpoint)

  const callAPI = async () => {
    setLoading(true)
    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      setRes(json);
    } catch (e) {
      setRes({ error: e });
    } finally {
      setLoading(false);
    }
  };

  return <div>
    <p>{endpoint}</p>
    <button
      disabled={loading}
      onClick={callAPI}
    >Make API call</button>
    <pre>
      {JSON.stringify(res, null, 2)}
    </pre>
  </div>
}
