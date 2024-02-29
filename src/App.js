import './App.css';
import BackToTop from './components/BackToTop';
import ChatSec from './components/ChatSec';
import Community from './components/Community';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Pricing from './components/Pricing';
import Promote from './components/Promote';
import Services from './components/Services';
import WinCash from './components/WinCash';


function App() {
  return (
    <div className='overflow-hidden'>
      <Nav />
      <Header />
      <Services />
      <WinCash />
      <ChatSec />
      <Promote />
      <Community />
      <Pricing />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
