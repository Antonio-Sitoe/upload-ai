import { FFmpeg } from '@ffmpeg/ffmpeg'

let ffmpeg: FFmpeg | null

async function getFFmeg(): Promise<FFmpeg> {
  if (ffmpeg) {
    return ffmpeg
  }
  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load()
  }
  return ffmpeg
}

export { getFFmeg }
