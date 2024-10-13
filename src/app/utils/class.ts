import classNames from 'classnames';

export function distribute(prefix: string, classes: string[]) {
  return classNames(classes.map((cls) => `${prefix}${cls}`));
}
