import './App.css';
import Componente1 from './componentes/Componente1'
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal' >
      <div>
      <h1>Welcome to my site</h1>
      </div>
      <Componente1
      imagen = 'jorge1'
      titulo = 'Jorge Duque Franco'
      subtitulo = ' PhD on mathematics'
      parrafo = 'I am a postdoct at the math department of Universidad de Chile, working under the sponsoring of Prof. Robert Auffarth. I obtained my Ph.D. in mathematics from IMPA in April 2021, my advisor was Prof. Hossein Movasati. Previously, I got my M.S. in mathematics from IMPA, and my B.S. from Universidad de Antioquia (UdeA). '
      />
      <Componente1
      imagen= 'jorge2'
      titulo = 'About Me'
      subtitulo='main research'
      parrafo = ' My main research area is complex geometry, with emphasis in Hodge Theory. I am interested in the relation between periods (roughly speaking multiple integrals), topology and geometry of complex varieties as well as the superlative role that periods have in transcendence theory. My current research focuses on Hodge cycles and their periods which provide a rich source of these relations. I have studied Hodge cycles in perturbations of a Fermat variety and I have analyzed transcendental properties of its periods.'
      />
      <Componente1
      imagen = 'torta'
      titulo =  "share in FEDERICO ARDILA'S AXIOMS:"
      subtitulo= ''
      parrafo = "1. Mathematical talent is distributed equally among different groups, irrespective of geographic, demographic, and economic boundaries /n 2. Everyone can have joyful, meaningful, and empowering mathematical experiences. /n    3. Mathematics is a powerful, malleable tool that can be shaped and used differently by various communities to serve their needs. /n  4. Every student deserves to be treated with dignity and respect. "
      />
      </div>
    </div>
  );
}

export default App;
