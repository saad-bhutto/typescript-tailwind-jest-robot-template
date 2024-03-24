class Robot {
    /**
     * @param _id
     */
    private _id: number;

    /**
     * @param _name
     */
    private _name: string;

    /**
     * @param positions
     */
    private _positions: Array<number> = [0, 0];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        if(value <= 0) {
            throw new Error('Invalid ID value provided: ' + value);
        }
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get positions(): Array<number> {
        return this._positions;
    }

    public getCurrentRow(): number {
        return this.positions[0] || 0;
    }

    public getCurrentColumn(): number {
        return this.positions[1] || 0;
    }

    public setPositions(row: number, column: number) {
        if(row < 0 || column < 0) {
            throw new Error('Invalid position value provided');
        }

        this._positions = [row, column];
    }

}

export default Robot;