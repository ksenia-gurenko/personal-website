import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Контакты</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h3>Телефон</h3>
                <p className="contact-value">+7 962 929-44-05</p>
                <p className="contact-description">Предпочитаемый способ связи</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p className="contact-value">gurenochka@inbox.ru</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div className="contact-details">
                <h3>Telegram</h3>
                <p className="contact-value">@ksenia_konstruktor</p>
                <p className="contact-description">Быстрая связь</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <p className="contact-value">github.com/ksenia-gurenko</p>
                <p className="contact-description">Мои проекты</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Напишите мне</h3>
            <p className="form-description">
              Есть вопрос или предложение? Напишите мне, и я отвечу в ближайшее время.
            </p>
            
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Ваше сообщение *"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                />
              </div>
              
              <button
                type="submit"
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </button>
              
              {isSubmitted && (
                <div className="success-message">
                  Сообщение отправлено! Спасибо за ваше обращение.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact