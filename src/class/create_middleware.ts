import { Command } from "./command";

export class CreateMiddleware extends Command {
    public build(name: string): void {
        this.command = `./goweb middleware:create ${name}`;
    }
}