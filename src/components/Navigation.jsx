import {Link, useLocation} from 'react-router-dom';

function Nav() {
    const currentPage = useLocation().pathname;
  
    return (
      <div className='backgroundimg'>
        <img className="danny" src="../src/assets/images/danny.jpg"></img>
        <ul>
          <li className="nav">
            <Link to="/" /*className={currentPage === '/' ? 'nav-link active' : 'nav'}*/>Home</Link>
          </li>
          <li className="nav">
            <Link to="/About" /*className={currentPage === '/About' ? 'nav-link active' : 'nav'}*/>About</Link>
          </li>
          <li className="nav">
            <Link to="/Projects" /*className={currentPage === '/Projects' ? 'nav-link active' : 'nav'}*/>Projects</Link>
          </li>
          <li className="nav">
            <Link to="/Contact" /*className={currentPage === '/Contact' ? 'nav-link active' : 'nav'}*/>Contact</Link>
          </li>
          <li className="nav">
            <Link to="/Resume" /*className={currentPage === '/Contact' ? 'nav-link active' : 'nav'}*/>Resume</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Nav;