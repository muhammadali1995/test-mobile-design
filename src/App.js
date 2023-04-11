
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Service from './components/Service';
import User from './components/User';

function App() {
  return (
    <div className="max-w-[750px] mx-auto">
      <Navbar />
      <div className='p-md'>
        <User name={'John'} number='(88) 99602-2404' />
        <Service />
      </div>
      <Footer />
    </div>
  );
}

export default App;
