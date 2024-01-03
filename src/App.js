import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Components/Home/Home.js';
import Features from './Components/Features/Features.js';
import Testimonal from './Components/Testimonals/Testimonals.js';
import Footer from './Components/Footer/Footer.js';
import Pricing from './Components/Pricing/Pricing.js';
import Workflow from './Components/WorkFlow/Workflow.js';
function App() {
  return (
    <div className="App">
      {/* <Login />
      <Signup /> */}
      <Navbar />
      <Home />
      <Features />
      <Pricing />
      <Workflow />
      <Testimonal />
      <Footer />
    </div>
  );
}

export default App;
