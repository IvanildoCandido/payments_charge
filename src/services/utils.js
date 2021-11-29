import {weekDay, priceFormat, statusDaysOf} from './dateCurrency';

module.exports = {
  listItemFormat: item => {
    return {
      date: item.date.substring(10, 8),
      day: weekDay(item.date),
      service: item.service,
      name: item.name,
      status: statusDaysOf(item.date),
      price: priceFormat(item.price),
    };
  },
};
