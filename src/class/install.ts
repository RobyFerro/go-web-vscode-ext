import * as vscode from 'vscode';
import * as shell from "shelljs";
import * as child_process from "child_process";
import * as simplegit from 'simple-git/promise';

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
    public run(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const version = await vscode.window.showInputBox({
                placeHolder: 'Insert Go-Web version'
            });

            if (version === undefined) {
                vscode.window.showErrorMessage("Go-Web installation failed! Missing version number!");
                return;
            }

            this.git.clone(`http://github.com/RobyFerro/go-web.git`, this.destination, ["--branch", version]).then(() => {
                this.config();
                this.getGoModules();
                resolve();
                vscode.commands.executeCommand('vscode.openFolder', this.destinationURI);
            }).catch(e => {
                reject(e);
            });
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