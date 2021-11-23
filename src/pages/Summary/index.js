import React from 'react';
import NavBar from '../../components/NavBar';
import ServicesInfo from '../../components/ServicesInfo';
import {Container, BoxDetails, Title} from '../../pages/Summary/style';
import {colors} from '../../services/colors';

const Summary = () => {
  return (
    <>
      <Container>
        <BoxDetails>
          <Title>Mês Atual</Title>
          <ServicesInfo
            color={colors.sandybrown}
            title="Total a Vencer"
            colorCount={colors.black}
            quantity={25}
            total="R$ 380,00"
          />
          <ServicesInfo
            color={colors.deepskyblue}
            title="Total Recebido"
            colorCount={colors.black}
            quantity={17}
            total="R$ 760,00"
          />
          <ServicesInfo
            color={colors.lightcoral}
            title="Total Em Atrazo"
            colorCount={colors.black}
            quantity={13}
            total="R$ 980,00"
          />
        </BoxDetails>
        <BoxDetails>
          <Title>Próximos Meses</Title>
          <ServicesInfo
            color={colors.royalblue}
            title="Dezembro"
            colorCount={colors.white}
            quantity={30}
            total="R$ 380,00"
          />
          <ServicesInfo
            color={colors.royalblue}
            title="Janeiro"
            colorCount={colors.white}
            quantity={17}
            total="R$ 760,00"
          />
          <ServicesInfo
            color={colors.royalblue}
            title="Fevereiro"
            colorCount={colors.white}
            quantity={13}
            total="R$ 980,00"
          />
        </BoxDetails>
        <BoxDetails>
          <Title>Mensalidades em Atraso</Title>
          <ServicesInfo
            color={colors.lightcoral}
            title="Mês Anterior"
            colorCount={colors.black}
            quantity={10}
            total="R$ 230,00"
          />
          <ServicesInfo
            color={colors.lightcoral}
            title="Outros Meses"
            colorCount={colors.black}
            quantity={3}
            total="R$ 120,00"
          />
        </BoxDetails>
        <NavBar />
      </Container>
    </>
  );
};

export default Summary;
