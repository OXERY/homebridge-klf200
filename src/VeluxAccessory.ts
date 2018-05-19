/// <reference path="typings/homebridge/typings.d.ts"/>
/// <reference path="typings/klf-200-api/typings.d.ts"/>
import { PluginConfig } from "./PluginConfig";

import * as klf200 from "klf-200-api"
import Log = homebridge.Log;

export class VeluxAccessory implements homebridge.Accessory {
    private config: PluginConfig;
    private logger: homebridge.Log;

    constructor(logger: Log, config: PluginConfig) {
        this.config = config;
        this.logger = logger;
    }

    getServices(): HAPNodeJS.Service[] {

        let s = new service.Window("","","");

        s.getCharacteristic()

        return [s];
    }

}

// export class VeluxPlatform extends homebridge.Platform {
//     getServices(callback: (devices: any[]) => void) {
//         klf200.connection
//     }
// }