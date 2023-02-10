import WelcomePage from './components/WelcomePage';
import {Routes, Route} from 'react-router-dom'
import RegisterPage from './components/RegisterPage';
import VerifyEmail from './components/VerifyEmail';
import RegSuccessPage from './components/RegSuccessPage';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/verify" element={<VerifyEmail/>}/>
        <Route path="/reg" element={<RegSuccessPage/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
