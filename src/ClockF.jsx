import React, { useEffect, useState } from 'react';

const ClockF = () => {

  const [state, setState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  });

  useEffect(() => {
    setInterval (
      () => {
        setState((prevState) => {
          let edad = prevState.edad +0.5;
          return {
             ...prevState,
             fecha: new Date(),
             edad
          }
        });
      }, 1000
   );
  
    return () => {
      clearInterval (setInterval);
    };
  }, []);

  return (
    <div>
      <h2>Hora Actual:{state.fecha.toLocaleTimeString()}</h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>

    </div>
  );
};

export default ClockF
