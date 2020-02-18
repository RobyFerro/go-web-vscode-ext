import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function createMigration(){
    const migrationName = await vscode.window.showInputBox({
        placeHolder: 'Insert migration name'
    });

    let basePath = vscode.workspace.rootPath;
    if (basePath !== undefined && migrationName !== undefined) {
        Command.build(basePath);
        Command.createMigration(basePath, migrationName);
    }

    vscode.window.showInformationMessage('Your migration has been created!');
}