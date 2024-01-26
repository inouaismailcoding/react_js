
import './App.css';
import MyApp from '../components/section';
function App() {
  return (
    <div className="App">
      <header className="App-header">        
       <ul className='navbar'>
          <li><a href='#' className='a'>Home</a></li>
          <li><a href='#' className='a'>Product</a></li>
          <li><a href='#' className='a'>About</a></li>
          <li><a href='#' className='a'>Settings</a></li>
       </ul>
      </header>
      < MyApp />
    </div>
  );
}

export default App;
