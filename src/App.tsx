import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar';
import BookDetailsPage from './Container/BookDetailsPage';
import CartPage from './Container/CartPage';
import HomePage from './Container/HomePage';
import LandingPage from './Container/LandingPage';
import LoginPage from './Container/LoginPage';
import ProfilePage from './Container/ProfilePage';
import Register from './Container/Register';
import ComingSoon from './Components/ComingSoon';

function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<ComingSoon/>}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signIn" element={<LoginPage />} />
        <Route path="/signUp" element={<Register />} />
        <Route element={<NavBar />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bookDetails/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
