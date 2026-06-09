import "./App.css";
import FormBuilderPage from "./pages/formbuilder";
import KanbanboardPage from "./pages/kanbanboard";
import { BoardProvider } from "./task3/context/cardcontext";

function App() {
  return (
    <>
      <BoardProvider>
        <KanbanboardPage />
      </BoardProvider>
    </>
  );
}

export default App;
