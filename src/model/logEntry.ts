/**
 * SORACOM API
 * SORACOM API v1
 *
 * The version of the OpenAPI document: 20230427-035008
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class LogEntry {
    'body'?: object;
    'resourceId'?: string;
    'resourceType'?: LogEntry.ResourceTypeEnum;
    'service'?: LogEntry.ServiceEnum;
    'time'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "object"
        },
        {
            "name": "resourceId",
            "baseName": "resourceId",
            "type": "string"
        },
        {
            "name": "resourceType",
            "baseName": "resourceType",
            "type": "LogEntry.ResourceTypeEnum"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "LogEntry.ServiceEnum"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LogEntry.attributeTypeMap;
    }
}

export namespace LogEntry {
    export enum ResourceTypeEnum {
        Subscriber = <any> 'Subscriber',
        EventHandler = <any> 'EventHandler',
        VirtualPrivateGateway = <any> 'VirtualPrivateGateway'
    }
    export enum ServiceEnum {
        Air = <any> 'Air',
        Beam = <any> 'Beam',
        Canal = <any> 'Canal',
        Direct = <any> 'Direct',
        Door = <any> 'Door',
        Endorse = <any> 'Endorse',
        Funnel = <any> 'Funnel',
        Gate = <any> 'Gate'
    }
}