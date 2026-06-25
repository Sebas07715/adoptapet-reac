import React from 'react';
import PropTypes from 'prop-types';
import './MascotaCard.css'; // Asegúrate de tener un archivo CSS para los estilos

const MascotaCard = ({ nombre, raza, edad, especie, descripcion, caracteristicas }) => {
  const getEspecieEstilo = (especie) => {
    switch (especie.toLowerCase()) {
      case 'perro':
        return 'mascota-card perro';
      case 'gato':
        return 'mascota-card gato';
      default:
        return 'mascota-card otro';
    }
  };

  return (
    <div className={getEspecieEstilo(especie)}>
      <h2>{nombre}</h2>
      <p><strong>Raza:</strong> {raza}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Especie:</strong> {especie}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Características:</strong> {caracteristicas}</p>
    </div>
  );
};

MascotaCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  raza: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
  especie: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  caracteristicas: PropTypes.string.isRequired,
};

MascotaCard.defaultProps = {
  nombre: 'Nombre desconocido',
  raza: 'Raza desconocida',
  edad: 0,
  especie: 'Especie desconocida',
  descripcion: 'Sin descripción',
  caracteristicas: 'Sin características',
};

export default MascotaCard;