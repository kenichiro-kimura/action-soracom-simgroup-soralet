import * as core from "@actions/core";
import * as soracom from "./soracom";

async function main() {
    const authApi = new soracom.API.AuthApi();
    const groupApi = new soracom.API.GroupApi();
    const authRequest = new soracom.Model.AuthRequest();
    authRequest.authKey = core.getInput("soracom_auth_key", { required: true });
    authRequest.authKeyId = core.getInput("soracom_auth_key_id", { required: true });
    const soraletCodeSrn: string = core.getInput("soracom_soralet_code_srn", { required: true });
    const soraletContentType: string = core.getInput("soracom_soralet_content_type", { required: false }) ? core.getInput("soracom_soralet_content_type", { required: false }) : "application/json";
    const soraletDirectionString: string = core.getInput("soracom_soralet_direction", { required: true });
    const soraletDirection: string[] = soraletDirectionString.split(",");
    const soraletEnabled: boolean = core.getInput("soracom_soralet_enabled", { required: false }) === "true";
    const soraletUseLocation: boolean = core.getInput("soracom_soralet_use_location", { required: false }) === "true";
    const soraletUseMetadata: boolean = core.getInput("soracom_soralet_use_metadata", { required: false }) === "true";
    const groupId: string = core.getInput("soracom_group_id", { required: true });
    const coverage: string = core.getInput("soracom_coverage", { required: false }) ? core.getInput("soracom_coverage", { required: false }) : "jp";
    const endpoint: string = coverage === "g" ? "https://g.api.soracom.io/v1" : "https://api.soracom.io/v1";

    authApi.basePath = endpoint;
    groupApi.basePath = endpoint;

    soraletDirection.forEach((direction) => {
        if (direction !== "uplink" && direction !== "downlink") {
            core.setFailed(`invalid direction: ${direction}`);
            throw new Error(`invalid direction: ${direction}`);
        }
    });

    try {
        const authResult = await authApi.auth(authRequest);
        const apiKey = authResult.body.apiKey ? authResult.body.apiKey : "";
        const apiToken = authResult.body.token ? authResult.body.token : "";

        authApi.setApiKey(soracom.API.AuthApiApiKeys.api_key, apiKey);
        authApi.setApiKey(soracom.API.AuthApiApiKeys.api_token, apiToken);

        groupApi.setApiKey(soracom.API.GroupApiApiKeys.api_key, apiKey);
        groupApi.setApiKey(soracom.API.GroupApiApiKeys.api_token, apiToken);

        const codeSrnRequest = new soracom.Model.GroupConfigurationUpdateRequest();
        codeSrnRequest.key = "codeSrn";
        codeSrnRequest.value = soraletCodeSrn;

        const contentTypeRequest = new soracom.Model.GroupConfigurationUpdateRequest();
        contentTypeRequest.key = "contentType";
        contentTypeRequest.value = soraletContentType;

        const directionRequest = new soracom.Model.GroupConfigurationUpdateRequest();
        directionRequest.key = "direction";
        directionRequest.value = JSON.stringify(soraletDirection);

        const enabledRequest = new soracom.Model.GroupConfigurationUpdateRequest();
        enabledRequest.key = "enabled";
        enabledRequest.value = soraletEnabled ? "true" : "false";

        const useLocationRequest = new soracom.Model.GroupConfigurationUpdateRequest();
        useLocationRequest.key = "useLocation";
        useLocationRequest.value = soraletUseLocation ? "true" : "false";

        const useMetadataRequest = new soracom.Model.GroupConfigurationUpdateRequest();
        useMetadataRequest.key = "useMetadata";
        useMetadataRequest.value = soraletUseMetadata ? "true" : "false";

        const groupConfigurationUpdateRequests: soracom.Model.GroupConfigurationUpdateRequest[] = (
            [
                codeSrnRequest,
                contentTypeRequest,
                directionRequest,
                enabledRequest,
                useLocationRequest,
                useMetadataRequest,
            ]
        );

        const putConfigurationResult = await groupApi.putConfigurationParameters(groupId, "SoracomOrbit", groupConfigurationUpdateRequests);
        console.log(putConfigurationResult.body);
    } catch (error) {
        try {
            await authApi.logout();
        } catch (e) {
            console.error(e);
        }
        let errorMessage: string = "";
        if (typeof error === "string") {
            errorMessage = error;
        } else if (error instanceof soracom.API.HttpError) {
            errorMessage = JSON.stringify(error.body);
        } else if (error instanceof Error) {
            errorMessage = JSON.stringify(error.message);
        }
        core.setFailed(errorMessage);
    }
}

main().catch((error) => {
    let errorMessage: string = "";
    if (typeof error === "string") {
        errorMessage = error;
    } else if (error instanceof soracom.API.HttpError) {
        errorMessage = JSON.stringify(error.body);
    } else if (error instanceof Error) {
        errorMessage = JSON.stringify(error.message);
    }
    core.setFailed(errorMessage);
});
