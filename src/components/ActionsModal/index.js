import * as React from 'react';
import {Modal, Portal, Provider} from 'react-native-paper';
import {colors} from '../../services/colors';
import ButtonAction from '../ButtonAction';
import {ButtonArea, ClientName, Container, Title} from './style';
import ModalContext from '../../contexts/ModalContext';

const ActionsModal = ({id}) => {
  const {visible, setVisible, selected} = React.useContext(ModalContext);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={containerStyle}>
          <Container>
            <Title>Ações disponíveis:</Title>
            <ClientName>{selected.name}</ClientName>
            <ButtonArea>
              <ButtonAction
                bgColor={colors.sandybrown}
                txtColor={colors.black}
                label="Voltar"
                action={() => {}}
              />
              <ButtonAction
                bgColor={colors.lightcoral}
                txtColor={colors.black}
                label="Excluir"
                action={() => {}}
              />
            </ButtonArea>
            <ButtonArea>
              <ButtonAction
                bgColor={colors.deepskyblue}
                txtColor={colors.black}
                label="Editar"
                action={() => {}}
              />
              <ButtonAction
                bgColor={colors.royalblue}
                txtColor={colors.black}
                label="Marcar Paga"
                action={() => {}}
              />
            </ButtonArea>
          </Container>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ActionsModal;
