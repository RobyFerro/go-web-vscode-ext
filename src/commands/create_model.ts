import * as vscode from 'vscode';
import { CreateModel } from '../class/create_model';

export async function createModel() {
    const modelCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert model name'
    });

    let command = new CreateModel();

    if (modelCreate !== undefined) {
        command.build(modelCreate);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your model has been created! Do not forget to register it');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new model", e);
        });
    }
}