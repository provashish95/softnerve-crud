import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <ToastContainer toastStyle={{
        marginTop: "4rem",
        borderRadius: "20px"
      }} />
    </div>
  );
}

export default App;
