import MagicBaseClass from './magicbaseclass';

export default class Daemon extends MagicBaseClass {
  constructor(name, type, health, level, attackPrivate, defence) {
    super(name, type = 'Daemon', health = 100, level = 1, attackPrivate = 10, defence = 40);
  }
}