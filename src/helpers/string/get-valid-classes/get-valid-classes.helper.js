const CLASSES_SEPARATOR = ' ';

const getValidClasses = (...classes) => classes.filter(Boolean).join(CLASSES_SEPARATOR);

export { getValidClasses };
