import * as child_process from "child_process";

export class Command {
    // Rebuild go-web application
    public static build(basePath: string): void {
        child_process.execSync(`cd ${basePath} && go build goweb.go`);
    }

    // Create new controller into Go-Web application
    public static createController(basePath: string, name: string): void {
        child_process.execSync(`cd ${basePath} && ./goweb controller:create ${name}`);
    }

    // Create new middleware into Go-Web application
    public static createMiddleware(basePath: string, name: string): void {
        child_process.execSync(`cd ${basePath} && ./goweb middleware:create ${name}`);
    }

    // Create new migration into Go-Web application
    public static createMigration(basePath: string, name: string): void {
        child_process.execSync(`cd ${basePath} && ./goweb migration:create ${name}`);
    }

    // Create new command into Go-Web application
    public static createCommand(basePath: string, name: string): void {
        child_process.execSync(`cd ${basePath} && ./goweb cmd:create ${name}`);
    }

    // Create new model into Go-Web application
    public static createModel(basePath: string, name: string): void {
        child_process.execSync(`cd ${basePath} && ./goweb model:create ${name}`);
    }

    // Generate application app.key
    public static generateKey(basePath: string): void {
        child_process.execSync(`cd ${basePath} && ./goweb generate:key`);
    }
}