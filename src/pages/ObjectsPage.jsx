export default function ObjectsPage() {
  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Кейсы</p>
        <h1>Объекты</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Реализованные объекты с применением систем Архилайн — от медицинских учреждений до спортивных комплексов.
        </p>

        {/* Placeholder grid — Sprint 4 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card aspect-[4/3] bg-neutral-100 animate-pulse" />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400">
          Контент раздела будет добавлен в Sprint 4
        </p>
      </div>
    </div>
  )
}
