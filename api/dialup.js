import { get } from '../core/index.js';

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/dialup/mobile-dataswitch&_=1612157146565
// <?xml version="1.0" encoding="UTF-8"?>
// <response>
// <dataswitch>1</dataswitch>
// </response>
export const dataswitch = () => {
  return get('api/dialup/mobile-dataswitch');
};

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/dialup/profiles&_=1612157163938
// <?xml version="1.0" encoding="UTF-8"?>
// <response>
// <CurrentProfile>1</CurrentProfile>
// <Profiles>
// <Profile>
// <Index>1</Index>
// <IsValid>1</IsValid>
// <Name>ChinaUnicom</Name>
// <ApnIsStatic>1</ApnIsStatic>
// <ApnName>3gnet</ApnName>
// <DialupNum></DialupNum>
// <Username></Username>
// <Password></Password>
// <AuthMode>4</AuthMode>
// <IpIsStatic>0</IpIsStatic>
// <IpAddress/>
// <Ipv6Address/>
// <DnsIsStatic>0</DnsIsStatic>
// <PrimaryDns/>
// <SecondaryDns/>
// <PrimaryIpv6Dns/>
// <SecondaryIpv6Dns/>
// <ReadOnly>2</ReadOnly>
// <NetMode>3</NetMode>
// <Connmode>3</Connmode>
// </Profile>
// </Profiles>
// </response>
export const profiles = () => {
  return get('api/dialup/profiles');
};


