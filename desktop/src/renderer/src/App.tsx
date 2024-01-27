import { Button } from './components/ui/button'
import { Github } from 'lucide-react'

function App(): JSX.Element {
  return (
    <div>
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
    </div>
  )
}

export default App
