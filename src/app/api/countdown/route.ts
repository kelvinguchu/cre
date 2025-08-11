import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()

  const envIso = process.env.COUNTDOWN_TARGET_ISO?.trim()
  const envUnix = process.env.COUNTDOWN_TARGET_UNIX_MS?.trim()

  let targetISO: string | undefined = undefined

  if (envIso) {
    targetISO = new Date(envIso).toISOString()
  } else if (envUnix && !Number.isNaN(Number(envUnix))) {
    targetISO = new Date(Number(envUnix)).toISOString()
  } else {
    targetISO = new Date('2025-08-18T00:00:00.000Z').toISOString()
  }

  return NextResponse.json({
    targetISO,
    serverNowISO: now.toISOString(),
  })
}
