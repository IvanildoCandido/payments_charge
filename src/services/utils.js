import {weekDay, priceFormat} from './dateCurrency';

module.exports = {
  listItemFormat: item => {
    return {
      date: item.date.substring(0, 2),
      day: weekDay(item.date),
      service: item.service,
      name: item.name,
      status: 'Vencendo hoje!',
      price: priceFormat(item.price),
    };
  },
};
