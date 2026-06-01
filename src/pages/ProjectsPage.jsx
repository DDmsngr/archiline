export default function ProjectsPage() {
  return (
    <div className="section">
      <div className="container-site">
        <p className="text-sm text-brand-600 font-semibold uppercase tracking-widest mb-2">Портфолио</p>
        <h1>Проекты</h1>
        <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
          Реализованные проекты с описанием задачи, применённых решений и материалов.
        </p>

        {/* Placeholder cards — Sprint 4 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card p-6">
              <div className="aspect-video bg-neutral-100 rounded-xl animate-pulse mb-4" />
              <div className="h-5 w-2/3 bg-neutral-100 rounded animate-pulse mb-2" />
              <div className="h-4 w-full bg-neutral-100 rounded animate-pulse" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400">
          Карточки проектов с фильтрацией будут добавлены в Sprint 4
        </p>
      </div>
    </div>
  )
}
