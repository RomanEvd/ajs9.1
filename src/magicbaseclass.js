import Character from './character';

export default class MagicBaseClass extends Character {
  constructor(name, type, health, level, attackPrivate, defence) {
    super(name, type, health, level, attackPrivate, defence);
    this.spoiledAttack = null;
  }

  get stoned() {
    return this.spoiledAttack;
  }

  set stoned(cell) {
    this.spoiledAttack = this.attackPrivate - 5 * Math.log2(cell);
    if (this.spoiledAttack < 0) {
      this.spoiledAttack = 0;
    }
  }

  get attack() {
    return this.spoiledAttack;
  }

  set attack(cell) {
    this.spoiledAttack = (1 - cell / 10) * this.attackPrivate;
    if (this.spoiledAttack < 0) {
      this.spoiledAttack = 0;
    }
  }
}