
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebarleft';
import Feed from './components/Feed';


function App() {
  return (
    <div >

      <Navbar />


      
        <div className='flex'>
          <Sidebar />
          <Feed />
        </div>
        
      



    </div>
  );
}

export default App;
