import moment from 'moment';
module.exports = {
  weekDay: date => {
    const dateInfo = new Date(date.split('/').reverse().join('-'));
    const day = dateInfo.getDay();
    const days = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'];
    return days[day];
  },
  priceFormat: price => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  },
  statusDaysOf: date => {
    const diff = moment('29/11/2021', 'DD/MM/YYYY').diff(
      moment(date, 'DD/MM/YYYY'),
    );
    return moment.duration(diff).asDays();
  },
};
