import * as vscode from 'vscode';
import { Install } from '../class/install';

export function createGwf(){
    const options: vscode.OpenDialogOptions = {
        canSelectMany: false,
        openLabel: 'Select as project directory',
        canSelectFolders: true,
        canSelectFiles: false,
    };

    vscode.window.showOpenDialog(options).then(fileUri => {
        if (fileUri && fileUri[0]) {
            let gw = new Install(fileUri[0].fsPath);
            gw.run();
            vscode.window.showInformationMessage('Go-Web successfull installed!');
        }
    });
}