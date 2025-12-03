import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [animated, setAnimated] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setAnimated(true)
    
    // Анимация для текста
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.5 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      {/* Анимированные частицы фона */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }} />
        ))}
      </div>

      {/* Анимированные волны */}
      <div className="waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div 
            ref={textRef} 
            className={`hero-text ${animated ? 'animated' : ''}`}
          >
            {/* Анимированный заголовок */}
            <h1 className="title-animate">
              <span className="char" style={{ animationDelay: '0.1s' }}>К</span>
              <span className="char" style={{ animationDelay: '0.2s' }}>с</span>
              <span className="char" style={{ animationDelay: '0.3s' }}>е</span>
              <span className="char" style={{ animationDelay: '0.4s' }}>н</span>
              <span className="char" style={{ animationDelay: '0.5s' }}>и</span>
              <span className="char" style={{ animationDelay: '0.6s' }}>я</span>
              <span className="char" style={{ animationDelay: '0.7s' }}> </span>
              <span className="char" style={{ animationDelay: '0.8s' }}>Г</span>
              <span className="char" style={{ animationDelay: '0.9s' }}>у</span>
              <span className="char" style={{ animationDelay: '1.0s' }}>р</span>
              <span className="char" style={{ animationDelay: '1.1s' }}>е</span>
              <span className="char" style={{ animationDelay: '1.2s' }}>н</span>
              <span className="char" style={{ animationDelay: '1.3s' }}>к</span>
              <span className="char" style={{ animationDelay: '1.4s' }}>о</span>
            </h1>
            
            {/* Подзаголовок с эффектом печати */}
            <h2 className="typewriter">
              Frontend-разработчик | React | JavaScript | TypeScript
            </h2>
            
            <p className="fade-in-text">
              Создаю функциональные и эстетичные веб-приложения. Имею 9+ лет опыта в инженерии и дизайне, 
              что помогает мне создавать продукты, сочетающие техническое совершенство и визуальную привлекательность.
            </p>
            
            <div className="hero-btns">
              <button 
                className="btn pulse-btn" 
                onClick={() => scrollToSection('portfolio')}
              >
                <span className="btn-text">Смотреть проекты</span>
                <span className="btn-icon">→</span>
              </button>
              <button 
                className="btn btn-secondary hover-glow" 
                onClick={() => scrollToSection('contact')}
              >
                Связаться со мной
              </button>
            </div>

            {/* Анимированная стрелка вниз */}
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Анимированная иконка кода */}
          <div className="code-animation">
            <div className="code-icon">
              <pre className="code-snippet">
                <code>
{`function Developer() {
  return {
    skills: ['React', 'TypeScript', 'JavaScript']
  };
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero