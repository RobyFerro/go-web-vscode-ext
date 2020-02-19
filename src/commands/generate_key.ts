import * as vscode from 'vscode';
import { Command } from '../class/command';

export async function generateKey() {
    let basePath = vscode.workspace.rootPath;

    if (basePath !== undefined) {
        Command.build(basePath);
        Command.generateKey(basePath);

        vscode.window.showInformationMessage('App key successfully generated!');
    }
}