//import './App.css'
import { Page } from "./Page";
import { TodoProvider } from "./Context/TodoContext";
import { Footer } from '../src/Components/Footer'

function App() {
  return (
    <div>
      <TodoProvider>
        <Page />
        <Footer />
      </TodoProvider>
    </div>
  );
}

export default App;
