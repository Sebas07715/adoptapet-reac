import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import 'src/App.css';
import ListaMascotas from 'src/components/ListaMascotas';
import FiltroEspecie from 'src/components/FiltroEspecie';
import mascotas from 'src/data/mascotas'; // Importa el array de datos de mascotas

function App() {
  const [filtroEspecie, setFiltroEspecSie] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  // Filtra las mascotas según la especie y el nombre
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      filtroEspecie === 'Todas' || mascota.especie.toLowerCase() === filtroEspecie.toLowerCase();
    const coincideBusqueda = mascota.nombre.toLowerCase().includes(busqueda.toLowerCase().trim());
    return coincideEspecie && coincideBusqueda;
  });

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
      </section>

      <section id="filtros">
        <h2>Filtrar Mascotas</h2>
        <FiltroEspecie
          filtroEspecie={filtroEspecie}
          setFiltroEspecie={setFiltroEspecie}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />
      </section>

      <section id="lista-mascotas">
        <h2>Lista de Mascotas</h2>
        {mascotasFiltradas.length > 0 ? (
          <ListaMascotas mascotas={mascotasFiltradas} />
        ) : (
          <p>No hay mascotas que coincidan</p>
        )}
      </section>
    </>
  );
}

export default App;