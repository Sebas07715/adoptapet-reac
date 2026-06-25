import React from 'react';
import PropTypes from 'prop-types';

const FiltroEspecie = ({ filtroEspecie, setFiltroEspecie, busqueda, setBusqueda }) => {
  const handleBusquedaChange = (e) => {
    const valor = e.target.value.trimStart().slice(0, 50); // Recorta espacios iniciales y limita a 50 caracteres
    setBusqueda(valor);
  };

  return (
    <div className="filtro-especie">
      <select value={filtroEspecie} onChange={(e) => setFiltroEspecie(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Otro">Otro</option>
      </select>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={busqueda}
        onChange={handleBusquedaChange}
      />
    </div>
  );
};

FiltroEspecie.propTypes = {
  filtroEspecie: PropTypes.string.isRequired,
  setFiltroEspecie: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  setBusqueda: PropTypes.func.isRequired,
};

export default FiltroEspecie;