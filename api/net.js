import { get } from "../core/index.js";

/**
 * http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/net/current-plmn&_=1612169123056
 */
export const current_plmn = () => {
  return get(`api/net/current-plmn`)
};