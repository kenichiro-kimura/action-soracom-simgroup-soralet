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

export class FunnelLandlogDestination {
    'channelId'?: string;
    'dataFormat'?: FunnelLandlogDestination.DataFormatEnum;
    'provider'?: FunnelLandlogDestination.ProviderEnum;
    'resourceUrl'?: string;
    'service'?: FunnelLandlogDestination.ServiceEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channelId",
            "baseName": "channel_id",
            "type": "string"
        },
        {
            "name": "dataFormat",
            "baseName": "data_format",
            "type": "FunnelLandlogDestination.DataFormatEnum"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "FunnelLandlogDestination.ProviderEnum"
        },
        {
            "name": "resourceUrl",
            "baseName": "resourceUrl",
            "type": "string"
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "FunnelLandlogDestination.ServiceEnum"
        }    ];

    static getAttributeTypeMap() {
        return FunnelLandlogDestination.attributeTypeMap;
    }
}

export namespace FunnelLandlogDestination {
    export enum DataFormatEnum {
        Json = <any> 'json',
        Text = <any> 'text',
        Xml = <any> 'xml'
    }
    export enum ProviderEnum {
        Landlog = <any> 'landlog'
    }
    export enum ServiceEnum {
        Landlog = <any> 'landlog'
    }
}