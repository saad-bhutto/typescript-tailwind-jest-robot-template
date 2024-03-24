import {describe, expect, test} from '@jest/globals';

import GridSlot from '../src/types/GridSlot';
import Robot from '../src/types/Robot';

// Test suite for the Grid class
describe('GridSlot', () => {
  // Test case for the constructor
  test('constructor should create a GridSlot instance with correct dimensions', () => {
    const id = 50;
    const name = "Robo 1";
    const myGrid = new Robot(id, name);

    // Check if the Grid instance has the correct properties
    expect(myGrid.id).toBe(id);
    expect(myGrid.name).toBe(name);
  });

  test('setter should throw the exception when 0 value is given', () => {
    expect(() => {new Robot(0, 'name')}).toThrow(Error);
  });

  test('when visited it should return true', () => {
    let robot  = new Robot(10, 'name');
    expect(robot.getCurrentRow()).toBe(0);
    expect(robot.getCurrentColumn()).toBe(0);
  });

  test('Error should be thrown if the  position is invalid', () => {
    expect(() => {
      let robot  = new Robot(10, 'name');
      robot.setPositions(-1, 0);

    }).toThrow(Error);
  });

});