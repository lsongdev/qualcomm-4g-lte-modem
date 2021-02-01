import { get, post, flatten, format } from '../core/index.js';

/** 
 * http://192.168.0.1/cgi-bin/plmWebSrvGetInfo.cgi?which_ajax=api/sms/sms-count&_=1612169233182
 */
export const count = () => {
  return get('api/sms/sms-count');
};

// which_ajax=api/sms/sms-listxmldata=<?xml version="1.0" encoding="UTF-8"?><request><PageIndex>1</PageIndex><ReadCount>20</ReadCount><BoxType>1</BoxType><SortType>0</SortType><Ascending>0</Ascending><UnreadPreferred>0</UnreadPreferred></request>: 
// which_ajax=api/sms/sms-listxmldata=<?xml version="1.0" encoding="UTF-8"?><request><PageIndex>1</PageIndex><ReadCount>20</ReadCount><BoxType>2</BoxType><SortType>0</SortType><Ascending>0</Ascending><UnreadPreferred>0</UnreadPreferred></request>: 
export const list = ({ PageIndex = 1, ReadCount = 20, BoxType = 1, SortType = 0, Ascending = 0, UnreadPreferred = 0 } = {}) => {
  let xml = '';
  xml += `<PageIndex>${PageIndex}</PageIndex>`;
  xml += `<ReadCount>${ReadCount}</ReadCount>`;
  xml += `<BoxType>${BoxType}</BoxType>`;
  xml += `<SortType>${SortType}</SortType>`;
  xml += `<Ascending>${Ascending}</Ascending>`;
  xml += `<UnreadPreferred>${UnreadPreferred}</UnreadPreferred>`;
  return post('api/sms/sms-list', xml).then(({ Count, Messages }) => {
    return { Count, Messages: Messages.Message.map(flatten) };
  });
};

// which_ajax=api/sms/send-smsxmldata=<?xml version="1.0" encoding="UTF-8"?><request><Index>-1</Index><Phones><Phone>18510100102</Phone></Phones><Sca></Sca><Content>aaa</Content><Length>3</Length><Reserved>1</Reserved><Date>2021-02-01 18:15:34</Date></request>: 
export const send = (phones, content, { Index = -1, Sca = '', Reserved = 1 } = {}) => {
  if (!Array.isArray(phones)) phones = [phones];
  let xml = '';
  xml += `<Index>${Index}</Index>`;
  xml += `<Phones>`;
  for (const phone of phones) {
    xml += `<Phone>${phone}</Phone>`;
  }
  xml += `</Phones>`;
  xml += `<Sca>${Sca}</Sca>`;
  xml += `<Content>${content}</Content>`;
  xml += `<Length>${content.length}</Length>`;
  xml += `<Reserved>${Reserved}</Reserved>`;
  xml += `<Date>${format('{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}')}</Date>`;
  return post(`api/sms/send-sms`, xml);
};

export const status = () => {
  return get('api/sms/send-status');
};