export default function PartnersPage() {
  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">B2B</p>
        <h1>Партнёрам</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Информация для проектировщиков, генподрядчиков, дилеров и монтажных организаций.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h3 className="font-semibold mb-3">Сертификаты</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Пожарные сертификаты, санитарно-эпидемиологические заключения, протоколы испытаний.
            </p>
            <button className="btn-primary mt-5 text-sm">Скачать сертификаты</button>
          </div>

          <div className="card p-7">
            <h3 className="font-semibold mb-3">Документация</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Технические паспорта, монтажные инструкции, BIM-библиотеки, ГОСТ и ТУ.
            </p>
            <button className="btn-primary mt-5 text-sm">Скачать документы</button>
          </div>

          <div className="card p-7 md:col-span-2">
            <h3 className="font-semibold mb-6">FAQ — Часто задаваемые вопросы</h3>
            <div className="space-y-4 text-sm text-neutral-600">
              {[
                'Какие минимальные объёмы заказа?',
                'Возможен ли раскрой по чертежам заказчика?',
                'Есть ли BIM-объекты для Revit?',
                'Как оформить дилерское соглашение?',
              ].map(q => (
                <div key={q} className="p-4 bg-neutral-50 rounded-xl">
                  <span className="font-medium text-neutral-800">{q}</span>
                  <p className="mt-1 text-neutral-400">Ответ будет добавлен в Sprint 7</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
