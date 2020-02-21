import * as vscode from 'vscode';
import { CreateMiddleware } from '../class/create_middleware';

export async function createController() {
    const middlewareName = await vscode.window.showInputBox({
        placeHolder: 'Insert middleware name'
    });

    let command = new CreateMiddleware();

    if (middlewareName !== undefined) {
        command.build(middlewareName);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your middleware has been created!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new middleware", e);
        });
    }
}