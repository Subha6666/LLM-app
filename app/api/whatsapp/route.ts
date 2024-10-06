import { NextResponse } from 'next/server'
import twilio from 'twilio'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { to, body } = await request.json()

  try {
    const message = await client.messages.create({
      body,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      to: `whatsapp:${to}`
    })

    return NextResponse.json({ success: true, messageSid: message.sid })
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return NextResponse.json({ error: 'Failed to send WhatsApp message' }, { status: 500 })
  }
}