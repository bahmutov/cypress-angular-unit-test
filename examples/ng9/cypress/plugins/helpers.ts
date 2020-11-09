import * as path from 'path';
/**
 * Helper functions.
 */
const ROOT = path.resolve(__dirname, '..');

const root = path.join.bind(path, ROOT);

export default root;
