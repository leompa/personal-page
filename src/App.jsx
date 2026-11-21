import { projects } from './projects'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Mi Página Personal</h1>
        <p>Proyectos</p>
      </header>

      <main>
        <section className="projects">
          <h2>Mis Proyectos</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver proyecto
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
