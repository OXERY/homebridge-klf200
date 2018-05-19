/// <reference path="typings/homebridge/typings.d.ts"/>

import { PluginConfig } from "./PluginConfig";
import { VeluxAccessory } from "./VeluxAccessory";

const PLUGIN_NAME = "homebridge-klf200";
const PLATFORM_NAME = "klf200";

let Homebridge: homebridge.API;

export = function(homebridge: homebridge.API) {

    hap = homebridge.hap;
    Homebridge = homebridge;
//  accessoryInit(homebridge.hap.Service, homebridge.hap.Characteristic)
//  utilsInit(homebridge.hap.Characteristic)
  homebridge.registerAccessory(PLUGIN_NAME,PLATFORM_NAME, VeluxAccessory);

}