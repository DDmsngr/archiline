export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Компания</p>
        <h1>О компании</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Архилайн — российский производитель и поставщик фасадных и интерьерных систем для коммерческих,
          промышленных и социальных объектов.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-neutral-600 leading-relaxed">
              Фасадные и интерьерные решения для объектов любого масштаба —
              от небольших офисных пространств до крупных инфраструктурных проектов:
              аэропортов, вокзалов, стадионов, медицинских центров.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Что мы делаем</h2>
            <ul className="space-y-2 text-neutral-600">
              {[
                'Производство HPL-, СМЛ- и ГСП-панелей с различными покрытиями',
                'Монтажный профиль для НВФ и интерьерных решений',
                'Фурнитура для санитарных перегородок 304 серии',
                'Инженерное проектирование, BIM, CNC-раскрой',
                'Доставка на объект по всей России',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-600 mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-[4/3] bg-neutral-100 rounded-2xl flex items-center justify-center text-neutral-300">
            <span className="text-sm">Фото / видео компании — Sprint 2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
