import React from 'react';
import { Link } from 'react-router-dom';
import arch from './arch.png';

export default () => {
  return (
    <div>
      <Link to="/">Go back home</Link>
      <br />
      W stosunku do przykładu, zostały zmienione dane na stronie głównej, oraz funkcja wyliczająca wyrazy ciągu. <br />
      Aby mechanizm wybierania ostatnich pięciu wyników działał poprawnie, należało również zmienić sposób przechowywania danych w magazynie Redis.
      <br />
      <img src={arch} alt="arch" />
    </div>
  );
};
