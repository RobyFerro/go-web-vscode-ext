import { Command } from "./command";

export class CreateJob extends Command {
    public build(name: string): void {
        this.command = `./goweb job:create ${name}`;
    }
}