import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createController(){
    const controllerName = await vscode.window.showInputBox({
        placeHolder: 'Insert controller name'
    });

    let basePath = vscode.workspace.rootPath;
    if (basePath !== undefined && controllerName !== undefined) {
        Command.build(basePath);
        Command.createController(basePath, controllerName);
    }

    vscode.window.showInformationMessage('Your controller has been created! Do not forget to register it!');
}