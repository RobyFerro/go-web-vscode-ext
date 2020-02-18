import * as vscode from 'vscode';
import * as shell from "shelljs";
import * as child_process from "child_process";
import * as simplegit from 'simple-git/promise';
import { Command } from './command';

export class Install {
    private destination: string;
    private git: simplegit.SimpleGit;
    private destinationURI: vscode.Uri;

    constructor(dest: string) {
        this.destination = dest;
        this.destinationURI = vscode.Uri.file(this.destination);
        this.git = simplegit();
    }

    // Run project installation
    public run(): void {
        this.git.clone("http://github.com/RobyFerro/go-web.git", this.destination).then(() => {
            this.config();
            this.getGoModules();
            vscode.commands.executeCommand('vscode.openFolder', this.destinationURI);
        }).catch(e => {
            console.log(e);
        });
    }

    // Dowload Go-Web dependencies
    private getGoModules() {
        child_process.execSync(`cd ${this.destination} && go mod download`);
    }

    // Configuring the project
    private config(): void {
        shell.config.execPath = shell.which('node');
        shell.config.verbose = true;

        shell.cd(this.destination);
        shell.rm("-rf", ".git");
        shell.cp("-f", "config.yml.example", "config.yml");
        shell.cp("-f", "env.example", ".env");
    }
}