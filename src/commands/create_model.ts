import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createModel(){
    const modelCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert model name'
    });

    let basePath = vscode.workspace.rootPath;
    if (basePath !== undefined && modelCreate !== undefined) {
        Command.build(basePath);
        Command.createModel(basePath, modelCreate);
    }

    vscode.window.showInformationMessage('Your model has been created! Do not forget to register it!');
}