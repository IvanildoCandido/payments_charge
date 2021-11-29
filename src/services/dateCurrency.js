module.exports = {
  weekDay: date => {
    const dateInfo = new Date(date);
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
};
