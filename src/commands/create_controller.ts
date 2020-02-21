import * as vscode from 'vscode';
import { CreateController } from '../class/create_controller';

export async function createController() {
    const controllerName = await vscode.window.showInputBox({
        placeHolder: 'Insert controller name'
    });

    let command = new CreateController();

    if (controllerName !== undefined) {
        command.build(controllerName);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your controller has been created! Do not forget to register it!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new controller", e);
        });
    }
}