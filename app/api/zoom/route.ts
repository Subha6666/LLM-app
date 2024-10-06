import { NextResponse } from 'next/server'
import axios from 'axios'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'TEACHER') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { topic, start_time, duration } = await request.json()

  try {
    const response = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic,
        type: 2,
        start_time,
        duration,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          watermark: false,
          use_pmi: false,
          approval_type: 0,
          audio: 'both',
          auto_recording: 'none'
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.ZOOM_JWT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    )

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error creating Zoom meeting:', error)
    return NextResponse.json({ error: 'Failed to create Zoom meeting' }, { status: 500 })
  }
}