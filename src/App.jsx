import './App.css';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import Reviews from './components/Reviews';
import SetUp from './components/SetUp';

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Reviews />
      <SetUp />
    </>
  )
}

export default App;