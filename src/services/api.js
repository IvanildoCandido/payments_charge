import database from '../config/firebaseConfig';
import {collection, getDocs} from 'firebase/firestore/lite';

module.exports = {
  getClients: async () => {
    const clients = collection(database, 'clients');
    const clientsSnapshot = await getDocs(clients);
    const clientsList = await clientsSnapshot.docs.map(doc => doc.data());
    return clientsList;
  },
};
