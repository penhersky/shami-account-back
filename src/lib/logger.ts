import winston, { format } from 'winston';

import { isDevelopment, LOG_LEVEL } from '../config';

const { timestamp, combine, prettyPrint } = format;

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({
      filename: './logs/info.log',
      level: 'info',
    }),
  ],
});

if (isDevelopment)
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );

export const logError = (msg: string, ...args: any) =>
  logger.error(msg, ...args);

export const logInfo = (msg: string, ...args: any) => logger.info(msg, ...args);

export default logger;
