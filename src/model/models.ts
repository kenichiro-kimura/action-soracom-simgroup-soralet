import localVarRequest from 'request';

export * from './aPIAuditLogEntry';
export * from './aPICallError';
export * from './aPICallErrorMessage';
export * from './actionConfig';
export * from './actionConfigProperty';
export * from './addSubscriptionRequest';
export * from './airAggregatedStatsResponse';
export * from './airStatsResponse';
export * from './arcCredentialAttachRequest';
export * from './arcCredentialAttachResponse';
export * from './arcCredentialRenewRequest';
export * from './arcCredentialRenewResponse';
export * from './arcSessionCreateResponse';
export * from './arcSessionStatus';
export * from './attachRoleRequest';
export * from './attributeUpdate';
export * from './authKeyResponse';
export * from './authRequest';
export * from './authResponse';
export * from './availableLongTermDiscountModel';
export * from './availableLongTermDiscountResponse';
export * from './beamStatsResponse';
export * from './billItemCostBreakdown';
export * from './billingSummaryResponseOfBillItems';
export * from './billingSummaryResponseOfSims';
export * from './capabilities';
export * from './cell';
export * from './cellIdentifier';
export * from './cellLocation';
export * from './companyInformationModel';
export * from './contractUpdatedResponse';
export * from './contractUpdatingRequest';
export * from './couponResponse';
export * from './coverageType';
export * from './createAndUpdateCredentialsModel';
export * from './createEstimatedCouponRequest';
export * from './createEstimatedOrderRequest';
export * from './createEstimatedOrderRequestShippingOptionsInner';
export * from './createEstimatedVolumeDiscountRequest';
export * from './createEventHandlerRequest';
export * from './createGroupRequest';
export * from './createOrUpdateRoleRequest';
export * from './createPortMappingRequest';
export * from './createRoleResponse';
export * from './createSimRequest';
export * from './createSoraletRequest';
export * from './createUserPasswordRequest';
export * from './createUserRequest';
export * from './createVirtualPrivateGatewayRequest';
export * from './createVpcPeeringConnectionRequest';
export * from './credentialsModel';
export * from './creditCard';
export * from './dailyBill';
export * from './dailyBillResponse';
export * from './dataEntry';
export * from './dataSourceResourceMetadata';
export * from './dataTrafficStats';
export * from './device';
export * from './deviceObjectModel';
export * from './diagnosticRequest';
export * from './diagnosticResponse';
export * from './downlinkPingRequest';
export * from './downlinkPingResponse';
export * from './emailConfigurationOfBilling';
export * from './emailConfigurationOfNotification';
export * from './emailsModel';
export * from './enableMFAOTPResponse';
export * from './estimatedCouponModel';
export * from './estimatedOrderItemModel';
export * from './estimatedOrderModel';
export * from './estimatedVolumeDiscountModel';
export * from './eventHandlerModel';
export * from './executeDeviceResourceRequest';
export * from './executeSoraletRequest';
export * from './executeSoraletResponse';
export * from './expiryTime';
export * from './exportRequest';
export * from './fileEntry';
export * from './fileExportResponse';
export * from './funkStatsResponse';
export * from './funnelAWSFirehoseDestination';
export * from './funnelAWSIoTDestination';
export * from './funnelAWSKinesisDestination';
export * from './funnelAcroquestTorrentioDestination';
export * from './funnelAppressoDataSpiderDestination';
export * from './funnelAzureEventHubDestination';
export * from './funnelBrainsTechImpulseDestination';
export * from './funnelConfiguration';
export * from './funnelConfigurationDestination';
export * from './funnelContentType';
export * from './funnelDestination';
export * from './funnelEsrijArcgisOnlineDestination';
export * from './funnelFusicMockmockDatarecorderDestination';
export * from './funnelGooglePubSubDestination';
export * from './funnelInfoteriaPlatioDestination';
export * from './funnelKiiThingifDestination';
export * from './funnelLandlogDestination';
export * from './funnelOptimCloudiotosDestination';
export * from './funnelSensorCorpusDestination';
export * from './funnelStatsResponse';
export * from './funnelTeradataIntellicloudDestination';
export * from './funnelWingarcMotionboardDestination';
export * from './funnelYaskawaMmcloudDestination';
export * from './gadget';
export * from './gadgetAttributes';
export * from './gadgetLastSeen';
export * from './gadgetRegistrationRequest';
export * from './gatePeer';
export * from './generateOperatorsAuthKeyResponse';
export * from './generateTokenRequest';
export * from './generateTokenResponse';
export * from './generateUserAuthKeyResponse';
export * from './getBillingHistoryResponse';
export * from './getDefaultPermissionsResponse';
export * from './getExportedFileResponse';
export * from './getLatestBill';
export * from './getOperatorResponse';
export * from './getOrderResponse';
export * from './getPaymentMethodResult';
export * from './getPaymentTransactionResult';
export * from './getShippingAddressResponse';
export * from './getUserPasswordResponse';
export * from './getUserPermissionResponse';
export * from './getVolumeDiscountResponse';
export * from './group';
export * from './groupConfigurationUpdateRequest';
export * from './harvestExportedDataStatsResponse';
export * from './harvestStatsResponse';
export * from './imeiLock';
export * from './individualInformationModel';
export * from './insight';
export * from './ipAddressMapEntry';
export * from './issueAddEmailTokenRequest';
export * from './issuePasswordResetTokenRequest';
export * from './issueSubscriberTransferTokenRequest';
export * from './issueSubscriberTransferTokenResponse';
export * from './junctionInspectionConfiguration';
export * from './junctionMirroringConfiguration';
export * from './junctionMirroringPeer';
export * from './junctionRedirectionConfiguration';
export * from './lagoonDashboardPermissionsResponse';
export * from './lagoonDashboardPermissionsResponsePermissionsInner';
export * from './lagoonDashboardPermissionsUpdatingRequest';
export * from './lagoonDashboardPermissionsUpdatingRequestPermissionsInner';
export * from './lagoonLicensePackStatusResponse';
export * from './lagoonLicensePacksUpdatingRequest';
export * from './lagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner';
export * from './lagoonMigrationRequest';
export * from './lagoonPlanChangingRequest';
export * from './lagoonRegistrationRequest';
export * from './lagoonRegistrationResponse';
export * from './lagoonUser';
export * from './lagoonUserCreationRequest';
export * from './lagoonUserCreationResponse';
export * from './lagoonUserEmailUpdatingRequest';
export * from './lagoonUserPasswordUpdatingRequest';
export * from './lagoonUserPermissionUpdatingRequest';
export * from './lastSeen';
export * from './listCouponResponse';
export * from './listOrderResponse';
export * from './listOrderedSubscriberResponse';
export * from './listPaymentStatementResponse';
export * from './listProductResponse';
export * from './listRolesResponse';
export * from './listShippingAddressResponse';
export * from './listVolumeDiscountResponse';
export * from './locationRegistrationStatus';
export * from './locationRegistrationStatusForNetwork';
export * from './logEntry';
export * from './loraData';
export * from './loraDevice';
export * from './loraGateway';
export * from './loraNetworkSet';
export * from './mFAAuthenticationRequest';
export * from './mFAIssueRevokingTokenRequest';
export * from './mFARevokeRequest';
export * from './mFARevokingTokenVerifyRequest';
export * from './mFAStatusOfUseResponse';
export * from './modelError';
export * from './monthlyBill';
export * from './napterAuditLogDirection';
export * from './napterAuditLogEntry';
export * from './napterAuditLogsExportedDataStatsResponse';
export * from './objectInstance';
export * from './openGateRequest';
export * from './operatorConfigurationModel';
export * from './operatorConfigurationModelConfiguration';
export * from './operatorConfigurationOfEmail';
export * from './operatorConfigurationOfSupport';
export * from './operatorMFAVerifyingResponse';
export * from './orderItemModel';
export * from './orderedSubscriber';
export * from './packetCaptureSession';
export * from './packetCaptureSessionRequest';
export * from './paymentAmount';
export * from './paymentDescription';
export * from './paymentStatementResponse';
export * from './placement';
export * from './portMapping';
export * from './portMappingDestination';
export * from './portMappingSource';
export * from './previousSessionStatus';
export * from './priceByQuantity';
export * from './productModel';
export * from './putIpAddressMapEntryRequest';
export * from './referenceUrl';
export * from './registerGatePeerRequest';
export * from './registerLoraDeviceRequest';
export * from './registerOperatorsRequest';
export * from './registerPayerInformationModel';
export * from './registerSimRequest';
export * from './registerSubscribersRequest';
export * from './resourceInitialSetting';
export * from './resourceInstance';
export * from './resourceSummary';
export * from './resourceSummaryItem';
export * from './resourceSummaryItemDimension';
export * from './resourceSummaryItemValue';
export * from './roleResponse';
export * from './routingFilterEntry';
export * from './ruleConfig';
export * from './ruleConfigProperty';
export * from './sessionEvent';
export * from './sessionStatus';
export * from './setDeviceGroupRequest';
export * from './setDeviceObjectModelScopeRequest';
export * from './setGroupRequest';
export * from './setImeiLockRequest';
export * from './setNetworkSetRequest';
export * from './setOperatorConfigurationNamespaceRequest';
export * from './setOperatorConfigurationNamespaceRequestConfiguration';
export * from './setSystemNotificationsRequest';
export * from './setUserPermissionRequest';
export * from './shippingAddressModel';
export * from './shippingCostModel';
export * from './shippingOptionOfExpeditedShipping';
export * from './shippingOptionOfNekopos';
export * from './sigfoxData';
export * from './sigfoxDevice';
export * from './sigfoxRegistrationRequest';
export * from './sim';
export * from './simCostBreakdown';
export * from './simInitialSetting';
export * from './simProfile';
export * from './simplifiedSubscriber';
export * from './smsForwardingReport';
export * from './smsForwardingRequest';
export * from './soraCamDevice';
export * from './soraCamDeviceConfiguration';
export * from './soraCamDeviceLicenseInfo';
export * from './soraCamEvent';
export * from './soraCamEventEventInfo';
export * from './soraCamEventEventInfoAtomEventV1';
export * from './soraCamExportUsage';
export * from './soraCamExportUsageLimitOverrideSpecification';
export * from './soraCamImageExportInfo';
export * from './soraCamImageExportSpecification';
export * from './soraCamImageExportUsage';
export * from './soraCamLicensePackQuantityUpdatingRequest';
export * from './soraCamLicensePackResponse';
export * from './soraCamPlayListEntry';
export * from './soraCamStreamingVideo';
export * from './soraCamVideoExportInfo';
export * from './soraCamVideoExportSpecification';
export * from './soraCamVideoExportUsage';
export * from './soracomBeamStats';
export * from './soracomFunkStats';
export * from './soracomFunnelStats';
export * from './soracomHarvestStats';
export * from './soralet';
export * from './soraletDataSource';
export * from './soraletLog';
export * from './soraletVersion';
export * from './subscriber';
export * from './subscriptionContainer';
export * from './subscriptionContainerStatus';
export * from './subscriptionContainerStatusCountryMappingValue';
export * from './subscriptionContainerStatusCountryMappingValueMappingRecord';
export * from './supportTier';
export * from './supportTokenResponse';
export * from './systemNotificationsModel';
export * from './tagUpdateRequest';
export * from './trafficVolumeRanking';
export * from './updateDefaultPermissionsRequest';
export * from './updatePasswordRequest';
export * from './updatePermissionRequest';
export * from './updateSpeedClassRequest';
export * from './updateUserRequest';
export * from './userDetailResponse';
export * from './verifyAddEmailTokenRequest';
export * from './verifyOperatorsRequest';
export * from './verifyPasswordResetTokenRequest';
export * from './verifySubscriberTransferTokenRequest';
export * from './verifySubscriberTransferTokenResponse';
export * from './virtualPrivateGateway';
export * from './volumeDiscountModel';
export * from './vpcPeeringConnection';
export * from './writeDeviceResourceRequest';
export * from './writeDeviceResourceRequestValue';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { APIAuditLogEntry } from './aPIAuditLogEntry';
import { APICallError } from './aPICallError';
import { APICallErrorMessage } from './aPICallErrorMessage';
import { ActionConfig } from './actionConfig';
import { ActionConfigProperty } from './actionConfigProperty';
import { AddSubscriptionRequest } from './addSubscriptionRequest';
import { AirAggregatedStatsResponse } from './airAggregatedStatsResponse';
import { AirStatsResponse } from './airStatsResponse';
import { ArcCredentialAttachRequest } from './arcCredentialAttachRequest';
import { ArcCredentialAttachResponse } from './arcCredentialAttachResponse';
import { ArcCredentialRenewRequest } from './arcCredentialRenewRequest';
import { ArcCredentialRenewResponse } from './arcCredentialRenewResponse';
import { ArcSessionCreateResponse } from './arcSessionCreateResponse';
import { ArcSessionStatus } from './arcSessionStatus';
import { AttachRoleRequest } from './attachRoleRequest';
import { AttributeUpdate } from './attributeUpdate';
import { AuthKeyResponse } from './authKeyResponse';
import { AuthRequest } from './authRequest';
import { AuthResponse } from './authResponse';
import { AvailableLongTermDiscountModel } from './availableLongTermDiscountModel';
import { AvailableLongTermDiscountResponse } from './availableLongTermDiscountResponse';
import { BeamStatsResponse } from './beamStatsResponse';
import { BillItemCostBreakdown } from './billItemCostBreakdown';
import { BillingSummaryResponseOfBillItems } from './billingSummaryResponseOfBillItems';
import { BillingSummaryResponseOfSims } from './billingSummaryResponseOfSims';
import { Capabilities } from './capabilities';
import { Cell } from './cell';
import { CellIdentifier } from './cellIdentifier';
import { CellLocation } from './cellLocation';
import { CompanyInformationModel } from './companyInformationModel';
import { ContractUpdatedResponse } from './contractUpdatedResponse';
import { ContractUpdatingRequest } from './contractUpdatingRequest';
import { CouponResponse } from './couponResponse';
import { CoverageType } from './coverageType';
import { CreateAndUpdateCredentialsModel } from './createAndUpdateCredentialsModel';
import { CreateEstimatedCouponRequest } from './createEstimatedCouponRequest';
import { CreateEstimatedOrderRequest } from './createEstimatedOrderRequest';
import { CreateEstimatedOrderRequestShippingOptionsInner } from './createEstimatedOrderRequestShippingOptionsInner';
import { CreateEstimatedVolumeDiscountRequest } from './createEstimatedVolumeDiscountRequest';
import { CreateEventHandlerRequest } from './createEventHandlerRequest';
import { CreateGroupRequest } from './createGroupRequest';
import { CreateOrUpdateRoleRequest } from './createOrUpdateRoleRequest';
import { CreatePortMappingRequest } from './createPortMappingRequest';
import { CreateRoleResponse } from './createRoleResponse';
import { CreateSimRequest } from './createSimRequest';
import { CreateSoraletRequest } from './createSoraletRequest';
import { CreateUserPasswordRequest } from './createUserPasswordRequest';
import { CreateUserRequest } from './createUserRequest';
import { CreateVirtualPrivateGatewayRequest } from './createVirtualPrivateGatewayRequest';
import { CreateVpcPeeringConnectionRequest } from './createVpcPeeringConnectionRequest';
import { CredentialsModel } from './credentialsModel';
import { CreditCard } from './creditCard';
import { DailyBill } from './dailyBill';
import { DailyBillResponse } from './dailyBillResponse';
import { DataEntry } from './dataEntry';
import { DataSourceResourceMetadata } from './dataSourceResourceMetadata';
import { DataTrafficStats } from './dataTrafficStats';
import { Device } from './device';
import { DeviceObjectModel } from './deviceObjectModel';
import { DiagnosticRequest } from './diagnosticRequest';
import { DiagnosticResponse } from './diagnosticResponse';
import { DownlinkPingRequest } from './downlinkPingRequest';
import { DownlinkPingResponse } from './downlinkPingResponse';
import { EmailConfigurationOfBilling } from './emailConfigurationOfBilling';
import { EmailConfigurationOfNotification } from './emailConfigurationOfNotification';
import { EmailsModel } from './emailsModel';
import { EnableMFAOTPResponse } from './enableMFAOTPResponse';
import { EstimatedCouponModel } from './estimatedCouponModel';
import { EstimatedOrderItemModel } from './estimatedOrderItemModel';
import { EstimatedOrderModel } from './estimatedOrderModel';
import { EstimatedVolumeDiscountModel } from './estimatedVolumeDiscountModel';
import { EventHandlerModel } from './eventHandlerModel';
import { ExecuteDeviceResourceRequest } from './executeDeviceResourceRequest';
import { ExecuteSoraletRequest } from './executeSoraletRequest';
import { ExecuteSoraletResponse } from './executeSoraletResponse';
import { ExpiryTime } from './expiryTime';
import { ExportRequest } from './exportRequest';
import { FileEntry } from './fileEntry';
import { FileExportResponse } from './fileExportResponse';
import { FunkStatsResponse } from './funkStatsResponse';
import { FunnelAWSFirehoseDestination } from './funnelAWSFirehoseDestination';
import { FunnelAWSIoTDestination } from './funnelAWSIoTDestination';
import { FunnelAWSKinesisDestination } from './funnelAWSKinesisDestination';
import { FunnelAcroquestTorrentioDestination } from './funnelAcroquestTorrentioDestination';
import { FunnelAppressoDataSpiderDestination } from './funnelAppressoDataSpiderDestination';
import { FunnelAzureEventHubDestination } from './funnelAzureEventHubDestination';
import { FunnelBrainsTechImpulseDestination } from './funnelBrainsTechImpulseDestination';
import { FunnelConfiguration } from './funnelConfiguration';
import { FunnelConfigurationDestination } from './funnelConfigurationDestination';
import { FunnelContentType } from './funnelContentType';
import { FunnelDestination } from './funnelDestination';
import { FunnelEsrijArcgisOnlineDestination } from './funnelEsrijArcgisOnlineDestination';
import { FunnelFusicMockmockDatarecorderDestination } from './funnelFusicMockmockDatarecorderDestination';
import { FunnelGooglePubSubDestination } from './funnelGooglePubSubDestination';
import { FunnelInfoteriaPlatioDestination } from './funnelInfoteriaPlatioDestination';
import { FunnelKiiThingifDestination } from './funnelKiiThingifDestination';
import { FunnelLandlogDestination } from './funnelLandlogDestination';
import { FunnelOptimCloudiotosDestination } from './funnelOptimCloudiotosDestination';
import { FunnelSensorCorpusDestination } from './funnelSensorCorpusDestination';
import { FunnelStatsResponse } from './funnelStatsResponse';
import { FunnelTeradataIntellicloudDestination } from './funnelTeradataIntellicloudDestination';
import { FunnelWingarcMotionboardDestination } from './funnelWingarcMotionboardDestination';
import { FunnelYaskawaMmcloudDestination } from './funnelYaskawaMmcloudDestination';
import { Gadget } from './gadget';
import { GadgetAttributes } from './gadgetAttributes';
import { GadgetLastSeen } from './gadgetLastSeen';
import { GadgetRegistrationRequest } from './gadgetRegistrationRequest';
import { GatePeer } from './gatePeer';
import { GenerateOperatorsAuthKeyResponse } from './generateOperatorsAuthKeyResponse';
import { GenerateTokenRequest } from './generateTokenRequest';
import { GenerateTokenResponse } from './generateTokenResponse';
import { GenerateUserAuthKeyResponse } from './generateUserAuthKeyResponse';
import { GetBillingHistoryResponse } from './getBillingHistoryResponse';
import { GetDefaultPermissionsResponse } from './getDefaultPermissionsResponse';
import { GetExportedFileResponse } from './getExportedFileResponse';
import { GetLatestBill } from './getLatestBill';
import { GetOperatorResponse } from './getOperatorResponse';
import { GetOrderResponse } from './getOrderResponse';
import { GetPaymentMethodResult } from './getPaymentMethodResult';
import { GetPaymentTransactionResult } from './getPaymentTransactionResult';
import { GetShippingAddressResponse } from './getShippingAddressResponse';
import { GetUserPasswordResponse } from './getUserPasswordResponse';
import { GetUserPermissionResponse } from './getUserPermissionResponse';
import { GetVolumeDiscountResponse } from './getVolumeDiscountResponse';
import { Group } from './group';
import { GroupConfigurationUpdateRequest } from './groupConfigurationUpdateRequest';
import { HarvestExportedDataStatsResponse } from './harvestExportedDataStatsResponse';
import { HarvestStatsResponse } from './harvestStatsResponse';
import { ImeiLock } from './imeiLock';
import { IndividualInformationModel } from './individualInformationModel';
import { Insight } from './insight';
import { IpAddressMapEntry } from './ipAddressMapEntry';
import { IssueAddEmailTokenRequest } from './issueAddEmailTokenRequest';
import { IssuePasswordResetTokenRequest } from './issuePasswordResetTokenRequest';
import { IssueSubscriberTransferTokenRequest } from './issueSubscriberTransferTokenRequest';
import { IssueSubscriberTransferTokenResponse } from './issueSubscriberTransferTokenResponse';
import { JunctionInspectionConfiguration } from './junctionInspectionConfiguration';
import { JunctionMirroringConfiguration } from './junctionMirroringConfiguration';
import { JunctionMirroringPeer } from './junctionMirroringPeer';
import { JunctionRedirectionConfiguration } from './junctionRedirectionConfiguration';
import { LagoonDashboardPermissionsResponse } from './lagoonDashboardPermissionsResponse';
import { LagoonDashboardPermissionsResponsePermissionsInner } from './lagoonDashboardPermissionsResponsePermissionsInner';
import { LagoonDashboardPermissionsUpdatingRequest } from './lagoonDashboardPermissionsUpdatingRequest';
import { LagoonDashboardPermissionsUpdatingRequestPermissionsInner } from './lagoonDashboardPermissionsUpdatingRequestPermissionsInner';
import { LagoonLicensePackStatusResponse } from './lagoonLicensePackStatusResponse';
import { LagoonLicensePacksUpdatingRequest } from './lagoonLicensePacksUpdatingRequest';
import { LagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner } from './lagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner';
import { LagoonMigrationRequest } from './lagoonMigrationRequest';
import { LagoonPlanChangingRequest } from './lagoonPlanChangingRequest';
import { LagoonRegistrationRequest } from './lagoonRegistrationRequest';
import { LagoonRegistrationResponse } from './lagoonRegistrationResponse';
import { LagoonUser } from './lagoonUser';
import { LagoonUserCreationRequest } from './lagoonUserCreationRequest';
import { LagoonUserCreationResponse } from './lagoonUserCreationResponse';
import { LagoonUserEmailUpdatingRequest } from './lagoonUserEmailUpdatingRequest';
import { LagoonUserPasswordUpdatingRequest } from './lagoonUserPasswordUpdatingRequest';
import { LagoonUserPermissionUpdatingRequest } from './lagoonUserPermissionUpdatingRequest';
import { LastSeen } from './lastSeen';
import { ListCouponResponse } from './listCouponResponse';
import { ListOrderResponse } from './listOrderResponse';
import { ListOrderedSubscriberResponse } from './listOrderedSubscriberResponse';
import { ListPaymentStatementResponse } from './listPaymentStatementResponse';
import { ListProductResponse } from './listProductResponse';
import { ListRolesResponse } from './listRolesResponse';
import { ListShippingAddressResponse } from './listShippingAddressResponse';
import { ListVolumeDiscountResponse } from './listVolumeDiscountResponse';
import { LocationRegistrationStatus } from './locationRegistrationStatus';
import { LocationRegistrationStatusForNetwork } from './locationRegistrationStatusForNetwork';
import { LogEntry } from './logEntry';
import { LoraData } from './loraData';
import { LoraDevice } from './loraDevice';
import { LoraGateway } from './loraGateway';
import { LoraNetworkSet } from './loraNetworkSet';
import { MFAAuthenticationRequest } from './mFAAuthenticationRequest';
import { MFAIssueRevokingTokenRequest } from './mFAIssueRevokingTokenRequest';
import { MFARevokeRequest } from './mFARevokeRequest';
import { MFARevokingTokenVerifyRequest } from './mFARevokingTokenVerifyRequest';
import { MFAStatusOfUseResponse } from './mFAStatusOfUseResponse';
import { ModelError } from './modelError';
import { MonthlyBill } from './monthlyBill';
import { NapterAuditLogDirection } from './napterAuditLogDirection';
import { NapterAuditLogEntry } from './napterAuditLogEntry';
import { NapterAuditLogsExportedDataStatsResponse } from './napterAuditLogsExportedDataStatsResponse';
import { ObjectInstance } from './objectInstance';
import { OpenGateRequest } from './openGateRequest';
import { OperatorConfigurationModel } from './operatorConfigurationModel';
import { OperatorConfigurationModelConfiguration } from './operatorConfigurationModelConfiguration';
import { OperatorConfigurationOfEmail } from './operatorConfigurationOfEmail';
import { OperatorConfigurationOfSupport } from './operatorConfigurationOfSupport';
import { OperatorMFAVerifyingResponse } from './operatorMFAVerifyingResponse';
import { OrderItemModel } from './orderItemModel';
import { OrderedSubscriber } from './orderedSubscriber';
import { PacketCaptureSession } from './packetCaptureSession';
import { PacketCaptureSessionRequest } from './packetCaptureSessionRequest';
import { PaymentAmount } from './paymentAmount';
import { PaymentDescription } from './paymentDescription';
import { PaymentStatementResponse } from './paymentStatementResponse';
import { Placement } from './placement';
import { PortMapping } from './portMapping';
import { PortMappingDestination } from './portMappingDestination';
import { PortMappingSource } from './portMappingSource';
import { PreviousSessionStatus } from './previousSessionStatus';
import { PriceByQuantity } from './priceByQuantity';
import { ProductModel } from './productModel';
import { PutIpAddressMapEntryRequest } from './putIpAddressMapEntryRequest';
import { ReferenceUrl } from './referenceUrl';
import { RegisterGatePeerRequest } from './registerGatePeerRequest';
import { RegisterLoraDeviceRequest } from './registerLoraDeviceRequest';
import { RegisterOperatorsRequest } from './registerOperatorsRequest';
import { RegisterPayerInformationModel } from './registerPayerInformationModel';
import { RegisterSimRequest } from './registerSimRequest';
import { RegisterSubscribersRequest } from './registerSubscribersRequest';
import { ResourceInitialSetting } from './resourceInitialSetting';
import { ResourceInstance } from './resourceInstance';
import { ResourceSummary } from './resourceSummary';
import { ResourceSummaryItem } from './resourceSummaryItem';
import { ResourceSummaryItemDimension } from './resourceSummaryItemDimension';
import { ResourceSummaryItemValue } from './resourceSummaryItemValue';
import { RoleResponse } from './roleResponse';
import { RoutingFilterEntry } from './routingFilterEntry';
import { RuleConfig } from './ruleConfig';
import { RuleConfigProperty } from './ruleConfigProperty';
import { SessionEvent } from './sessionEvent';
import { SessionStatus } from './sessionStatus';
import { SetDeviceGroupRequest } from './setDeviceGroupRequest';
import { SetDeviceObjectModelScopeRequest } from './setDeviceObjectModelScopeRequest';
import { SetGroupRequest } from './setGroupRequest';
import { SetImeiLockRequest } from './setImeiLockRequest';
import { SetNetworkSetRequest } from './setNetworkSetRequest';
import { SetOperatorConfigurationNamespaceRequest } from './setOperatorConfigurationNamespaceRequest';
import { SetOperatorConfigurationNamespaceRequestConfiguration } from './setOperatorConfigurationNamespaceRequestConfiguration';
import { SetSystemNotificationsRequest } from './setSystemNotificationsRequest';
import { SetUserPermissionRequest } from './setUserPermissionRequest';
import { ShippingAddressModel } from './shippingAddressModel';
import { ShippingCostModel } from './shippingCostModel';
import { ShippingOptionOfExpeditedShipping } from './shippingOptionOfExpeditedShipping';
import { ShippingOptionOfNekopos } from './shippingOptionOfNekopos';
import { SigfoxData } from './sigfoxData';
import { SigfoxDevice } from './sigfoxDevice';
import { SigfoxRegistrationRequest } from './sigfoxRegistrationRequest';
import { Sim } from './sim';
import { SimCostBreakdown } from './simCostBreakdown';
import { SimInitialSetting } from './simInitialSetting';
import { SimProfile } from './simProfile';
import { SimplifiedSubscriber } from './simplifiedSubscriber';
import { SmsForwardingReport } from './smsForwardingReport';
import { SmsForwardingRequest } from './smsForwardingRequest';
import { SoraCamDevice } from './soraCamDevice';
import { SoraCamDeviceConfiguration } from './soraCamDeviceConfiguration';
import { SoraCamDeviceLicenseInfo } from './soraCamDeviceLicenseInfo';
import { SoraCamEvent } from './soraCamEvent';
import { SoraCamEventEventInfo } from './soraCamEventEventInfo';
import { SoraCamEventEventInfoAtomEventV1 } from './soraCamEventEventInfoAtomEventV1';
import { SoraCamExportUsage } from './soraCamExportUsage';
import { SoraCamExportUsageLimitOverrideSpecification } from './soraCamExportUsageLimitOverrideSpecification';
import { SoraCamImageExportInfo } from './soraCamImageExportInfo';
import { SoraCamImageExportSpecification } from './soraCamImageExportSpecification';
import { SoraCamImageExportUsage } from './soraCamImageExportUsage';
import { SoraCamLicensePackQuantityUpdatingRequest } from './soraCamLicensePackQuantityUpdatingRequest';
import { SoraCamLicensePackResponse } from './soraCamLicensePackResponse';
import { SoraCamPlayListEntry } from './soraCamPlayListEntry';
import { SoraCamStreamingVideo } from './soraCamStreamingVideo';
import { SoraCamVideoExportInfo } from './soraCamVideoExportInfo';
import { SoraCamVideoExportSpecification } from './soraCamVideoExportSpecification';
import { SoraCamVideoExportUsage } from './soraCamVideoExportUsage';
import { SoracomBeamStats } from './soracomBeamStats';
import { SoracomFunkStats } from './soracomFunkStats';
import { SoracomFunnelStats } from './soracomFunnelStats';
import { SoracomHarvestStats } from './soracomHarvestStats';
import { Soralet } from './soralet';
import { SoraletDataSource } from './soraletDataSource';
import { SoraletLog } from './soraletLog';
import { SoraletVersion } from './soraletVersion';
import { Subscriber } from './subscriber';
import { SubscriptionContainer } from './subscriptionContainer';
import { SubscriptionContainerStatus } from './subscriptionContainerStatus';
import { SubscriptionContainerStatusCountryMappingValue } from './subscriptionContainerStatusCountryMappingValue';
import { SubscriptionContainerStatusCountryMappingValueMappingRecord } from './subscriptionContainerStatusCountryMappingValueMappingRecord';
import { SupportTier } from './supportTier';
import { SupportTokenResponse } from './supportTokenResponse';
import { SystemNotificationsModel } from './systemNotificationsModel';
import { TagUpdateRequest } from './tagUpdateRequest';
import { TrafficVolumeRanking } from './trafficVolumeRanking';
import { UpdateDefaultPermissionsRequest } from './updateDefaultPermissionsRequest';
import { UpdatePasswordRequest } from './updatePasswordRequest';
import { UpdatePermissionRequest } from './updatePermissionRequest';
import { UpdateSpeedClassRequest } from './updateSpeedClassRequest';
import { UpdateUserRequest } from './updateUserRequest';
import { UserDetailResponse } from './userDetailResponse';
import { VerifyAddEmailTokenRequest } from './verifyAddEmailTokenRequest';
import { VerifyOperatorsRequest } from './verifyOperatorsRequest';
import { VerifyPasswordResetTokenRequest } from './verifyPasswordResetTokenRequest';
import { VerifySubscriberTransferTokenRequest } from './verifySubscriberTransferTokenRequest';
import { VerifySubscriberTransferTokenResponse } from './verifySubscriberTransferTokenResponse';
import { VirtualPrivateGateway } from './virtualPrivateGateway';
import { VolumeDiscountModel } from './volumeDiscountModel';
import { VpcPeeringConnection } from './vpcPeeringConnection';
import { WriteDeviceResourceRequest } from './writeDeviceResourceRequest';
import { WriteDeviceResourceRequestValue } from './writeDeviceResourceRequestValue';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ActionConfig.TypeEnum": ActionConfig.TypeEnum,
        "ActionConfigProperty.ExecutionDateTimeConstEnum": ActionConfigProperty.ExecutionDateTimeConstEnum,
        "ActionConfigProperty.HttpMethodEnum": ActionConfigProperty.HttpMethodEnum,
        "ActionConfigProperty.SpeedClassEnum": ActionConfigProperty.SpeedClassEnum,
        "AddSubscriptionRequest.SubscriptionEnum": AddSubscriptionRequest.SubscriptionEnum,
        "AddSubscriptionRequest.TypeEnum": AddSubscriptionRequest.TypeEnum,
        "AvailableLongTermDiscountModel.CurrencyEnum": AvailableLongTermDiscountModel.CurrencyEnum,
        "AvailableLongTermDiscountModel.VolumeDiscountPaymentTypeEnum": AvailableLongTermDiscountModel.VolumeDiscountPaymentTypeEnum,
        "AvailableLongTermDiscountModel.VolumeDiscountTypeEnum": AvailableLongTermDiscountModel.VolumeDiscountTypeEnum,
        "BillingSummaryResponseOfBillItems.CurrencyEnum": BillingSummaryResponseOfBillItems.CurrencyEnum,
        "BillingSummaryResponseOfSims.CurrencyEnum": BillingSummaryResponseOfSims.CurrencyEnum,
        "Cell.RadioTypeEnum": Cell.RadioTypeEnum,
        "CouponResponse.CurrencyEnum": CouponResponse.CurrencyEnum,
        "CoverageType": CoverageType,
        "CreateAndUpdateCredentialsModel.TypeEnum": CreateAndUpdateCredentialsModel.TypeEnum,
        "CreateEstimatedOrderRequestShippingOptionsInner.ShipmentCompanyEnum": CreateEstimatedOrderRequestShippingOptionsInner.ShipmentCompanyEnum,
        "CreateEstimatedVolumeDiscountRequest.VolumeDiscountPaymentTypeEnum": CreateEstimatedVolumeDiscountRequest.VolumeDiscountPaymentTypeEnum,
        "CreateEstimatedVolumeDiscountRequest.VolumeDiscountTypeEnum": CreateEstimatedVolumeDiscountRequest.VolumeDiscountTypeEnum,
        "CreateEventHandlerRequest.StatusEnum": CreateEventHandlerRequest.StatusEnum,
        "CreateSimRequest.SubscriptionEnum": CreateSimRequest.SubscriptionEnum,
        "CreateSimRequest.TypeEnum": CreateSimRequest.TypeEnum,
        "CreateVirtualPrivateGatewayRequest.TypeEnum": CreateVirtualPrivateGatewayRequest.TypeEnum,
        "CredentialsModel.TypeEnum": CredentialsModel.TypeEnum,
        "DailyBill.CurrencyEnum": DailyBill.CurrencyEnum,
        "DeviceObjectModel.FormatEnum": DeviceObjectModel.FormatEnum,
        "DiagnosticRequest.ResourceTypeEnum": DiagnosticRequest.ResourceTypeEnum,
        "DiagnosticRequest.ServiceEnum": DiagnosticRequest.ServiceEnum,
        "DiagnosticResponse.ResourceTypeEnum": DiagnosticResponse.ResourceTypeEnum,
        "DiagnosticResponse.ServiceEnum": DiagnosticResponse.ServiceEnum,
        "DiagnosticResponse.StatusEnum": DiagnosticResponse.StatusEnum,
        "EstimatedCouponModel.CurrencyEnum": EstimatedCouponModel.CurrencyEnum,
        "EstimatedOrderModel.CurrencyEnum": EstimatedOrderModel.CurrencyEnum,
        "EstimatedVolumeDiscountModel.CurrencyEnum": EstimatedVolumeDiscountModel.CurrencyEnum,
        "EventHandlerModel.StatusEnum": EventHandlerModel.StatusEnum,
        "ExecuteSoraletRequest.DirectionEnum": ExecuteSoraletRequest.DirectionEnum,
        "ExecuteSoraletRequest.EncodingTypeEnum": ExecuteSoraletRequest.EncodingTypeEnum,
        "ExpiryTime.ExpiryActionEnum": ExpiryTime.ExpiryActionEnum,
        "ExportRequest.PeriodEnum": ExportRequest.PeriodEnum,
        "FunnelAWSFirehoseDestination.ProviderEnum": FunnelAWSFirehoseDestination.ProviderEnum,
        "FunnelAWSFirehoseDestination.ServiceEnum": FunnelAWSFirehoseDestination.ServiceEnum,
        "FunnelAWSIoTDestination.ProviderEnum": FunnelAWSIoTDestination.ProviderEnum,
        "FunnelAWSIoTDestination.ServiceEnum": FunnelAWSIoTDestination.ServiceEnum,
        "FunnelAWSKinesisDestination.ProviderEnum": FunnelAWSKinesisDestination.ProviderEnum,
        "FunnelAWSKinesisDestination.ServiceEnum": FunnelAWSKinesisDestination.ServiceEnum,
        "FunnelAcroquestTorrentioDestination.ProviderEnum": FunnelAcroquestTorrentioDestination.ProviderEnum,
        "FunnelAcroquestTorrentioDestination.ServiceEnum": FunnelAcroquestTorrentioDestination.ServiceEnum,
        "FunnelAppressoDataSpiderDestination.ProviderEnum": FunnelAppressoDataSpiderDestination.ProviderEnum,
        "FunnelAppressoDataSpiderDestination.ServiceEnum": FunnelAppressoDataSpiderDestination.ServiceEnum,
        "FunnelAzureEventHubDestination.ProviderEnum": FunnelAzureEventHubDestination.ProviderEnum,
        "FunnelAzureEventHubDestination.ServiceEnum": FunnelAzureEventHubDestination.ServiceEnum,
        "FunnelBrainsTechImpulseDestination.ProviderEnum": FunnelBrainsTechImpulseDestination.ProviderEnum,
        "FunnelBrainsTechImpulseDestination.ServiceEnum": FunnelBrainsTechImpulseDestination.ServiceEnum,
        "FunnelConfigurationDestination.ProviderEnum": FunnelConfigurationDestination.ProviderEnum,
        "FunnelConfigurationDestination.ServiceEnum": FunnelConfigurationDestination.ServiceEnum,
        "FunnelContentType": FunnelContentType,
        "FunnelEsrijArcgisOnlineDestination.ProviderEnum": FunnelEsrijArcgisOnlineDestination.ProviderEnum,
        "FunnelEsrijArcgisOnlineDestination.ServiceEnum": FunnelEsrijArcgisOnlineDestination.ServiceEnum,
        "FunnelFusicMockmockDatarecorderDestination.ProviderEnum": FunnelFusicMockmockDatarecorderDestination.ProviderEnum,
        "FunnelFusicMockmockDatarecorderDestination.ServiceEnum": FunnelFusicMockmockDatarecorderDestination.ServiceEnum,
        "FunnelGooglePubSubDestination.ProviderEnum": FunnelGooglePubSubDestination.ProviderEnum,
        "FunnelGooglePubSubDestination.ServiceEnum": FunnelGooglePubSubDestination.ServiceEnum,
        "FunnelInfoteriaPlatioDestination.ProviderEnum": FunnelInfoteriaPlatioDestination.ProviderEnum,
        "FunnelInfoteriaPlatioDestination.ServiceEnum": FunnelInfoteriaPlatioDestination.ServiceEnum,
        "FunnelKiiThingifDestination.ProviderEnum": FunnelKiiThingifDestination.ProviderEnum,
        "FunnelKiiThingifDestination.ServiceEnum": FunnelKiiThingifDestination.ServiceEnum,
        "FunnelLandlogDestination.DataFormatEnum": FunnelLandlogDestination.DataFormatEnum,
        "FunnelLandlogDestination.ProviderEnum": FunnelLandlogDestination.ProviderEnum,
        "FunnelLandlogDestination.ServiceEnum": FunnelLandlogDestination.ServiceEnum,
        "FunnelOptimCloudiotosDestination.ProviderEnum": FunnelOptimCloudiotosDestination.ProviderEnum,
        "FunnelOptimCloudiotosDestination.ServiceEnum": FunnelOptimCloudiotosDestination.ServiceEnum,
        "FunnelSensorCorpusDestination.ProviderEnum": FunnelSensorCorpusDestination.ProviderEnum,
        "FunnelSensorCorpusDestination.ServiceEnum": FunnelSensorCorpusDestination.ServiceEnum,
        "FunnelTeradataIntellicloudDestination.ProviderEnum": FunnelTeradataIntellicloudDestination.ProviderEnum,
        "FunnelTeradataIntellicloudDestination.ServiceEnum": FunnelTeradataIntellicloudDestination.ServiceEnum,
        "FunnelWingarcMotionboardDestination.ProviderEnum": FunnelWingarcMotionboardDestination.ProviderEnum,
        "FunnelWingarcMotionboardDestination.ServiceEnum": FunnelWingarcMotionboardDestination.ServiceEnum,
        "FunnelYaskawaMmcloudDestination.ProviderEnum": FunnelYaskawaMmcloudDestination.ProviderEnum,
        "FunnelYaskawaMmcloudDestination.ServiceEnum": FunnelYaskawaMmcloudDestination.ServiceEnum,
        "Gadget.ProductIdEnum": Gadget.ProductIdEnum,
        "Gadget.StatusEnum": Gadget.StatusEnum,
        "GadgetLastSeen.ClickTypeEnum": GadgetLastSeen.ClickTypeEnum,
        "GetExportedFileResponse.StatusEnum": GetExportedFileResponse.StatusEnum,
        "GetLatestBill.CurrencyEnum": GetLatestBill.CurrencyEnum,
        "GetOrderResponse.CurrencyEnum": GetOrderResponse.CurrencyEnum,
        "GetOrderResponse.OrderStatusEnum": GetOrderResponse.OrderStatusEnum,
        "GetPaymentMethodResult.ErrorCodeEnum": GetPaymentMethodResult.ErrorCodeEnum,
        "GetPaymentMethodResult.ProviderTypeEnum": GetPaymentMethodResult.ProviderTypeEnum,
        "GetPaymentTransactionResult.MessageCodeEnum": GetPaymentTransactionResult.MessageCodeEnum,
        "GetPaymentTransactionResult.StatusEnum": GetPaymentTransactionResult.StatusEnum,
        "GetVolumeDiscountResponse.CurrencyEnum": GetVolumeDiscountResponse.CurrencyEnum,
        "GetVolumeDiscountResponse.StatusEnum": GetVolumeDiscountResponse.StatusEnum,
        "GetVolumeDiscountResponse.VolumeDiscountPaymentTypeEnum": GetVolumeDiscountResponse.VolumeDiscountPaymentTypeEnum,
        "GetVolumeDiscountResponse.VolumeDiscountTypeEnum": GetVolumeDiscountResponse.VolumeDiscountTypeEnum,
        "Insight.CategoryEnum": Insight.CategoryEnum,
        "Insight.SeverityEnum": Insight.SeverityEnum,
        "IpAddressMapEntry.TypeEnum": IpAddressMapEntry.TypeEnum,
        "JunctionMirroringPeer.ProtocolEnum": JunctionMirroringPeer.ProtocolEnum,
        "LagoonDashboardPermissionsResponsePermissionsInner.PermissionNameEnum": LagoonDashboardPermissionsResponsePermissionsInner.PermissionNameEnum,
        "LagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner.LicensePackNameEnum": LagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner.LicensePackNameEnum,
        "LagoonPlanChangingRequest.PlanEnum": LagoonPlanChangingRequest.PlanEnum,
        "LagoonRegistrationRequest.PlanEnum": LagoonRegistrationRequest.PlanEnum,
        "LagoonUser.RoleEnum": LagoonUser.RoleEnum,
        "LagoonUserCreationRequest.RoleEnum": LagoonUserCreationRequest.RoleEnum,
        "LagoonUserPermissionUpdatingRequest.RoleEnum": LagoonUserPermissionUpdatingRequest.RoleEnum,
        "LogEntry.ResourceTypeEnum": LogEntry.ResourceTypeEnum,
        "LogEntry.ServiceEnum": LogEntry.ServiceEnum,
        "LoraDevice.StatusEnum": LoraDevice.StatusEnum,
        "LoraGateway.StatusEnum": LoraGateway.StatusEnum,
        "MonthlyBill.CurrencyEnum": MonthlyBill.CurrencyEnum,
        "MonthlyBill.PaymentStatusEnum": MonthlyBill.PaymentStatusEnum,
        "MonthlyBill.StateEnum": MonthlyBill.StateEnum,
        "NapterAuditLogEntry.TypeEnum": NapterAuditLogEntry.TypeEnum,
        "OperatorConfigurationModel.NamespaceEnum": OperatorConfigurationModel.NamespaceEnum,
        "PacketCaptureSession.StatusEnum": PacketCaptureSession.StatusEnum,
        "PaymentAmount.CurrencyEnum": PaymentAmount.CurrencyEnum,
        "PaymentStatementResponse.CurrencyEnum": PaymentStatementResponse.CurrencyEnum,
        "Placement.InfrastructureProviderEnum": Placement.InfrastructureProviderEnum,
        "Placement.RegionEnum": Placement.RegionEnum,
        "ProductModel.CurrencyEnum": ProductModel.CurrencyEnum,
        "ProductModel.ProductTypeEnum": ProductModel.ProductTypeEnum,
        "ResourceInstance.OperationsEnum": ResourceInstance.OperationsEnum,
        "ResourceInstance.TypeEnum": ResourceInstance.TypeEnum,
        "RoutingFilterEntry.ActionEnum": RoutingFilterEntry.ActionEnum,
        "RuleConfig.TypeEnum": RuleConfig.TypeEnum,
        "RuleConfigProperty.InactiveTimeoutDateConstEnum": RuleConfigProperty.InactiveTimeoutDateConstEnum,
        "RuleConfigProperty.RunOnceAmongTargetEnum": RuleConfigProperty.RunOnceAmongTargetEnum,
        "RuleConfigProperty.TargetOtaStatusEnum": RuleConfigProperty.TargetOtaStatusEnum,
        "RuleConfigProperty.TargetSpeedClassEnum": RuleConfigProperty.TargetSpeedClassEnum,
        "RuleConfigProperty.TargetStatusEnum": RuleConfigProperty.TargetStatusEnum,
        "ShippingCostModel.CurrencyEnum": ShippingCostModel.CurrencyEnum,
        "ShippingCostModel.ShippingAreaEnum": ShippingCostModel.ShippingAreaEnum,
        "ShippingOptionOfNekopos.ShipmentCompanyEnum": ShippingOptionOfNekopos.ShipmentCompanyEnum,
        "SigfoxDevice.StatusEnum": SigfoxDevice.StatusEnum,
        "Sim.ExpiryActionEnum": Sim.ExpiryActionEnum,
        "Sim.ModuleTypeEnum": Sim.ModuleTypeEnum,
        "Sim.StatusEnum": Sim.StatusEnum,
        "Sim.TypeEnum": Sim.TypeEnum,
        "SoraCamEventEventInfoAtomEventV1.RecordingStatusEnum": SoraCamEventEventInfoAtomEventV1.RecordingStatusEnum,
        "SoraCamEventEventInfoAtomEventV1.TypeEnum": SoraCamEventEventInfoAtomEventV1.TypeEnum,
        "SoraCamImageExportInfo.StatusEnum": SoraCamImageExportInfo.StatusEnum,
        "SoraCamImageExportSpecification.ImageFiltersEnum": SoraCamImageExportSpecification.ImageFiltersEnum,
        "SoraCamVideoExportInfo.StatusEnum": SoraCamVideoExportInfo.StatusEnum,
        "Subscriber.ExpiryActionEnum": Subscriber.ExpiryActionEnum,
        "Subscriber.ModuleTypeEnum": Subscriber.ModuleTypeEnum,
        "Subscriber.StatusEnum": Subscriber.StatusEnum,
        "SupportTier": SupportTier,
        "SystemNotificationsModel.TypeEnum": SystemNotificationsModel.TypeEnum,
        "UpdateSpeedClassRequest.SpeedClassEnum": UpdateSpeedClassRequest.SpeedClassEnum,
        "VirtualPrivateGateway.StatusEnum": VirtualPrivateGateway.StatusEnum,
        "VirtualPrivateGateway.TypeEnum": VirtualPrivateGateway.TypeEnum,
        "VolumeDiscountModel.CurrencyEnum": VolumeDiscountModel.CurrencyEnum,
        "VolumeDiscountModel.VolumeDiscountPaymentTypeEnum": VolumeDiscountModel.VolumeDiscountPaymentTypeEnum,
        "VolumeDiscountModel.VolumeDiscountTypeEnum": VolumeDiscountModel.VolumeDiscountTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "APIAuditLogEntry": APIAuditLogEntry,
    "APICallError": APICallError,
    "APICallErrorMessage": APICallErrorMessage,
    "ActionConfig": ActionConfig,
    "ActionConfigProperty": ActionConfigProperty,
    "AddSubscriptionRequest": AddSubscriptionRequest,
    "AirAggregatedStatsResponse": AirAggregatedStatsResponse,
    "AirStatsResponse": AirStatsResponse,
    "ArcCredentialAttachRequest": ArcCredentialAttachRequest,
    "ArcCredentialAttachResponse": ArcCredentialAttachResponse,
    "ArcCredentialRenewRequest": ArcCredentialRenewRequest,
    "ArcCredentialRenewResponse": ArcCredentialRenewResponse,
    "ArcSessionCreateResponse": ArcSessionCreateResponse,
    "ArcSessionStatus": ArcSessionStatus,
    "AttachRoleRequest": AttachRoleRequest,
    "AttributeUpdate": AttributeUpdate,
    "AuthKeyResponse": AuthKeyResponse,
    "AuthRequest": AuthRequest,
    "AuthResponse": AuthResponse,
    "AvailableLongTermDiscountModel": AvailableLongTermDiscountModel,
    "AvailableLongTermDiscountResponse": AvailableLongTermDiscountResponse,
    "BeamStatsResponse": BeamStatsResponse,
    "BillItemCostBreakdown": BillItemCostBreakdown,
    "BillingSummaryResponseOfBillItems": BillingSummaryResponseOfBillItems,
    "BillingSummaryResponseOfSims": BillingSummaryResponseOfSims,
    "Capabilities": Capabilities,
    "Cell": Cell,
    "CellIdentifier": CellIdentifier,
    "CellLocation": CellLocation,
    "CompanyInformationModel": CompanyInformationModel,
    "ContractUpdatedResponse": ContractUpdatedResponse,
    "ContractUpdatingRequest": ContractUpdatingRequest,
    "CouponResponse": CouponResponse,
    "CreateAndUpdateCredentialsModel": CreateAndUpdateCredentialsModel,
    "CreateEstimatedCouponRequest": CreateEstimatedCouponRequest,
    "CreateEstimatedOrderRequest": CreateEstimatedOrderRequest,
    "CreateEstimatedOrderRequestShippingOptionsInner": CreateEstimatedOrderRequestShippingOptionsInner,
    "CreateEstimatedVolumeDiscountRequest": CreateEstimatedVolumeDiscountRequest,
    "CreateEventHandlerRequest": CreateEventHandlerRequest,
    "CreateGroupRequest": CreateGroupRequest,
    "CreateOrUpdateRoleRequest": CreateOrUpdateRoleRequest,
    "CreatePortMappingRequest": CreatePortMappingRequest,
    "CreateRoleResponse": CreateRoleResponse,
    "CreateSimRequest": CreateSimRequest,
    "CreateSoraletRequest": CreateSoraletRequest,
    "CreateUserPasswordRequest": CreateUserPasswordRequest,
    "CreateUserRequest": CreateUserRequest,
    "CreateVirtualPrivateGatewayRequest": CreateVirtualPrivateGatewayRequest,
    "CreateVpcPeeringConnectionRequest": CreateVpcPeeringConnectionRequest,
    "CredentialsModel": CredentialsModel,
    "CreditCard": CreditCard,
    "DailyBill": DailyBill,
    "DailyBillResponse": DailyBillResponse,
    "DataEntry": DataEntry,
    "DataSourceResourceMetadata": DataSourceResourceMetadata,
    "DataTrafficStats": DataTrafficStats,
    "Device": Device,
    "DeviceObjectModel": DeviceObjectModel,
    "DiagnosticRequest": DiagnosticRequest,
    "DiagnosticResponse": DiagnosticResponse,
    "DownlinkPingRequest": DownlinkPingRequest,
    "DownlinkPingResponse": DownlinkPingResponse,
    "EmailConfigurationOfBilling": EmailConfigurationOfBilling,
    "EmailConfigurationOfNotification": EmailConfigurationOfNotification,
    "EmailsModel": EmailsModel,
    "EnableMFAOTPResponse": EnableMFAOTPResponse,
    "EstimatedCouponModel": EstimatedCouponModel,
    "EstimatedOrderItemModel": EstimatedOrderItemModel,
    "EstimatedOrderModel": EstimatedOrderModel,
    "EstimatedVolumeDiscountModel": EstimatedVolumeDiscountModel,
    "EventHandlerModel": EventHandlerModel,
    "ExecuteDeviceResourceRequest": ExecuteDeviceResourceRequest,
    "ExecuteSoraletRequest": ExecuteSoraletRequest,
    "ExecuteSoraletResponse": ExecuteSoraletResponse,
    "ExpiryTime": ExpiryTime,
    "ExportRequest": ExportRequest,
    "FileEntry": FileEntry,
    "FileExportResponse": FileExportResponse,
    "FunkStatsResponse": FunkStatsResponse,
    "FunnelAWSFirehoseDestination": FunnelAWSFirehoseDestination,
    "FunnelAWSIoTDestination": FunnelAWSIoTDestination,
    "FunnelAWSKinesisDestination": FunnelAWSKinesisDestination,
    "FunnelAcroquestTorrentioDestination": FunnelAcroquestTorrentioDestination,
    "FunnelAppressoDataSpiderDestination": FunnelAppressoDataSpiderDestination,
    "FunnelAzureEventHubDestination": FunnelAzureEventHubDestination,
    "FunnelBrainsTechImpulseDestination": FunnelBrainsTechImpulseDestination,
    "FunnelConfiguration": FunnelConfiguration,
    "FunnelConfigurationDestination": FunnelConfigurationDestination,
    "FunnelDestination": FunnelDestination,
    "FunnelEsrijArcgisOnlineDestination": FunnelEsrijArcgisOnlineDestination,
    "FunnelFusicMockmockDatarecorderDestination": FunnelFusicMockmockDatarecorderDestination,
    "FunnelGooglePubSubDestination": FunnelGooglePubSubDestination,
    "FunnelInfoteriaPlatioDestination": FunnelInfoteriaPlatioDestination,
    "FunnelKiiThingifDestination": FunnelKiiThingifDestination,
    "FunnelLandlogDestination": FunnelLandlogDestination,
    "FunnelOptimCloudiotosDestination": FunnelOptimCloudiotosDestination,
    "FunnelSensorCorpusDestination": FunnelSensorCorpusDestination,
    "FunnelStatsResponse": FunnelStatsResponse,
    "FunnelTeradataIntellicloudDestination": FunnelTeradataIntellicloudDestination,
    "FunnelWingarcMotionboardDestination": FunnelWingarcMotionboardDestination,
    "FunnelYaskawaMmcloudDestination": FunnelYaskawaMmcloudDestination,
    "Gadget": Gadget,
    "GadgetAttributes": GadgetAttributes,
    "GadgetLastSeen": GadgetLastSeen,
    "GadgetRegistrationRequest": GadgetRegistrationRequest,
    "GatePeer": GatePeer,
    "GenerateOperatorsAuthKeyResponse": GenerateOperatorsAuthKeyResponse,
    "GenerateTokenRequest": GenerateTokenRequest,
    "GenerateTokenResponse": GenerateTokenResponse,
    "GenerateUserAuthKeyResponse": GenerateUserAuthKeyResponse,
    "GetBillingHistoryResponse": GetBillingHistoryResponse,
    "GetDefaultPermissionsResponse": GetDefaultPermissionsResponse,
    "GetExportedFileResponse": GetExportedFileResponse,
    "GetLatestBill": GetLatestBill,
    "GetOperatorResponse": GetOperatorResponse,
    "GetOrderResponse": GetOrderResponse,
    "GetPaymentMethodResult": GetPaymentMethodResult,
    "GetPaymentTransactionResult": GetPaymentTransactionResult,
    "GetShippingAddressResponse": GetShippingAddressResponse,
    "GetUserPasswordResponse": GetUserPasswordResponse,
    "GetUserPermissionResponse": GetUserPermissionResponse,
    "GetVolumeDiscountResponse": GetVolumeDiscountResponse,
    "Group": Group,
    "GroupConfigurationUpdateRequest": GroupConfigurationUpdateRequest,
    "HarvestExportedDataStatsResponse": HarvestExportedDataStatsResponse,
    "HarvestStatsResponse": HarvestStatsResponse,
    "ImeiLock": ImeiLock,
    "IndividualInformationModel": IndividualInformationModel,
    "Insight": Insight,
    "IpAddressMapEntry": IpAddressMapEntry,
    "IssueAddEmailTokenRequest": IssueAddEmailTokenRequest,
    "IssuePasswordResetTokenRequest": IssuePasswordResetTokenRequest,
    "IssueSubscriberTransferTokenRequest": IssueSubscriberTransferTokenRequest,
    "IssueSubscriberTransferTokenResponse": IssueSubscriberTransferTokenResponse,
    "JunctionInspectionConfiguration": JunctionInspectionConfiguration,
    "JunctionMirroringConfiguration": JunctionMirroringConfiguration,
    "JunctionMirroringPeer": JunctionMirroringPeer,
    "JunctionRedirectionConfiguration": JunctionRedirectionConfiguration,
    "LagoonDashboardPermissionsResponse": LagoonDashboardPermissionsResponse,
    "LagoonDashboardPermissionsResponsePermissionsInner": LagoonDashboardPermissionsResponsePermissionsInner,
    "LagoonDashboardPermissionsUpdatingRequest": LagoonDashboardPermissionsUpdatingRequest,
    "LagoonDashboardPermissionsUpdatingRequestPermissionsInner": LagoonDashboardPermissionsUpdatingRequestPermissionsInner,
    "LagoonLicensePackStatusResponse": LagoonLicensePackStatusResponse,
    "LagoonLicensePacksUpdatingRequest": LagoonLicensePacksUpdatingRequest,
    "LagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner": LagoonLicensePacksUpdatingRequestLicensePackQuantitiesInner,
    "LagoonMigrationRequest": LagoonMigrationRequest,
    "LagoonPlanChangingRequest": LagoonPlanChangingRequest,
    "LagoonRegistrationRequest": LagoonRegistrationRequest,
    "LagoonRegistrationResponse": LagoonRegistrationResponse,
    "LagoonUser": LagoonUser,
    "LagoonUserCreationRequest": LagoonUserCreationRequest,
    "LagoonUserCreationResponse": LagoonUserCreationResponse,
    "LagoonUserEmailUpdatingRequest": LagoonUserEmailUpdatingRequest,
    "LagoonUserPasswordUpdatingRequest": LagoonUserPasswordUpdatingRequest,
    "LagoonUserPermissionUpdatingRequest": LagoonUserPermissionUpdatingRequest,
    "LastSeen": LastSeen,
    "ListCouponResponse": ListCouponResponse,
    "ListOrderResponse": ListOrderResponse,
    "ListOrderedSubscriberResponse": ListOrderedSubscriberResponse,
    "ListPaymentStatementResponse": ListPaymentStatementResponse,
    "ListProductResponse": ListProductResponse,
    "ListRolesResponse": ListRolesResponse,
    "ListShippingAddressResponse": ListShippingAddressResponse,
    "ListVolumeDiscountResponse": ListVolumeDiscountResponse,
    "LocationRegistrationStatus": LocationRegistrationStatus,
    "LocationRegistrationStatusForNetwork": LocationRegistrationStatusForNetwork,
    "LogEntry": LogEntry,
    "LoraData": LoraData,
    "LoraDevice": LoraDevice,
    "LoraGateway": LoraGateway,
    "LoraNetworkSet": LoraNetworkSet,
    "MFAAuthenticationRequest": MFAAuthenticationRequest,
    "MFAIssueRevokingTokenRequest": MFAIssueRevokingTokenRequest,
    "MFARevokeRequest": MFARevokeRequest,
    "MFARevokingTokenVerifyRequest": MFARevokingTokenVerifyRequest,
    "MFAStatusOfUseResponse": MFAStatusOfUseResponse,
    "ModelError": ModelError,
    "MonthlyBill": MonthlyBill,
    "NapterAuditLogDirection": NapterAuditLogDirection,
    "NapterAuditLogEntry": NapterAuditLogEntry,
    "NapterAuditLogsExportedDataStatsResponse": NapterAuditLogsExportedDataStatsResponse,
    "ObjectInstance": ObjectInstance,
    "OpenGateRequest": OpenGateRequest,
    "OperatorConfigurationModel": OperatorConfigurationModel,
    "OperatorConfigurationModelConfiguration": OperatorConfigurationModelConfiguration,
    "OperatorConfigurationOfEmail": OperatorConfigurationOfEmail,
    "OperatorConfigurationOfSupport": OperatorConfigurationOfSupport,
    "OperatorMFAVerifyingResponse": OperatorMFAVerifyingResponse,
    "OrderItemModel": OrderItemModel,
    "OrderedSubscriber": OrderedSubscriber,
    "PacketCaptureSession": PacketCaptureSession,
    "PacketCaptureSessionRequest": PacketCaptureSessionRequest,
    "PaymentAmount": PaymentAmount,
    "PaymentDescription": PaymentDescription,
    "PaymentStatementResponse": PaymentStatementResponse,
    "Placement": Placement,
    "PortMapping": PortMapping,
    "PortMappingDestination": PortMappingDestination,
    "PortMappingSource": PortMappingSource,
    "PreviousSessionStatus": PreviousSessionStatus,
    "PriceByQuantity": PriceByQuantity,
    "ProductModel": ProductModel,
    "PutIpAddressMapEntryRequest": PutIpAddressMapEntryRequest,
    "ReferenceUrl": ReferenceUrl,
    "RegisterGatePeerRequest": RegisterGatePeerRequest,
    "RegisterLoraDeviceRequest": RegisterLoraDeviceRequest,
    "RegisterOperatorsRequest": RegisterOperatorsRequest,
    "RegisterPayerInformationModel": RegisterPayerInformationModel,
    "RegisterSimRequest": RegisterSimRequest,
    "RegisterSubscribersRequest": RegisterSubscribersRequest,
    "ResourceInitialSetting": ResourceInitialSetting,
    "ResourceInstance": ResourceInstance,
    "ResourceSummary": ResourceSummary,
    "ResourceSummaryItem": ResourceSummaryItem,
    "ResourceSummaryItemDimension": ResourceSummaryItemDimension,
    "ResourceSummaryItemValue": ResourceSummaryItemValue,
    "RoleResponse": RoleResponse,
    "RoutingFilterEntry": RoutingFilterEntry,
    "RuleConfig": RuleConfig,
    "RuleConfigProperty": RuleConfigProperty,
    "SessionEvent": SessionEvent,
    "SessionStatus": SessionStatus,
    "SetDeviceGroupRequest": SetDeviceGroupRequest,
    "SetDeviceObjectModelScopeRequest": SetDeviceObjectModelScopeRequest,
    "SetGroupRequest": SetGroupRequest,
    "SetImeiLockRequest": SetImeiLockRequest,
    "SetNetworkSetRequest": SetNetworkSetRequest,
    "SetOperatorConfigurationNamespaceRequest": SetOperatorConfigurationNamespaceRequest,
    "SetOperatorConfigurationNamespaceRequestConfiguration": SetOperatorConfigurationNamespaceRequestConfiguration,
    "SetSystemNotificationsRequest": SetSystemNotificationsRequest,
    "SetUserPermissionRequest": SetUserPermissionRequest,
    "ShippingAddressModel": ShippingAddressModel,
    "ShippingCostModel": ShippingCostModel,
    "ShippingOptionOfExpeditedShipping": ShippingOptionOfExpeditedShipping,
    "ShippingOptionOfNekopos": ShippingOptionOfNekopos,
    "SigfoxData": SigfoxData,
    "SigfoxDevice": SigfoxDevice,
    "SigfoxRegistrationRequest": SigfoxRegistrationRequest,
    "Sim": Sim,
    "SimCostBreakdown": SimCostBreakdown,
    "SimInitialSetting": SimInitialSetting,
    "SimProfile": SimProfile,
    "SimplifiedSubscriber": SimplifiedSubscriber,
    "SmsForwardingReport": SmsForwardingReport,
    "SmsForwardingRequest": SmsForwardingRequest,
    "SoraCamDevice": SoraCamDevice,
    "SoraCamDeviceConfiguration": SoraCamDeviceConfiguration,
    "SoraCamDeviceLicenseInfo": SoraCamDeviceLicenseInfo,
    "SoraCamEvent": SoraCamEvent,
    "SoraCamEventEventInfo": SoraCamEventEventInfo,
    "SoraCamEventEventInfoAtomEventV1": SoraCamEventEventInfoAtomEventV1,
    "SoraCamExportUsage": SoraCamExportUsage,
    "SoraCamExportUsageLimitOverrideSpecification": SoraCamExportUsageLimitOverrideSpecification,
    "SoraCamImageExportInfo": SoraCamImageExportInfo,
    "SoraCamImageExportSpecification": SoraCamImageExportSpecification,
    "SoraCamImageExportUsage": SoraCamImageExportUsage,
    "SoraCamLicensePackQuantityUpdatingRequest": SoraCamLicensePackQuantityUpdatingRequest,
    "SoraCamLicensePackResponse": SoraCamLicensePackResponse,
    "SoraCamPlayListEntry": SoraCamPlayListEntry,
    "SoraCamStreamingVideo": SoraCamStreamingVideo,
    "SoraCamVideoExportInfo": SoraCamVideoExportInfo,
    "SoraCamVideoExportSpecification": SoraCamVideoExportSpecification,
    "SoraCamVideoExportUsage": SoraCamVideoExportUsage,
    "SoracomBeamStats": SoracomBeamStats,
    "SoracomFunkStats": SoracomFunkStats,
    "SoracomFunnelStats": SoracomFunnelStats,
    "SoracomHarvestStats": SoracomHarvestStats,
    "Soralet": Soralet,
    "SoraletDataSource": SoraletDataSource,
    "SoraletLog": SoraletLog,
    "SoraletVersion": SoraletVersion,
    "Subscriber": Subscriber,
    "SubscriptionContainer": SubscriptionContainer,
    "SubscriptionContainerStatus": SubscriptionContainerStatus,
    "SubscriptionContainerStatusCountryMappingValue": SubscriptionContainerStatusCountryMappingValue,
    "SubscriptionContainerStatusCountryMappingValueMappingRecord": SubscriptionContainerStatusCountryMappingValueMappingRecord,
    "SupportTokenResponse": SupportTokenResponse,
    "SystemNotificationsModel": SystemNotificationsModel,
    "TagUpdateRequest": TagUpdateRequest,
    "TrafficVolumeRanking": TrafficVolumeRanking,
    "UpdateDefaultPermissionsRequest": UpdateDefaultPermissionsRequest,
    "UpdatePasswordRequest": UpdatePasswordRequest,
    "UpdatePermissionRequest": UpdatePermissionRequest,
    "UpdateSpeedClassRequest": UpdateSpeedClassRequest,
    "UpdateUserRequest": UpdateUserRequest,
    "UserDetailResponse": UserDetailResponse,
    "VerifyAddEmailTokenRequest": VerifyAddEmailTokenRequest,
    "VerifyOperatorsRequest": VerifyOperatorsRequest,
    "VerifyPasswordResetTokenRequest": VerifyPasswordResetTokenRequest,
    "VerifySubscriberTransferTokenRequest": VerifySubscriberTransferTokenRequest,
    "VerifySubscriberTransferTokenResponse": VerifySubscriberTransferTokenResponse,
    "VirtualPrivateGateway": VirtualPrivateGateway,
    "VolumeDiscountModel": VolumeDiscountModel,
    "VpcPeeringConnection": VpcPeeringConnection,
    "WriteDeviceResourceRequest": WriteDeviceResourceRequest,
    "WriteDeviceResourceRequestValue": WriteDeviceResourceRequestValue,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }            
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
