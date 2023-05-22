import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";

function App() {
  return (
    <>
      <div style={{display: 'flex'}}>
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
