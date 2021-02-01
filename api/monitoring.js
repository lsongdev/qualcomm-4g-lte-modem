import { get } from '../core/index.js';

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/monitoring/status&_=1612157183728

// <?xml version="1.0" encoding="UTF-8"?>
// <response>
// <ConnectionStatus>901</ConnectionStatus>
// <WifiConnectionStatus></WifiConnectionStatus>
// <SignalStrength></SignalStrength>
// <SignalIcon>4</SignalIcon>
// <CurrentNetworkType>19</CurrentNetworkType>
// <CurrentServiceDomain>3</CurrentServiceDomain>
// <RoamingStatus>0</RoamingStatus>
// <BatteryStatus>1</BatteryStatus>
// <BatteryLevel>0</BatteryLevel>
// <BatteryPercent>100</BatteryPercent>
// <simlockStatus>0</simlockStatus>
// <WanIPAddress>10.37.162.23</WanIPAddress>
// <PrimaryDns></PrimaryDns>
// <SecondaryDns></SecondaryDns>
// <CurrentWifiUser>2</CurrentWifiUser>
// <TotalWifiUser>10</TotalWifiUser>
// <ServiceStatus>2</ServiceStatus>
// <SimStatus>1</SimStatus>
// <WifiStatus>1</WifiStatus>
// <msisdn>15817268888</msisdn>
// <classify>mobile-wifi</classify>
// </response>

export const status = () => {
  return get('api/monitoring/status');
};

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/monitoring/traffic-statistics&_=1612174099915
export const traffic_statistics = () => {
  return get(`api/monitoring/traffic-statistics`);
};

// <?xml version="1.0" encoding="UTF-8"?>
// <response>
// <CurrentConnectTime>179</CurrentConnectTime>
// <CurrentUpload>311208</CurrentUpload>
// <CurrentDownload>348945</CurrentDownload>
// <CurrentDownloadRate>0</CurrentDownloadRate>
// <CurrentUploadRate>0</CurrentUploadRate>
// <TotalUpload>256345036</TotalUpload>
// <TotalDownload>1271591147</TotalDownload>
// <TotalConnectTime>39187</TotalConnectTime>
// </response>