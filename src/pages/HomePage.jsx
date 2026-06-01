import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SOLUTIONS = [
  { title: 'Фасадные системы',          desc: 'HPL-панели для НВФ, сайдинг, скрытые и видимые крепления', to: '/solutions/facades' },
  { title: 'Потолочные системы',         desc: 'Подвесные и кассетные потолки для любых помещений', to: '/solutions/ceilings' },
  { title: 'Интерьерные системы',        desc: 'Облицовка стен для офисов, ТЦ, медицины, образования', to: '/solutions/interior' },
  { title: 'Сантехнические перегородки', desc: 'Перегородки 304 серии: душевые, туалетные, раздевалки', to: '/solutions/partitions' },
  { title: 'ИЖС',                        desc: 'Решения для индивидуального жилищного строительства', to: '/solutions/izhs' },
]

const ADVANTAGES = [
  { icon: '🏗️', title: 'Полный цикл', desc: 'От проектирования и BIM до раскроя, монтажа и логистики' },
  { icon: '📐', title: 'Точность CNC', desc: 'Собственное производство с ЧПУ-раскроем под заказ' },
  { icon: '🏥', title: 'Чистые помещения', desc: 'Сертифицированные материалы для медицины и лабораторий' },
  { icon: '🌍', title: 'Масштаб', desc: 'Опыт на объектах: аэропорты, стадионы, университеты' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white overflow-hidden">
        <div className="container-site section flex flex-col items-start gap-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-brand-200 text-sm font-semibold uppercase tracking-widest"
          >
            Архилайн
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Фасадные и интерьерные решения для объектов любого масштаба
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-brand-100 leading-relaxed"
          >
            HPL-панели, потолочные системы, сантехнические перегородки, монтажный профиль. Проектирование, BIM, CNC-производство и логистика под ключ.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contacts" className="btn-primary">
              Получить расчёт
            </Link>
            <Link to="/solutions" className="btn-secondary border-white text-white hover:bg-white/10">
              Все решения
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
      </section>

      {/* Advantages */}
      <section className="section bg-neutral-50">
        <div className="container-site">
          <h2 className="text-center mb-12">Почему выбирают Архилайн</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a, i) => (
              <motion.div
                key={a.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-6"
              >
                <span className="text-3xl">{a.icon}</span>
                <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions preview */}
      <section className="section">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <h2>Наши решения</h2>
            <Link to="/solutions" className="text-brand-600 hover:text-brand-800 text-sm font-semibold">
              Смотреть все →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={s.to} className="card p-6 block group hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-neutral-800 group-hover:text-brand-700 transition-colors">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-xs font-semibold text-brand-600">
                    Подробнее →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-700 text-white">
        <div className="container-site text-center">
          <h2 className="mb-4">Готовы обсудить ваш объект?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Отправьте проект или опишите задачу — мы подготовим расчёт и подберём оптимальное решение.
          </p>
          <Link to="/contacts" className="btn-secondary border-white text-white hover:bg-white/10">
            Отправить заявку
          </Link>
        </div>
      </section>
    </>
  )
}
