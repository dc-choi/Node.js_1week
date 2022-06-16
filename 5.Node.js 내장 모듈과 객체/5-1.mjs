import fs from 'fs';
import { Console } from 'console';

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput});
const count = 5;

logger.log(`count: ${count}`);
logger.error(`count: ${count}`);