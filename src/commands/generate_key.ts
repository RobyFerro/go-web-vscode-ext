import * as vscode from 'vscode';
import { InstallKey } from '../class/install_key';

/**
 * Generate new Go-Web app key.
 * This function will change config.yml file by adding the new key.
 */
export async function generateKey() {
    let basePath = vscode.workspace.rootPath,
        command = new InstallKey();

    if (basePath !== undefined) {
        command.build();
        command.run().then(() => {
            vscode.window.showInformationMessage('App key successfully generated!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to generate app key", e);
        });
    }
}