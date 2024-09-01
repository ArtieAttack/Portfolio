import './styles.css';
import certificate1 from './certificate1.jpg';
import certificate2 from './certificate2.jpg';
import certificate3 from './certificate3.jpg';

export const Certificates = () => (
  <section id="certificado" className="certificates">
    <h1>Certificados</h1>
    <p className="text-certificates">Nos últimos meses, mergulhei em alguns cursos incríveis na Udemy que realmente elevaram minhas habilidades no desenvolvimento web. Estou super empolgado para compartilhar o que aprendi!</p>
    <p className="text-certificates">Primeiro, passei um tempo aprofundando meus conhecimentos em React. Foi uma jornada fascinante, onde aprendi a construir interfaces de usuário interativas e responsivas. Agora, me sinto confortável trabalhando com hooks e gerenciando o estado da aplicação, o que definitivamente ajudou a melhorar a maneira como crio aplicações web. Além disso, fiz um curso sobre Lógicas de Programação que foi fundamental para entender os conceitos básicos da programação. Estudar algoritmos e estruturas de dados me deu uma base sólida para resolver problemas de forma mais eficiente e escrever código mais claro e organizado.</p>
    
    <p className="text-certificates">E não posso deixar de mencionar o curso de WebDesign FrontEnd. Aprendi a criar sites visualmente atraentes e funcionais, explorando tudo, desde HTML e CSS até JavaScript. O foco em design responsivo e acessibilidade me ajudou a criar experiências de usuário que realmente fazem a diferença. Esses cursos não só ampliaram meu portfólio, mas também me deram a confiança e as ferramentas necessárias para enfrentar novos desafios no mundo do desenvolvimento web. Estou animado para aplicar tudo o que aprendi em projetos futuros!</p>

    <div className="images-content">
      <img src={certificate1} alt="Certificado 1" className="images"/>
      <img src={certificate2} alt="Certificado 2" className="images"/>
      <img src={certificate3} alt="Certificado 3" className="images"/>
    </div>
  </section>
);