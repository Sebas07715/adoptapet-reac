import React from 'react';
import PropTypes from 'prop-types';
import MascotaCard from 'components/MascotaCard';

const ListaMascotas = ({ mascotas }) => {
  return (
    <div className="lista-mascotas">
      {mascotas.map((mascota, index) => (
        <MascotaCard
          key={index}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </div>
  );
};

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      especie: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      caracteristicas: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListaMascotas;