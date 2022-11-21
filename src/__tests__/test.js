import Character from '../character';
import Magician from '../magician';
import Daemon from '../daemon';

test('to check that created object has all properties', () => {
  const sample = {
    name: 'Egor',
    type: 'Bowman',
    health: 100,
    level: 1,
    attackPrivate: 25,
    defence: 25,
  };
  const egor = new Character('Egor', 'Bowman', 100, 1, 25, 25);
  expect(egor).toEqual(sample);
});

test('to check that class throws error for name < 2 bytes', () => {
  expect(() => new Character('E', 'Bowman', 100, 1, 25, 25)).toThrow('Error: name length should be in b/w 2 and 10 bytes.');
});

test('to check that class throws error for name > 10 bytes', () => {
  expect(() => new Character('EgorEgorEgor', 'Bowman', 100, 1, 25, 25)).toThrow('Error: name length should be in b/w 2 and 10 bytes.');
});

test('to check that class throws error for wrong type', () => {
  expect(() => new Character('Egor', 'SomeType', 100, 1, 25, 25)).toThrow('Error: type should be one of the list - Bowman, Swordsman, Magician, Daemon, Undead or Zombie.');
});

test('to check that created Magician object has all properties', () => {
  const sample = {
    name: 'Egor',
    type: 'Magician',
    health: 100,
    level: 1,
    attackPrivate: 10,
    defence: 40,
    spoiledAttack: null,
  };
  const egor = new Magician('Egor');
  expect(egor).toEqual(sample);
});

test('to check that created Daemon object has all properties', () => {
  const sample = {
    name: 'Egor',
    type: 'Daemon',
    health: 100,
    level: 1,
    attackPrivate: 10,
    defence: 40,
    spoiledAttack: null,
  };
  const egor = new Daemon('Egor');
  expect(egor).toEqual(sample);
});

test('to check method levelUp() increases unit level.', () => {
  const sampleLvl2 = {
    name: 'Egor',
    type: 'Swordsman',
    health: 200,
    level: 2,
    attackPrivate: 48,
    defence: 12,
  };
  const egor = new Character('Egor', 'Swordsman', 100, 1, 40, 10);
  egor.levelUp();
  expect(egor).toEqual(sampleLvl2);
});

test('to check method levelUp() throws error for dead unit.', () => {
  const sample = new Character('Egor', 'Swordsman', 0, 1, 40, 10);
  expect(() => { sample.levelUp(); }).toThrow('The hero is dead.');
});

test('to check method damage() affects the unit.', () => {
  const sampleLvl2 = {
    name: 'Egor',
    type: 'Swordsman',
    health: 91,
    level: 1,
    attackPrivate: 40,
    defence: 10,
  };
  const egor = new Character('Egor', 'Swordsman', 100, 1, 40, 10);
  egor.damage(10);
  expect(egor).toEqual(sampleLvl2);
});

test('to check method damage() throws error for dead unit.', () => {
  const sample = new Character('Egor', 'Swordsman', 0, 1, 40, 10);
  expect(() => { sample.damage(10); }).toThrow('The hero is dead.');
});

test('to check that hero attack on non-magicians reduces based on distance (cells) for Daemon', () => {
  const egor = new Daemon('Egor');
  egor.attack = 5;
  expect(egor.attack).toBe(5);
});

test('to check that hero attack on non-magicians reduces based on distance (cells) for Magician', () => {
  const egor = new Magician('Egor');
  egor.attack = 11;
  expect(egor.attack).toBe(0);
});

test('to check that hero attack on magicians reduces based on distance (cells) for Daemon', () => {
  const egor = new Daemon('Egor');
  egor.stoned = 4;
  expect(egor.stoned).toBe(0);
});

test('to check that hero attack on magicians reduces based on distance (cells) for Magician', () => {
  const egor = new Magician('Egor');
  egor.stoned = 999999999;
  expect(egor.stoned).toBe(0);
});