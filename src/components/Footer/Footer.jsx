import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './styles.css'

export function Footer(){
    return(
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo-text">Notícias Espaciais</h2>
            <p>
              Seu portal de informações sobre o espaço, trazendo as últimas notícias, descobertas e missões espaciais.
            </p>
            <div className="contact">
              <span><FontAwesomeIcon icon={faPhone} /> &nbsp; (11) 1234-5678</span>
              <span><FontAwesomeIcon icon={faEnvelope} /> &nbsp; contato@noticiasespaciais.com</span>
            </div>
            <div className="socials">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Links Rápidos</h2>
            <br />
            <ul>
              <a href="#"><li>Sobre Nós</li></a>
              <a href="#"><li>Contato</li></a>
              <a href="#"><li>Política de Privacidade</li></a>
              <a href="#"><li>Termos de Uso</li></a>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h2>Newsletter</h2>
            <br />
            <form method="post">
              <input type="email" name="email" className="text-input newsletter-input" placeholder="Seu email" />
              <button type="submit" className="btn btn-big">Inscrever</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 Notícias Espaciais | Todos os direitos reservados
        </div>
      </footer>
    )
}