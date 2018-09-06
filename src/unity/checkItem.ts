export class CheckItem{
    private _id: string;
    private name: string;
    private checkedTime: number;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}