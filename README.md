# "Configure Orbit" Action for GitHub Actions

This GitHub action configure SORACOM Orbit.

## Usage

Here's an example workflow that uses the action:

```yaml
jobs:
  build-and-test:
        /* build optimized wasm file */
        /* and upload it as an artifact */
      - name: upload assets
        uses: actions/upload-artifact@v2
        with:
          name: soracom-orbit
          path: build/soralet-optimized.wasm
  deploy:
    runs-on: ubuntu-latest
    needs: build-and-test
    steps:
      - name: download artifact
        uses: actions/download-artifact@v2
        with:
          name: soracom-orbit
      - name: deploy
        uses: kenichiro-kimura/action-soracom-upload-soralet@1.2.0
        with:
          soracom_auth_key: ${{ secrets.AUTH_KEY }}
          soracom_auth_key_id: ${{ secrets.AUTH_KEY_ID}}
          soracom_coverage: jp
          soracom_soralet_id: sample-soralet
          soracom_soralet_filename: soralet-optimized.wasm
          soracom_delete_old_soralet: true
      - name: update orbit configuration
        uses: kenichiro-kimura/action-soracom-configure-orbit@1.0.0
        with:
          soracom_auth_key: ${{ secrets.AUTH_KEY }}
          soracom_auth_key_id: ${{ secrets.AUTH_KEY_ID}}
          soracom_coverage: ${{ env.COVERAGE }}
          soracom_soralet_code_srn: ${{ steps.deploy.outputs.soralet_srn }}
          soracom_soralet_direction: uplink
          soracom_group_id: ${{ secrets.SORACOM_GROUP_ID }}
```

See also:
- https://github.com/kenichiro-kimura/soracom-orbit-assemblyscript-with-github
- https://github.com/kenichiro-kimura/action-soracom-upload-soralet

## Inputs

### `soracom_auth_key`[required]

Auth key to access SORACOM platform. Set it as a secret.

### `soracom_auth_key_id`[required]

Auth key id to access SORACOM platform. Set it as a secret.

### `soracom_coverage`[optional]

Coverage of SORACOM platform. Default is `jp`.

### `soracom_soralet_code_srn`[required]

SRN of Soralet.

### `soracom_soralet_content_type`[optional]

`contentType` parameter of Orbit configuration. Default is `application/json`.

### `soracom_soralet_direction`[required]

`direction` parameter of Orbit configuration. "uplink" or "downlink" or "uplink,downlink".

### `soracom_soralet_enabled`

`enabled` parameter of Orbit configuration. Default is `false`.

### `soracom_soralet_use_location`

`useLocation` parameter of Orbit configuration. Default is `false`.

### `soracom_soralet_use_metadata`

`useMetadata` parameter of Orbit configuration. Default is `false`.

### Outputs

### `result`

Result of configure Orbit like below:

```json
Group {
  configuration: {
    SoracomOrbit: {
      codeSrn: 'srn:soracom:xxxxxxxxxxx:jp:Soralet:xxxxxxxxxxx/xx',
      useLocation: 'false',
      contentType: 'application/json',
      useMetadata: 'false',
      enabled: 'false',
      direction: '["uplink"]'
    }
  },
  createdTime: 1606983757748,
  groupId: 'xxxxxxxxxxxx',
  lastModifiedTime: xxxxxxxxxxx,
  operatorId: 'OPxxxxxxxxxxxx',
}

```
