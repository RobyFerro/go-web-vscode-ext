import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createJob() {
    const jobCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert job name'
    });

    let basePath = vscode.workspace.rootPath,
        command = new Command();

    if (basePath !== undefined && jobCreate !== undefined) {
        command.build(basePath);
        command.createJob(basePath, jobCreate);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your job has been created!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new job");
        });
    }
}