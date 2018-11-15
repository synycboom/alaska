import moment from 'moment';

export function adToBe(str, format='DD/MM/YYYY'){
  if (str) {
    const momentDate = moment(str, format);
    return `${momentDate.format('DD/MM/')}${parseInt(momentDate.format('YYYY')) + 543}`;
  } else {
    return '';
  }
};

export function beToAd(str) {
  if (str && typeof str === 'string') {
    const tokens = str.split('/');
    const date = `${parseInt(tokens[2]) - 543}-${tokens[1]}-${tokens[0]}`;
    return moment(date);
  } else {
    return;
  }
};