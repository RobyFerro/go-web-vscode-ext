import * as vscode from 'vscode';

export class CommandProvider implements vscode.TreeDataProvider<CommandItem>{

    private type: string;
    private commandRegister: GoWebCommand[] = [
        { title: "Create new project", key: "goweb.install" },
        { title: "Generate app key", key: "goweb.install.Key" },
        { title: "Create new controller", key: "goweb.create.Controller" },
        { title: "Create new middleware", key: "goweb.create.Controller" },
        { title: "Create new migration", key: "goweb.create.Migration" },
        { title: "Create new CLI command", key: "goweb.create.Command" },
        { title: "Create new model", key: "goweb.create.Command" },
        { title: "Create new async job", key: "goweb.create.Job" },
    ];

    constructor(type: string) {
        this.type = type;
    }

    public async getChildren(task?: CommandItem): Promise<CommandItem[]> {
        let commands = await vscode.commands.getCommands(true).then(value => {
            return value;
        });

        let commandsList: CommandItem[] = [];

        for (let i = 0; i < commands.length; i++) {
            let cmd = commands[i];
            if (cmd.startsWith(`goweb.${this.type}`)) {
                let c = this.extractCommandInfo(cmd);
                if (c === undefined) {
                    continue;
                }

                commandsList[i] = new CommandItem("command", c.title, vscode.TreeItemCollapsibleState.None, {
                    command: c.key,
                    title: c.title
                });
            }
        }

        return commandsList;
    }

    public getTreeItem(task: vscode.TreeItem): vscode.TreeItem {
        return task;
    }

    private extractCommandInfo(key: string): GoWebCommand | undefined {
        let cmd: GoWebCommand;
        for (let i = 0; i < this.commandRegister.length; i++) {
            if (this.commandRegister[i].key === key) {
                cmd = this.commandRegister[i];
                return cmd;
            }
        }

        return;
    }
}

class CommandItem extends vscode.TreeItem {
    type: string;

    constructor(type: string, label: string, collapsibleState: vscode.TreeItemCollapsibleState, command?: vscode.Command) {
        super(label, collapsibleState);
        this.type = type;
        this.command = command;
    }
}

interface GoWebCommand {
    // Title that will be shown on command list view
    title: string;
    // Defines the command key registered in VSCode
    key: string;
}