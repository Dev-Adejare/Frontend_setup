import "./config/connection";
import Layout from "./components/Layout";
import CreateTodoModal from "./components/CreateTodoModal";
import Todos from "./components/Todos";

function App() {
  return (
    <Layout>
      <CreateTodoModal />
      <Todos />
    </Layout>
  );
}

export default App;
