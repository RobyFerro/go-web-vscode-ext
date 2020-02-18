import * as child_process from "child_process";

export class Command {
    protected destination: string;

    constructor(dest: string) {
        this.destination = dest;
    }

    public build(): void {
        child_process.exec(`cp ${this.destination} && go build goweb.go`);
    }
}