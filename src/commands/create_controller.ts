import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createController() {
    const controllerName = await vscode.window.showInputBox({
        placeHolder: 'Insert controller name'
    });

    let basePath = vscode.workspace.rootPath,
        command = new Command();

    if (basePath !== undefined && controllerName !== undefined) {
        command.build(basePath);
        command.createController(basePath, controllerName);
        
        command.run().then(() => {
            vscode.window.showInformationMessage('Your controller has been created! Do not forget to register it!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new controller");
        });
    }
}