import { createRoot } from "react-dom/client"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import "@/styles/_variables.scss"
import "@/components/tiptap-templates/simple/simple-editor.scss"

const App = () => <SimpleEditor />

createRoot(document.getElementById("root")!).render(<App />)