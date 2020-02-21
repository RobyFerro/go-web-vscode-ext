import { Command } from "./command";

export class CreateMigration extends Command {
    public build(name: string): void {
        this.command = `./goweb migration:create ${name}`;
    }
}