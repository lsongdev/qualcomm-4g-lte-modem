import { get } from "../core";

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/pin/status&_=1612174191002
export const status = () => {
  return get(`api/pin/status`);
};