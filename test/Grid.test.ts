import {describe, expect, test} from '@jest/globals';

import Grid from "../src/types/Grid"; // Assuming Grid is exported from 'grid.ts' or 'grid.tsx'
import GridSlot from '../src/types/GridSlot';
import Robot from '../src/types/Robot';

// Test suite for the Grid class
describe('Grid', () => {
  /**
   * Test case
   */
  test('constructor should create a Grid instance with correct dimensions', () => {
    const rows = 5;
    const columns = 10;
    const myGrid = new Grid(5, columns);

    // Check if the Grid instance has the correct properties
    expect(myGrid.numOfRows).toBe(rows);
    expect(myGrid.numOfColumns).toBe(columns);
  });

  /**
   * Test case
   */
  test('getSlot should return null if index is out of bound', () => {
    const myGrid = new Grid(5, 5);
    expect(myGrid.getSlot(11,1)).toBe(null);
  });


  /**
   * Test case
   */
  test('hasRobot should return false if there is no Robot', () => {
    const myGrid = new Grid(5, 5);
    expect(myGrid.hasRobot()).toBe(false);

    myGrid.robot = new Robot(1, 'Awesome robot');
    expect(myGrid.hasRobot()).toBe(true);

  });

  /**
   * Test case
   */
  test('init should fill the slots inside the Grid', () => {
    const myGrid = new Grid(5, 5);

    // Check if the Grid instance has the correct properties
    expect(myGrid.rows).toBeInstanceOf(Array);
    expect(myGrid.rows[0]).toBeInstanceOf(Array);
    expect(myGrid.rows[0][1]).toBeInstanceOf(GridSlot);
    expect(myGrid.rows[0][1].name).toBe('slot on 0 1');
  });



  /**
   * Test case
   */
  test('moveRobo should throw exception if there is no Robo', () => {
    expect(() => {
      const myGrid = new Grid(5, 5);
      myGrid.moveRobot('S');
    }).toThrow(Error);
  });

  /**
   * Test case
   */
  test('moveRobo should move robo bottom and Up', () => {
    const myGrid = new Grid(5, 5);
    myGrid.robot = new Robot(1, 'Awesome robot');

    expect(myGrid.robot.getCurrentRow()).toBe(0);
    expect(myGrid.robot.getCurrentColumn()).toBe(0);

    myGrid.moveRobot('s');
    expect(myGrid.robot.getCurrentRow()).toBe(1);
    expect(myGrid.robot.getCurrentColumn()).toBe(0);

    myGrid.moveRobot('n');
    expect(myGrid.robot.getCurrentRow()).toBe(0);
    expect(myGrid.robot.getCurrentColumn()).toBe(0);
  });

  /**
   * Test case
   */
  test('moveRobo should move max at bottom and cannot move outside', () => {
    const myGrid = new Grid(5, 5);
    myGrid.robot = new Robot(1, 'Awesome robot');

    expect(myGrid.robot.getCurrentRow()).toBe(0);
    expect(myGrid.robot.getCurrentColumn()).toBe(0);

    expect(() => {
      for (let index = 0; index < 10; index++) {
        myGrid.moveRobot('s');
      }
    }).toThrow(Error);

    expect(myGrid.robot.getCurrentRow()).toBe(5);
    expect(myGrid.robot.getCurrentColumn()).toBe(0);

  });

});