import { useState } from 'react';
import { Link, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import GithubProfile from './GithubProfile';
import RandomUser from './RandomUser';

const Tab1 = () => {
  const navigate = useNavigate();

  const doSomethingThenRoute = () => {

    const confirmation = window.confirm(
      'Are you sure you want to go to tab 3?'
    );
    
    if (confirmation) {
      // route to tab 3
      navigate('/tabs/3');
    }
  }

  return <h2 onClick={doSomethingThenRoute}>Tab 1</h2>;
};
const Tab2 = () => <h2>Tab 2</h2>;
const Tab3 = () => <h2>Tab 3</h2>;
const Home = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/tabs/1">Tab 1</Link></li>
        <li><Link to="/tabs/2">Tab 2</Link></li>
        <li><Link to="/tabs/3">Tab 3</Link></li>
      </ul>
      <Outlet />
    </div>
  )
};
const About = () => <h1>About</h1>;
const GithubProfilePage = () => {
  const {githubUsername} = useParams();

  return (
    <div>
      <h1>Github Profile</h1>
      <GithubProfile username={githubUsername} />
    </div>
  )
};

function App() {
  const [username, setUsername] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    setUsername(event.target[0].value);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="tabs/1" element={<Tab1 />} />
          <Route path="tabs/2" element={<Tab2 />} />
          <Route path="tabs/3" element={<Tab3 />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route
          path="github-user/:githubUsername"
          element={<GithubProfilePage />}
        />
      </Routes>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/github-user/bhague1281">bhague1281 profile</Link>
        </li>
      </ul>
      {/* <form onSubmit={onFormSubmit}>
        <label htmlFor="username-input">Username: </label>
        <input id="username-input" />
        <button type="submit">Search</button>
      </form>
      {username && <GithubProfile username={username} />}
      <RandomUser /> */}
    </div>
  );
}

export default App;
