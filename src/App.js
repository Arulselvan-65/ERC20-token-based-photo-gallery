import SharedLayout from './pages/SharedLayout.js';
import Home from "./pages/Home";
import Profile from './pages/profile.js';
import { Route,Routes } from "react-router-dom";



function App() {
  return (
    <>
    <Routes>
      <Route element={<SharedLayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
