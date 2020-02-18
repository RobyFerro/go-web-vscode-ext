import * as child_process from "child_process";
import { Command } from "./command";


export class GWFServer extends Command {
    public runServer() {
        child_process.exec(`cp ${this.destination} && ./goweb server:run`);
    }
}