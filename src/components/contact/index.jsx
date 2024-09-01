import './styles.css';

export const Contact = () => (
  <div id="contato" className="contact">
    <h1>Contato</h1>
    <br></br>
    <div className="contact-info">
    <form action="" autocomplete="off">
    <legend>Entre em contato!</legend>
      <fieldset>
          <label for="name">Nome:</label>
          <input type="text" id="name" name="name" required placeholder="Digite seu nome completo" />

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" />

          <label for="subject">Assunto:</label>
          <input type="text" id="subject" name="subject" required placeholder="Digite o assunto" />

          <label for="message">Mensagem:</label>
          <textarea id="message" name="message" rows="7" maxlenght="1000" minlenght="20" required placeholder="Digite sua mensagem"></textarea>

          <input type="submit" class="btn" value="Enviar" />
      </fieldset>
    </form>
    </div>
  </div>
);