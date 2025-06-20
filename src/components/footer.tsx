import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Luiz Mendonça. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;