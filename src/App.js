import './index.css'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MainRoutes from './routes';
function App() {
  return (
    <Router>
      <html>
        <header>

        </header>
        <nav id="nav">

          <ul>
            <li><Link to='/'><a>INICIO</a></Link></li>
            <li><Link to='/Login'><a>LISTA</a></Link></li>
            <li><a>PROPRIEDADES</a></li>
            <li><Link to='/Login'><a>ENTRAR</a></Link></li>
          </ul>

        </nav>
        <body>
        </body>

      </html>

      {MainRoutes()}
    </Router>
  );
}

export default App;
