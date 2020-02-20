import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createJob(){
    const jobCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert job name'
    });

    let basePath = vscode.workspace.rootPath;
    if (basePath !== undefined && jobCreate !== undefined) {
        Command.build(basePath);
        Command.createJob(basePath, jobCreate);
    }

    vscode.window.showInformationMessage('Your job has been created!');
}