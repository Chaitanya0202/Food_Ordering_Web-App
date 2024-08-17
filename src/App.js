import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import Home from "./Components/Home.jsx";
import ViewUser from "./Components/ViewUser";

import LogInR from "./Components/Layout/LogInR.jsx";
import SignUpR from "./Components/Layout/SignUpR.jsx";
import Wellcome from "./Components/Wellcome";
// import SignUp from './Components/SignUp';
import MainPage from "./Components/MainPage";
// import Navbaar from './Components/Navbaar';
import Footer from "./Components/Footer";
import NavBar1 from "./Components/Layout/NavBar1.jsx";

import CartPage from "./Components/CartPage.jsx";
import { AppProvider } from "./Context/ProductContext.jsx";

import About from "./Components/About.jsx";
import CardForm from "./Components/CardForm.jsx";
import Contact from "./Components/Contact.jsx";
import ForgotePass from "./Components/Layout/ForgotPass.jsx";
import Offers from "./Components/Offers.jsx";
import Profile from "./Components/Profile.jsx";
import ShowCart from "./Components/ShowCart.jsx";

function App() {
  
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <NavBar1 />
          <Routes>
            <Route exact path="/" element={<Wellcome />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/addUser" element={<AddUser />} />
            <Route exact path="/editUser/:id" element={<EditUser />} />
            <Route exact path="/viewUser/:id" element={<ViewUser />} />
            <Route exact path="/logIn" element={<LogInR />} />
            <Route exact path="/signup" element={<SignUpR />} />
            <Route exact path="/forgotPass" element={<ForgotePass />} />
            <Route exact path="/mainPage" element={<MainPage />} />

            <Route exact path="/cartPage" element={<CartPage />} />
            <Route exact path="/showCart" element={<ShowCart />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/card" element={<CardForm />} />

            <Route exact path="/CartForm" element={<CardForm />} />
            <Route exact path="/offers" element={<Offers/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </AppProvider>
        <Footer />
      </Router>
    
    </div>
  );
}
export default App;
