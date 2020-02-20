import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createCommand() {
    const commandCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert command name'
    });

    let basePath = vscode.workspace.rootPath,
        command = new Command();
        
    if (basePath !== undefined && commandCreate !== undefined) {
        command.build(basePath);
        command.createCommand(basePath, commandCreate);
        
        command.run().then(() => {
            vscode.window.showInformationMessage('Your command has been created! Do not forget to register it!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new CLI command");
        });
    }
}