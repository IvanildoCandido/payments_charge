import {weekDay, priceFormat, statusDaysOf} from './dateCurrency';
import {getClients} from '../services/api';

module.exports = {
  listItemFormat: item => {
    return {
      id: item.id,
      date: item.date.substring(0, 2),
      day: weekDay(item.date),
      service: item.service,
      name: item.name,
      status: statusDaysOf(item.date),
      price: priceFormat(item.price),
      paymentStatus: 'INTIME',
    };
  },
  totalNextPayments: async () => {
    const payments = await getClients();
    const total = payments.reduce((acc, item) => acc + Number(item.price), 0);
    let paidCount = 0;
    const paid = payments.reduce((acc, item) => {
      if (item.paymentStatus === 'PAID') {
        paidCount += 1;
        return acc + Number(item.price);
      } else return 0;
    }, 0);

    const paymentsCount = payments.length;
    return {paymentsCount, total, paid, paidCount};
  },
};
