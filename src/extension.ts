import * as vscode from 'vscode';
import { createGwf } from './commands/install';
import { createController } from './commands/create_controller';
import { createMigration } from './commands/create_migration';
import { createCommand } from './commands/create_command';
import { createModel } from './commands/create_model';
import { generateKey } from './commands/generate_key';
import { createJob } from './commands/create_job';

export function activate(context: vscode.ExtensionContext) {

	let commands = [
		vscode.commands.registerCommand('goweb.install', createGwf),
		vscode.commands.registerCommand('goweb.createController', createController),
		vscode.commands.registerCommand('goweb.createMiddleware', createController),
		vscode.commands.registerCommand('goweb.createMigration', createMigration),
		vscode.commands.registerCommand('goweb.createCommand', createCommand),
		vscode.commands.registerCommand('goweb.createModel', createModel),
		vscode.commands.registerCommand('goweb.generateKey', generateKey),
		vscode.commands.registerCommand('goweb.createJob', createJob),
	];

	for (let cmd of commands) {
		context.subscriptions.push(cmd);
	}
}
