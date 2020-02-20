import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createModel() {
    const modelCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert model name'
    });

    let basePath = vscode.workspace.rootPath,
        command = new Command();

    if (basePath !== undefined && modelCreate !== undefined) {
        command.build(basePath);
        command.createModel(basePath, modelCreate);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your model has been created! Do not forget to register it');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new model");
        });
    }
}