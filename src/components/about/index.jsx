import './styles.css';
import photos from './photos.jpg';

export const About = () => (
  <div id="sobre" className="about">
      <img src={photos} alt="Fotos" className="photos"/>
    <div className="about-content">
      <h1>Sobre mim</h1>
      <h4 className="curso">Engenheiro de Computação</h4>
      <br></br>
      <p>Olá, me chamo Artur Oliveira, tenho 22 anos e sou interessado em programação e tecnologia. Tenho como desejo principal a capacitação para desenvolvimento de jogos e desenvolvimento web. Atualmente, curso Engenharia de Computação com o intuito de buscar melhores noções de programação e tecnologia.</p>
      <br></br>
      <p>Busco uma oportunidade de estágio para aprimorar minhas noções de informática e desenvolvimento na área de computação, principalmente por agora, ao qual estou iniciando estudos mais aprofundados no desenvolvimento web. </p>
    </div>
  </div>
);