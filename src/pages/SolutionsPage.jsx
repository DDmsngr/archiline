import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Фасадные системы',
    slug: 'facades',
    desc: 'HPL-панели для навесного вентилируемого фасада. Скрытое крепление на Z-профиль, аграфы, кляммеры, клеевую основу.',
    tags: ['НВФ', 'HPL', 'Сайдинг'],
  },
  {
    title: 'Потолочные системы',
    slug: 'ceilings',
    desc: 'Подвесные, реечные и кассетные потолки. Архилайн HPL и СМЛ с ПВХ/HPL покрытием для любых помещений.',
    tags: ['HPL', 'СМЛ', 'ГСП'],
  },
  {
    title: 'Интерьерные системы',
    slug: 'interior',
    desc: 'Облицовка стен для бизнес-центров, ТРЦ, аэропортов, медицинских и образовательных учреждений.',
    tags: ['Офисы', 'Медицина', 'Образование', 'Спорт'],
  },
  {
    title: 'Сантехнические перегородки',
    slug: 'partitions',
    desc: 'Туалетные и душевые перегородки, раздевалки. Фурнитура 304 серии из нержавеющей стали.',
    tags: ['HPL', '304 серия', 'Душевые', 'Раздевалки'],
  },
  {
    title: 'ИЖС',
    slug: 'izhs',
    desc: 'Фасадные и интерьерные решения Архилайн для индивидуального жилищного строительства.',
    tags: ['Частные дома', 'Фасад', 'Интерьер'],
  },
]

export default function SolutionsPage() {
  return (
    <div className="section">
      <div className="container-site">
        <div className="mb-12">
          <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Продукция</p>
          <h1>Решения</h1>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
            Полный спектр фасадных и интерьерных систем на основе HPL, СМЛ и ГСП с различными видами покрытий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/solutions/${cat.slug}`}
                className="card p-7 block group hover:shadow-md transition-shadow h-full"
              >
                <h3 className="font-semibold group-hover:text-brand-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{cat.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-block mt-5 text-sm font-semibold text-brand-600">
                  Подробнее →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
