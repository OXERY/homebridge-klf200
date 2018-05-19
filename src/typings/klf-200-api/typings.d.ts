
declare module "klf-200-api" {
    export class connection {
        constructor(host: string);
        loginAsync(password: string) : Promise<boolean>;
        logoutAsync() : Promise<boolean>;
        postAsync(functionName: string, action: string, params?: any) : Promise<any>;
    }

    export class products {
        constructor(connection: connection);
        getAsync(): Promise<any[]>;
    }

    export class scenes {
        constructor(connection: connection);
        getAsync(): Promise<any[]>;
        runAsync(sceneIdOrName: number|string): Promise<boolean>;
    }
}