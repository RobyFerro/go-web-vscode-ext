import { Command } from "./command";

export class CreateModel extends Command {
    public build(name: string): void {
        this.command = `./goweb model:create ${name}`;
    }
}