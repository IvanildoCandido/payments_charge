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
    let paidCount = 0;
    let nextCount = 0;
    let lostCount = 0;
    const total = payments.reduce((acc, item) => {
      if (item.paymentStatus === 'INTIME') {
        nextCount += 1;
        return acc + Number(item.price);
      } else return acc;
    }, 0);
    const paid = payments.reduce((acc, item) => {
      if (item.paymentStatus === 'PAID') {
        paidCount += 1;
        return acc + Number(item.price);
      } else return acc;
    }, 0);
    const lost = payments.reduce((acc, item) => {
      if (item.paymentStatus === 'LOST') {
        lostCount += 1;
        return acc + Number(item.price);
      } else return acc;
    }, 0);
    return {nextCount, total, paid, paidCount, lost, lostCount};
  },
};
