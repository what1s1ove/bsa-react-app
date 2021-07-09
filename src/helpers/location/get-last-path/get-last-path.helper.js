const LAST_PATH_IDX = -1;

const getLastPath = (path) => path.split('/').slice(LAST_PATH_IDX).join();

export { getLastPath };
