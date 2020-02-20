import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createController() {
    const middlewareName = await vscode.window.showInputBox({
        placeHolder: 'Insert middleware name'
    });

    let basePath = vscode.workspace.rootPath,
        command = new Command();

    if (basePath !== undefined && middlewareName !== undefined) {
        command.build(basePath);
        command.createMiddleware(basePath, middlewareName);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your middleware has been created!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new middleware");
        });
    }
}