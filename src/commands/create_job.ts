import * as vscode from 'vscode';
import { CreateJob } from '../class/create_job';

export async function createJob() {
    const jobCreate = await vscode.window.showInputBox({
        placeHolder: 'Insert job name'
    });

    let command = new CreateJob();

    if (jobCreate !== undefined) {
        command.build(jobCreate);

        command.run().then(() => {
            vscode.window.showInformationMessage('Your job has been created!');
        }).catch(e => {
            vscode.window.showErrorMessage("Failed to create new job", e);
        });
    }
}