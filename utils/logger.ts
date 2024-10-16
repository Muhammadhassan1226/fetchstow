import * as winston from 'winston';

//  can't name it as Logger,createLogger, winstons default name features

const Logging = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(({  level, message }) => {
      return `[${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ],
});

export default Logging;
