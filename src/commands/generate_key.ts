import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function generateKey() {
    let basePath = vscode.workspace.rootPath,
        command = new Command();

    if (basePath !== undefined) {

        command.build(basePath);
        command.generateKey(basePath);

        command.run().then(() => {
            vscode.window.showInformationMessage('App key successfully generated!');
        }).catch(e => {
            console.log(e);
            vscode.window.showErrorMessage("Failed to generate app key");
        });
    }
}