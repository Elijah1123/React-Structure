import TodoApp from './features/todo/TodoApp.jsx';
import UndoManager from './features/history/UndoManager.jsx';
import FileExplorer from './features/explorer/FileTree.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Data Structures in React
          </h1>
          <p className="text-slate-500 mt-2">From Beginner (Arrays) to Pro (Recursive Trees)</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TodoApp />
          <UndoManager />
        </div>
        
        <FileExplorer />
      </div>
    </div>
  );
}