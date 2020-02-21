import * as vscode from 'vscode';
import { execSync } from "child_process";

export class Command {

    public command: string = "";

    /**
     * Compile Go-Web application
     */
    private compile(): void {
        try {
            execSync('go build goweb.go', { cwd: vscode.workspace.rootPath });
        } catch (e) {
            vscode.window.showErrorMessage("Failed do build Go-Web application", e);
        }
    }

    /**
     * Run specific command
     */
    public run(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.compile();
            try {
                execSync(this.command, { cwd: vscode.workspace.rootPath });
            } catch (e) {
                reject(e);
            }

            resolve();
        });
    }
}