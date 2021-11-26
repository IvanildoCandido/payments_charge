import database from '../config/firebaseConfig';
import {collection, getDocs, addDoc} from 'firebase/firestore/lite';

module.exports = {
  getClients: async () => {
    const clients = collection(database, 'clients');
    const clientsSnapshot = await getDocs(clients);
    const clientsList = await clientsSnapshot.docs.map(doc => doc.data());
    return clientsList;
  },
  addClient: async client => {
    try {
      const doc = await addDoc(collection(database, 'clients'), client);
      // console.log('Document written with ID: ', doc.id);
      return 'Cliente adicionado com sucesso!';
    } catch (e) {
      return 'Erro ao adicionar o cliente! ' + e;
    }
  },
};
