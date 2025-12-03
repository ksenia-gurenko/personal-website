import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">Ксения Гуренко</h3>
            <p className="footer-tagline">
              Frontend-разработчик, создающий современные и функциональные веб-приложения
            </p>
          </div>
          
          <div className="footer-copyright">
            <p>
              © {currentYear} Ксения Гуренко. Все права защищены.
            </p>
            <p className="footer-location">
              Москва • Готова к переезду • Полная занятость
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer