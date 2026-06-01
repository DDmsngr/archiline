import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage      from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import ObjectsPage   from './pages/ObjectsPage'
import ServicesPage  from './pages/ServicesPage'
import MaterialsPage from './pages/MaterialsPage'
import ProjectsPage  from './pages/ProjectsPage'
import PartnersPage  from './pages/PartnersPage'
import AboutPage     from './pages/AboutPage'
import ContactsPage  from './pages/ContactsPage'

function NotFound() {
  return (
    <div className="section text-center">
      <div className="container-site">
        <h1 className="text-6xl font-bold text-neutral-200 mb-4">404</h1>
        <p className="text-lg text-neutral-500 mb-8">Страница не найдена</p>
        <a href="/" className="btn-primary">На главную</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/archiline">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/objects"   element={<ObjectsPage />} />
            <Route path="/services"  element={<ServicesPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/projects"  element={<ProjectsPage />} />
            <Route path="/partners"  element={<PartnersPage />} />
            <Route path="/about"     element={<AboutPage />} />
            <Route path="/contacts"  element={<ContactsPage />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
