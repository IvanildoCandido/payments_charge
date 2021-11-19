import React from 'react';
import ServicesInfo from '../../components/ServicesInfo';

const Summary = () => {
  return (
    <>
      <ServicesInfo
        color="blue"
        title="Total a Vencer"
        quantity={25}
        total="R$ 380,00"
      />
      <ServicesInfo
        color="green"
        title="Total Recebido"
        quantity={17}
        total="R$ 760,00"
      />
      <ServicesInfo
        color="red"
        title="Total Em Atrazo"
        quantity={13}
        total="R$ 980,00"
      />
    </>
  );
};

export default Summary;
