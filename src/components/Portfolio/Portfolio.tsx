import { useState } from 'react'
import { portfolioItems } from '../../data/portfolio'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Все проекты' },
    { id: 'react', label: 'React' },
    { id: 'typescript', label: 'TypeScript' },
  ]

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === 'all' || item.category.includes(activeFilter)
  )

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Портфолио</h2>
        
        <div className="portfolio-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-img" style={{ background: item.gradient }}>
                <div className="portfolio-icon">
                  {item.icon === 'react' ? '⚛️' : '🚀'}
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-tags">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="portfolio-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="portfolio-links">
                  <a 
                    href={item.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                  {item.demoUrl && (
                    <a 
                      href={item.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Демо
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio