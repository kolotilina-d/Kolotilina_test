import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__description">🎉<p className="footer__text">Data Table v3</p>🎉</span>
      <ul className="footer__list">
        <li className="footer__item footer__item_header">Follow me on &#58;</li>
        <li className="footer__item"><Link className="item__link" to='/'>figma</Link></li>
        <li className="footer__item"><Link className="item__link" to='/'>twitter</Link></li>
        <li className="footer__item"><Link className="item__link" to='/'>dribbble</Link></li>
      </ul>
    </div>
  )
}

export default Footer;