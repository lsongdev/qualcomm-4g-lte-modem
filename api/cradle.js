import { get } from '../core/index.js';

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/cradle/status-info&_=1612157101881

// <?xml version="1.0" encoding="UTF-8"?>
// <response>
// <cradlestatus>0</cradlestatus>
// <connectstatus>902</connectstatus>
// <connectionmode>0</connectionmode>
// <currenttime>0</currenttime>
// <macaddress>F8:01:13:C8:6F:7E</macaddress>
// <ipaddress></ipaddress>
// <netmask></netmask>
// <gateway></gateway>
// <primarydns></primarydns>
// <secondarydns></secondarydns>
// </response>

export const status = () => {
  return get('api/cradle/status-info');
};