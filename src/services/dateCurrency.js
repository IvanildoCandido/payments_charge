const {ProgressBarAndroidComponent} = require('react-native');

module.exports = {
  weekDay: date => {
    const dateInfo = new Date(date);
    const day = dateInfo.getDay();
    const days = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
    return days[day];
  },
  priceFormat: price => {
    const formatedPrice = price.toLocaleString('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    });
    return formatedPrice;
  },
};
