import { motion } from 'framer-motion'

const SERVICES = [
  {
    icon: '📐',
    title: 'Проектирование',
    desc: 'Разработка проектной документации с учётом требований объекта, норм и специфики материала.',
  },
  {
    icon: '🧱',
    title: 'Конструирование',
    desc: 'Технические решения по узлам крепления и стыкам с учётом геометрии фасада или интерьера.',
  },
  {
    icon: '💻',
    title: 'BIM',
    desc: 'Информационное моделирование в Revit/ArchiCAD для согласования с генпроектировщиком.',
  },
  {
    icon: '⚙️',
    title: 'CNC-раскрой',
    desc: 'Точный раскрой панелей на собственном ЧПУ-оборудовании по чертежам заказчика.',
  },
  {
    icon: '✂️',
    title: 'Раскрой',
    desc: 'Нарезка материала нестандартных размеров и форматов, обработка кромки.',
  },
  {
    icon: '🚚',
    title: 'Логистика',
    desc: 'Доставка материала на объект в согласованные сроки с упаковкой по графику монтажа.',
  },
]

export default function ServicesPage() {
  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Что мы делаем</p>
        <h1>Услуги</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Полный инженерный сервис — от первого чертежа до доставки на стройплощадку.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card p-7"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
