import { Button } from './components/ui/button'
import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Textarea } from './components/ui/textarea'
import { Separator } from './components/ui/separator'
import { Label } from './components/ui/label'
import { Select, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { SelectContent } from '@radix-ui/react-select'
import { Slider } from './components/ui/slider'

function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido por Antonio Sitoe</span>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a Ai"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela Ai..."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: Voce pode utilizar a variavel{' '}
            <code className="text-violet-400">
              {'{'}transcription{'}'}
            </code>{' '}
            no seu prompt para adicionar o conteudo para a transcricao do video selecionado
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="h-4 w-4" />
              Selecione um video
            </label>
            <input type="file" name="video" id="video" accept="video/mp4" className="sr-only" />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt"> Prompt de transcricao</Label>
              <Textarea
                className="h-20 leading-relaxed"
                id="transcription_prompt"
                placeholder="Inclua palavras chaves mencionadas no video separadas por virgula (,)"
              />
            </div>
            <Button type="submit" className="w-full">
              Carregar Video <Upload className="h-4 w-4 ml-2" />
            </Button>
          </form>
          <Separator />

          <form className="space-y-6">
            <div className="space-y-1">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sdds">Titulo do youtube</SelectItem>
                  <SelectItem value="sdsd">Descricao do Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-Turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground italic">
                Voce podera customizar esta opcao em breve
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci in
                perspiciatis
              </span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

export default App
