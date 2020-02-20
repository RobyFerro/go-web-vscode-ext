import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createMigration(){
    const migrationName = await vscode.window.showInputBox({
        placeHolder: 'Insert migration name'
    });

    let basePath = vscode.workspace.rootPath,
        command = new Command();
    if (basePath !== undefined && migrationName !== undefined) {
        command.build(basePath);
        command.createMigration(basePath, migrationName);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your migration has been created!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new migration");
        });
    }
}