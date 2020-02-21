import * as vscode from 'vscode';
import { Command } from "./command";

export class InstallKey extends Command {
    public build(): void {
        this.command = `./goweb generate:key`;
    }
}