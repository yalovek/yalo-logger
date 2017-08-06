import winston from 'winston';
import config from './src/config';

export default new winston.Logger({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      filename: config.get('LOGS'),
    }),
  ],
});
