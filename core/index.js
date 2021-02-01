import http from 'http';
import xml2js from 'xml2js';

const request = (method, url, payload, headers) => {
  return new Promise((resolve, reject) => {
    const req = http.request(url, {
      method,
      headers,
    }, resolve);
    req.once('error', reject);
    req.end(payload);
  });
};

const gateway = '192.168.0.1';
const endpoint = `http://${gateway}/cgi-bin/plmWebSrvGetInfo.cgi`;

const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

const formatResponse = response => {
  return Promise
    .resolve(response)
    .then(readStream)
    .then(res => res.toString())
    .then(xml => xml2js.parseStringPromise(xml))
    .then(res => res.response)
    .then(res => {
      if (typeof res === 'object') return flatten(res);
      return res;
    });
};

export const flatten = data =>
  Object.keys(data).reduce((item, key) => {
    const value = data[key];
    item[key] = Array.isArray(value) && value.length === 1 ? value[0] : value;
    return item;
  }, {})

export const get = which_ajax => {
  return request('get', `${endpoint}?which_ajax=${which_ajax}`).then(formatResponse);
};

export const post = (which_ajax, data) => {
  return request('post', endpoint, `which_ajax=${which_ajax}xmldata=<?xml version="1.0" encoding="UTF-8"?><request>${data}</request>:`).then(formatResponse);
};

export const leftpad = (str, width, char = '0') => {
  str = str.toString();
  while (str.length < width)
    str = char + str;
  return str;
};

export const format = (pattern, date = new Date()) => {
  const _year = date.getYear();
  const _fullYear = date.getFullYear();
  const _month = date.getMonth() + 1;
  const _date = date.getDate();
  const _hours = date.getHours();
  const _minutes = date.getMinutes();
  const _seconds = date.getSeconds();
  return pattern.replace(/{(\w+)}/g, (_, name) => ({
    // year
    yy: _year,
    yyyy: _fullYear,
    // month
    M: _month,
    MM: leftpad(_month, 2),
    // date
    d: _date,
    dd: leftpad(_date, 2),
    // hours
    h: _hours % 12,
    hh: leftpad(_hours, 2),
    // minutes
    m: _minutes,
    mm: leftpad(_minutes, 2),
    // seconds
    s: _seconds,
    ss: leftpad(_seconds, 2),
  })[name] || `{${name}}`);
};
