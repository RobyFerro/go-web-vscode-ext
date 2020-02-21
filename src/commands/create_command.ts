import * as vscode from 'vscode';
import { CreateCommand } from '../class/create_command';

export async function createCommand() {
    const commandCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert command name'
    });

    let command = new CreateCommand();

    if (commandCreate !== undefined) {
        command.build(commandCreate);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your command has been created! Do not forget to register it!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new CLI command", e);
        });
    }
}