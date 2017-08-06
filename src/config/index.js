import fs from 'fs';
import convict from 'convict';
import logger from '../../';

const config = convict({
  NODE_ENV: {
    doc: 'Type of enviroment.',
    format: [
      'development',
      'production',
    ],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'node-env',
  },
  CONFIG: {
    doc: 'Config path.',
    format: String,
    default: './config.json',
    env: 'CONFIG',
    arg: 'config',
  },
  LOGS: {
    doc: 'Logs path.',
    format: String,
    default: './app.log',
    env: 'LOGS',
    arg: 'logs',
  },
});

fs.access(config.get('CONFIG'), fs.constants.R_OK, (err) => {
  if (err) {
    logger.warn(err);
  }
  else {
    config.loadFile(config.get('CONFIG'));
  }
});

export default config;
