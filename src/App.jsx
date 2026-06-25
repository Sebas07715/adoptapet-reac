import { useState } from 'react';

import './App.css'; // Corrige la ruta de importación
import ListaMascotas from './components/ListaMascotas'; // Corrige la ruta de importación
import FiltroEspecie from './components/FiltroEspecie'; // Corrige la ruta de importación
import { mascotas } from './data/mascotas'; // Corrige la ruta de importación

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas');
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
          <h1>Adopta una Mascota</h1>
        </div>

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
      </section>
    </>
  );
}

export default App;