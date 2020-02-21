import { Command } from "./command";

export class CreateController extends Command {
    public build(name: string): void {
        this.command = `./goweb controller:create ${name}`;
    }
}