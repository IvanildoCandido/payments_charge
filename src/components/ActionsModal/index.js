import * as React from 'react';
import {Modal, Portal, Button, Provider} from 'react-native-paper';
import {colors} from '../../services/colors';
import ButtonAction from '../ButtonAction';
import {ButtonArea, Container, Title} from './style';

const ActionsModal = ({visible, setVisible}) => {
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Container>
            <Title>Ações disponíveis:</Title>
            <ButtonArea>
              <ButtonAction
                bgColor={colors.sandybrown}
                txtColor={colors.black}
                label="Voltar"
                action={hideModal}
              />
              <ButtonAction
                bgColor={colors.lightcoral}
                txtColor={colors.black}
                label="Excluir"
                action={hideModal}
              />
            </ButtonArea>
            <ButtonArea>
              <ButtonAction
                bgColor={colors.deepskyblue}
                txtColor={colors.black}
                label="Editar"
                action={hideModal}
              />
              <ButtonAction
                bgColor={colors.royalblue}
                txtColor={colors.black}
                label="Marcar Paga"
                action={hideModal}
              />
            </ButtonArea>
          </Container>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ActionsModal;
