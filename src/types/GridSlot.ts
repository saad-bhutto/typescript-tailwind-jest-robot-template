class GridSlot {
    /**
     * @param _id
     */
    private _id: number;

    /**
     * @param _name
     */
    private _name: string;

    /**
     * @param _visited
     */
    private _visited: Boolean = false;

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
    public get visited(): Boolean {
        return this._visited;
    }
    public set visited(value: Boolean) {
        this._visited = value;
    }

    public isVisited() {
        return this.visited;
    }

}


export default GridSlot;