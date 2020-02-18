import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createController(){
    const middlewareName = await vscode.window.showInputBox({
        placeHolder: 'Insert middleware name'
    });

    let basePath = vscode.workspace.rootPath;
    if (basePath !== undefined && middlewareName !== undefined) {
        Command.build(basePath);
        Command.createMiddleware(basePath, middlewareName);
    }

    vscode.window.showInformationMessage('Your middleware has been created! Do not forget to register it!');
}