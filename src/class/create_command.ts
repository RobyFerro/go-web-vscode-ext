import { Command } from "./command";

export class CreateCommand extends Command {
    public build(name: string): void {
        this.command = `./goweb cmd:create ${name}`;
    }
}