import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Решения',   to: '/solutions' },
  { label: 'Объекты',   to: '/objects' },
  { label: 'Услуги',    to: '/services' },
  { label: 'Материалы', to: '/materials' },
  { label: 'Проекты',   to: '/projects' },
  { label: 'Партнёрам', to: '/partners' },
  { label: 'О компании',to: '/about' },
  { label: 'Контакты',  to: '/contacts' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold text-brand-700 tracking-tight">
            АРХИЛАЙН
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-neutral-600 hover:text-brand-700 hover:bg-neutral-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contacts" className="btn-primary text-sm">
            Получить расчёт
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
          onClick={() => setOpen(o => !o)}
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-neutral-100 bg-white"
          >
            <div className="container-site py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-brand-700 bg-brand-50'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contacts"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 justify-center text-sm"
              >
                Получить расчёт
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
