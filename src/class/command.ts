import * as child_process from "child_process";

export class Command {

    private command: string = "";

    // Rebuild go-web application
    public build(basePath: string): void {
        this.command = `cd ${basePath} && go build goweb.go`;
    }

    // Create new controller into Go-Web application
    public createController(basePath: string, name: string): void {
        this.command = `cd ${basePath} && ./goweb controller:create ${name}`;
    }

    // Create new middleware into Go-Web application
    public createMiddleware(basePath: string, name: string): void {
        this.command = `cd ${basePath} && ./goweb middleware:create ${name}`;
    }

    // Create new migration into Go-Web application
    public createMigration(basePath: string, name: string): void {
        this.command = `cd ${basePath} && ./goweb migration:create ${name}`;
    }

    // Create new command into Go-Web application
    public createCommand(basePath: string, name: string): void {
        this.command = `cd ${basePath} && ./goweb cmd:create ${name}`;
    }

    // Create new model into Go-Web application
    public createModel(basePath: string, name: string): void {
        this.command = `cd ${basePath} && ./goweb model:create ${name}`;
    }

    // Generate application app.key
    public generateKey(basePath: string): void {
        this.command = `cd ${basePath} && ./goweb generate:key`;
    }

    public createJob(basePath: string, name: string): void {
        this.command = `cd ${basePath} && ./goweb job:create ${name}`;
    }

    public run(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                child_process.execSync(this.command);
            } catch (e) {
                reject(e);
            }


            resolve();
        });
    }
}