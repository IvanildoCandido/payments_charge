import {weekDay, priceFormat, statusDaysOf} from './dateCurrency';
import {getClients} from '../services/api';
import {parse} from '@babel/core';

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
    };
  },
  totalNextPayments: async () => {
    const payments = await getClients();
    const total = payments.reduce((acc, item) => acc + Number(item.price), 0);
    const paymentsCount = payments.length;
    return {paymentsCount, total};
  },
};
