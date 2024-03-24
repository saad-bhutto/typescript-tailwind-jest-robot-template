import { describe, expect, test } from '@jest/globals';

import GridSlot from '../src/types/GridSlot';

// Test suite for the Grid class
describe('GridSlot', () => {
  // Test case for the constructor
  test('constructor should create a GridSlot instance with correct params', () => {
    const id = 5;
    const name = "Slot 1";
    const myGrid = new GridSlot(id, name);

    // Check if the Grid instance has the correct properties
    expect(myGrid.id).toBe(id);
    expect(myGrid.name).toBe(name);
    expect(myGrid.visited).toBe(false);
  });

  test('setter should throw the exception when 0 value is given', () => {
    expect(() => { new GridSlot(0, 'name') }).toThrow(Error);
  });

  test('when visited it should return true', () => {
    let slot = new GridSlot(10, 'name');
    slot.visited = true;
    expect(slot.isVisited()).toBe(true);
  });

});