import { user, device, monitoring, sms } from '../index.js';

(async () => {

  const res = await user.login("admin", "admin");
  console.log('login', res);

  const info = await device.information();
  console.log(info);

  const status = await monitoring.status();
  console.log(status);

  const count = await sms.count();
  console.log(count);

  const { Count, Messages } = await sms.list();
  console.log('SMS Count:', Count);
  for (const message of Messages) {
    console.log(message);
  }

  const e = await sms.del(['a5', 'a6']);
  console.log(e);

  const d = await sms.send([
    '18510100102',
  ], 'hello world');
  console.log(d);


  const s = await sms.status();
  console.log(s);

})();
