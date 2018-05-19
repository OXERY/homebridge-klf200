/// <reference path="../../../node_modules/hap-nodejs/index.d.ts"/>

//import * as hap from "hap-nodejs";

declare module homebridge {

    import Service = HAPNodeJS.Service;

    export interface AccessoryConstructor {
        new (logger: Log, config: any) : Accessory;
    }

    export interface Accessory {
        getServices() : Service[];
    }

    export interface PlatformConstructor {
        new (logger: Log, config: any) : Platform;
    }

    export interface Platform {
        accessories(callback: (devices: any[]) => void) : void;
    }

    export interface Log {
        (...args: any[]): void
        error(...args: any[]): void
      }

    export class API {
        hap: HAPNodeJS.HAPNodeJS;
        //accessory(name: string) : any;
        registerAccessory<TConfig>(pluginName: string, accessoryName: string, ctor: AccessoryConstructor, configurationRequestHandler?: any) : void;
        registerPlatform<TConfig>(pluginName: string, platformName: string, ctor: PlatformConstructor, dynamic?: boolean): void;
    }
}