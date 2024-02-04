import { Label } from './ui/label'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Separator } from './ui/separator'
import { FileVideo, Upload } from 'lucide-react'
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react'

export function VideoInputForm(): JSX.Element {
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const promptInputRef = useRef<HTMLTextAreaElement | undefined>()

  async function handleUploadVideo(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if (!videoFile) {
      return
    }

    
  }

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>): void {
    const { files } = event.currentTarget

    if (!files) {
      return
    }
    const selectedFile = files[0]
    setVideoFile(selectedFile)
  }

  const previewURL = useMemo(() => {
    if (!videoFile) {
      return null
    }
    return URL.createObjectURL(videoFile)
  }, [videoFile])

  return (
    <form className="space-y-6" onSubmit={handleUploadVideo}>
      <label
        htmlFor="video"
        className="border relative flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        {previewURL ? (
          <video
            src={previewURL}
            controls={false}
            className="pointer-events-none absolute inset-0"
          />
        ) : (
          <>
            <FileVideo className="h-4 w-4" />
            Selecione um video
          </>
        )}
      </label>
      <input
        type="file"
        name="video"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />
      <Separator />
      <div className="space-y-2">
        <Label htmlFor="transcription_prompt"> Prompt de transcricao</Label>
        <Textarea
          ref={promptInputRef}
          className="h-20 leading-relaxed"
          id="transcription_prompt"
          placeholder="Inclua palavras chaves mencionadas no video separadas por virgula (,)"
        />
      </div>
      <Button type="submit" className="w-full">
        Carregar Video <Upload className="h-4 w-4 ml-2" />
      </Button>
    </form>
  )
}
