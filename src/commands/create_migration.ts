import * as vscode from 'vscode';
import { CreateMigration } from '../class/create_migration';

export async function createMigration() {
    const migrationName = await vscode.window.showInputBox({
        placeHolder: 'Insert migration name'
    });

    let command = new CreateMigration();
    
    if (migrationName !== undefined) {
        command.build(migrationName);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your migration has been created!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new migration", e);
        });
    }
}