
import React, { useState } from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation';
import { ReactComponent as Search } from '../assets/svgs/search.svg';
import { ReactComponent as Bell } from '../assets/svgs/bell.svg';
import ChatBox from './ChatBox/ChatBox';
import Catalogue from './Catalogue/Catalogue';


const App = () => {

  const [state, setstate] = useState(false);

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
            <span onClick={() => setstate(prev => !prev)}>
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

          {state && <ChatBox />}
        </nav>

        <div className='selects'>

          <div>
            <select>
              <option>World</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Following</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Popular</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Post</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Gender</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Location</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Profession</option>
              <option>Gender</option>
            </select>
          </div>

          <div>
            <select>
              <option>Career</option>
              <option>Gender</option>
            </select>
          </div>

        </div>

        <section className='catalogue'>
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
          <Catalogue />
        </section>

      </main>
    </div>
  );
}

export default App;
