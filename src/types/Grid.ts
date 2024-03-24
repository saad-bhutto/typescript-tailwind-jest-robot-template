import { Char } from "../global";
import GridSlot from "./GridSlot";
import Robot from "./Robot";

class Grid {
    /**
     * @param numOfRows The number of numOfRows in the grid
     */
    private _numOfRows: number;

    /**
     * @param numOfColumns The number of numOfColumns in the grid
     */
    private _numOfColumns: number;

    /**
     * @param _rows The _rows inside the grid
     */
    private _rows: Array<Array<GridSlot>>;

    /**
     * @param robot The robot inside the grid
     */
    private _robot: Robot;

    /**
     * default constructor
     * @param numOfRows defines the number of rows in the grid
     * @param numOfColumns  defines the number of columns in the grid
     */
    constructor(numOfRows: number, numOfColumns: number) {
        this.numOfRows = numOfRows;
        this.numOfColumns = numOfColumns;
        this._rows = new Array<Array<GridSlot>>;
        this.init();
    }


    public get numOfRows(): number {
        return this._numOfRows;
    }
    public set numOfRows(value: number) {
        this._numOfRows = value;
    }

    public get numOfColumns(): number {
        return this._numOfColumns;
    }
    public set numOfColumns(value: number) {
        this._numOfColumns = value;
    }

    public get rows(): Array<Array<GridSlot>> {
        return this._rows;
    }

    public get robot(): Robot {
        return this._robot;
    }
    public set robot(value: Robot) {
        this._robot = value;
    }

    /**
     * get the individual slot from the grid
     *
     * @param row
     * @param column
     * @returns GridSlot
     */
    public getSlot(row: number, column: number): GridSlot {
        return this._rows[row] && this._rows[row][column]
            ? this._rows[row][column]
            : null;
    }

    /**
     * initilzies the grid  _rows with the given columns and rows
     *
     * @returns Grid
     */
    public init(): Grid {
        for (var rowIndex = 0; rowIndex < this.numOfRows; rowIndex++) {
            this._rows[rowIndex] = [];
            for (var columnIndex = 0; columnIndex < this.numOfColumns; columnIndex++) {
                this._rows[rowIndex][columnIndex] = new GridSlot(columnIndex + 1, `slot on ${rowIndex} ${columnIndex}`);
            }
        }

        return this;
    }

    /**
     * @returns boolean whether the grid has a robot
     */
    public hasRobot(): boolean {
        return typeof this._robot !== 'undefined';
    }

    /**
     * @returns boolean whether the grid has a robot
     */
    public clear() {
        this.rows.forEach(r => r.forEach(r => r.visited = false));
        this.robot.setPositions(0, 0);
    }

    /**
     *
     * @param direction the direction character
     */
    public moveRobot(direction: Char) {
        if (!this.hasRobot()) {
            throw new Error("looks like there is no robot in the grid");
        }

        let x = this.robot.getCurrentColumn();
        let y = this.robot.getCurrentRow();

        switch (direction) {
            case 'n':
            case 'N':
                y = y - 1;
                break;
            case 's':
            case 'S':
                y = y + 1;
                break;
            case 'e':
            case 'E':
                x = x + 1;
                break;
            case 'w':
            case 'W':
                x = x - 1;
                break;

            default:
                break;
        }

        try {
            this.robot.setPositions(y, x);
            this.rows[y][x].visited = true;
        } catch (error) {
            throw new RangeError(`Invalid position for robot [${y}, ${x}] `);
        }
    }

}

export default Grid;

