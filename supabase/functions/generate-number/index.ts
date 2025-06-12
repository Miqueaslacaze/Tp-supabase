import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve(async (req) => {
  // Generate a random number between 1 and 7
  const number = Math.floor(Math.random() * 7) + 1

  return new Response(
    JSON.stringify({ number }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    },
  )
}) 