import { Link } from 'react-router-dom'

const COLS = [
  {
    title: 'Продукция',
    links: [
      { label: 'Фасадные системы',      to: '/solutions/facades' },
      { label: 'Потолочные системы',     to: '/solutions/ceilings' },
      { label: 'Интерьерные системы',    to: '/solutions/interior' },
      { label: 'Сантехнические перегородки', to: '/solutions/partitions' },
      { label: 'ИЖС',                   to: '/solutions/izhs' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О компании', to: '/about' },
      { label: 'Проекты',    to: '/projects' },
      { label: 'Объекты',    to: '/objects' },
      { label: 'Партнёрам',  to: '/partners' },
    ],
  },
  {
    title: 'Услуги',
    links: [
      { label: 'Проектирование', to: '/services' },
      { label: 'BIM',            to: '/services' },
      { label: 'CNC-раскрой',    to: '/services' },
      { label: 'Логистика',      to: '/services' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-site py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link to="/" className="text-xl font-bold text-white tracking-tight">
              АРХИЛАЙН
            </Link>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Фасадные и интерьерные решения для объектов любого масштаба
            </p>
            <Link
              to="/contacts"
              className="inline-flex mt-5 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Получить расчёт
            </Link>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Архилайн. Все права защищены.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-neutral-300 transition-colors">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
