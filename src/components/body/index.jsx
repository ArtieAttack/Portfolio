import './styles.css';
import logo from '../../templates/Home/logo.png';

export const Body = () => (
  <div id="inicio">
    <header className="header">
      <img src={logo} alt="Logo" className="logo"/>
        <nav className="buttons">
          <ul className="links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projeto">Projetos</a></li>
            <li><a href="#certificado">Certificados</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    </div>
);