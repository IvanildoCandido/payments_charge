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
    const today = new Date();
    const diff = moment(date, 'DD/MM/YYYY').diff(
      moment(today.toLocaleDateString('pt-BR'), 'DD/MM/YYYY'),
    );
    const days = moment.duration(diff).asDays();
    let result = '';
    if (days === 0) {
      result = 'Vencendo hoje!';
    } else if (days === 1) {
      result = 'Vencendo em 1 dia';
    } else {
      result = `Vencendo em ${days} dias`;
    }
    return result;
  },
};
