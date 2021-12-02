import {weekDay, priceFormat, statusDaysOf} from './dateCurrency';

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
};
