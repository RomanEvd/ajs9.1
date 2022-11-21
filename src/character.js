export default class Character {
    constructor(name, type, health, level, attackPrivate, defence) {
      if ((name.length < 2) || (name.length > 10)) {
        throw new Error('Error: name length should be in b/w 2 and 10 bytes.');
      }
      const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!arr.includes(type)) {
        throw new Error('Error: type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie.');
      }
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attackPrivate = attackPrivate;
      this.defence = defence;
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error('The hero is dead.');
      }
      this.level += 1;
      this.attackPrivate *= 1.2;
      this.defence *= 1.2;
      this.health += 100;
    }
  
    damage(points) {
      if (this.health <= 0) {
        throw new Error('The hero is dead.');
      }
      this.health -= points * (1 - this.defence / 100);
    }
  }