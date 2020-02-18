import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createCommand(){
    const commandCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert command name'
    });

    let basePath = vscode.workspace.rootPath;
    if (basePath !== undefined && commandCreate !== undefined) {
        Command.build(basePath);
        Command.createCommand(basePath, commandCreate);
    }

    vscode.window.showInformationMessage('Your command has been created! Do not forget to register it!');
}