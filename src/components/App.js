
import './App.scss';
import Navigation from './Navigation/Navigation';
import { ReactComponent as Search } from '../assets/svgs/search.svg';
import { ReactComponent as Bell } from '../assets/svgs/bell.svg';

const App = () => {
  return (
    <div className="App">
      <Navigation />

      <main className='main'>

        <nav className='main-nav'>
          <form className='search-box'>
            <Search />
            <input placeholder='Find Something...' />
            <button type='submit'>Search</button>
          </form>

          <div className='notifications'>
            <span>
            <Bell />
            <p>3</p>
            </span>

            <div className='profile'>
              <span></span>
            </div>

            <select>
              <option>Abigail</option>
              <option>Micheal</option>
            </select>
          </div>
        </nav>

      </main>
    </div>
  );
}

export default App;
