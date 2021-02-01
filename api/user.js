import { post } from '../core/index.js';

export const login = (username, password) => {
  let xml = '';
  xml += `<Username>${username}</Username>`;
  xml += `<Password>${password}</Password>`;
  return post('api/user/login', xml);
};

// http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/user/state-login&_=1612174180170
// which_ajax=api/user/sessionxmldata=<?xml version="1.0" encoding="UTF-8"?><request><keep>1</keep></request>: 
export const session = ({ keep = 1 } = {}) => {
  return post(`api/user/session`, `<keep>${keep}</keep>`);
};