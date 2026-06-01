import { useState } from 'react'

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO Sprint 6: интеграция с почтой / CRM
    setSent(true)
  }

  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Связь</p>
        <h1>Контакты</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Оставьте заявку — мы свяжемся с вами в течение рабочего дня.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card p-8">
            <h2 className="text-xl font-bold mb-6">Получить расчёт</h2>
            {sent ? (
              <div className="text-center py-10">
                <span className="text-5xl">✅</span>
                <p className="mt-4 font-semibold text-neutral-800">Заявка отправлена!</p>
                <p className="mt-1 text-sm text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 btn-secondary text-sm"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name',    label: 'Имя',           type: 'text',  placeholder: 'Иван Иванов' },
                  { name: 'phone',   label: 'Телефон',        type: 'tel',   placeholder: '+7 (___) ___-__-__' },
                  { name: 'email',   label: 'Email',          type: 'email', placeholder: 'ivan@company.ru' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите объект или задачу..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Отправить заявку
                </button>
                <p className="text-xs text-neutral-400 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Contacts info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">Телефон</h3>
              <a href="tel:+78001234567" className="text-brand-600 hover:text-brand-800 font-medium">
                +7 (800) 123-45-67
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">Email</h3>
              <a href="mailto:info@archiline.ru" className="text-brand-600 hover:text-brand-800 font-medium">
                info@archiline.ru
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 mb-2">Адрес</h3>
              <p className="text-neutral-600">Россия, Москва</p>
            </div>
            <div className="aspect-video bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-300 text-sm">
              Карта — Sprint 6
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
