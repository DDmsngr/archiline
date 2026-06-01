export default function MaterialsPage() {
  const categories = [
    'Архилайн HPL',
    'Архилайн на основе СМЛ',
    'Архилайн на основе ГСП',
    'Монтажный профиль',
    'Фурнитура 304 серии',
    'Декоры и виды тиснения',
  ]

  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Ассортимент</p>
        <h1>Материалы и декоры</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Широкая номенклатура HPL-панелей, СМЛ и ГСП плит с покрытиями, монтажных профилей и фурнитуры.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div key={i} className="card p-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg shrink-0">
                {i + 1}
              </div>
              <span className="font-medium text-neutral-800">{cat}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-brand-50 rounded-2xl border border-brand-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-neutral-800">Нужен полный каталог?</p>
            <p className="text-sm text-neutral-500 mt-1">Скачайте PDF со всей номенклатурой и декорами</p>
          </div>
          <button className="btn-primary shrink-0">
            Скачать каталог PDF
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400">
          Полный каталог с фильтрами и фото будет добавлен в Sprint 5
        </p>
      </div>
    </div>
  )
}
