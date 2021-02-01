import { get } from '../core/index.js';

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/device/information&_=1612157204763

// <?xml version="1.0" encoding="UTF-8"?>
// <response>
// <Sku>LD825</Sku>
// <DeviceName></DeviceName>
// <SerialNumber></SerialNumber>
// <Imei>861195037774235</Imei>
// <Imsi>460011902008186</Imsi>
// <Iccid></Iccid>
// <Msisdn>+8613021908910</Msisdn>
// <HardwareVersion>LD825-TS_V1.0</HardwareVersion>
// <SoftwareVersion>LD825_V1.0_20180508</SoftwareVersion>
// <WebUIVersion></WebUIVersion>
// <MacAddress1>00:03:7F:3A:D6:39</MacAddress1>
// <MacAddress2></MacAddress2>
// <ProductFamily></ProductFamily>
// <Battery>0%</Battery>
// <Uptime>3589s</Uptime>
// <Classify>mobile-wifi</Classify>
// </response>

export const information = () => {
  return get('api/device/information');
};

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/device/basic_information&_=1612174188898

export const basic_information = () => {
  return get(`api/device/basic_information`);
};