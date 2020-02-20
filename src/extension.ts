import * as vscode from 'vscode';
import { createGwf } from './commands/install';
import { createController } from './commands/create_controller';
import { createMigration } from './commands/create_migration';
import { createCommand } from './commands/create_command';
import { createModel } from './commands/create_model';
import { generateKey } from './commands/generate_key';
import { createJob } from './commands/create_job';
import { CommandProvider } from './providers/commandProvider';

export function activate(context: vscode.ExtensionContext) {

	let commands = [
		vscode.commands.registerCommand('goweb.install', createGwf),
		vscode.commands.registerCommand('goweb.install.Key', generateKey),
		vscode.commands.registerCommand('goweb.create.Controller', createController),
		vscode.commands.registerCommand('goweb.create.Middleware', createController),
		vscode.commands.registerCommand('goweb.create.Migration', createMigration),
		vscode.commands.registerCommand('goweb.create.Command', createCommand),
		vscode.commands.registerCommand('goweb.create.Model', createModel),
		vscode.commands.registerCommand('goweb.create.Job', createJob),
	];

	for (let cmd of commands) {
		context.subscriptions.push(cmd);
	}

	vscode.window.createTreeView("gowebCommand", {treeDataProvider: new CommandProvider("create")});
	vscode.window.createTreeView("gowebInstallation", {treeDataProvider: new CommandProvider("install")});
}
