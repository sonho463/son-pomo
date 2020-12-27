
const now = new Date();

console.log(now);

const now_msec = now.getTime();
console.log(now_msec);
const now_msec_after_25 = now_msec + 25 * 1000 * 60;
console.log(now_msec_after_25);
const now_after_25 = new Date();
now_after_25.setTime(now_msec_after_25);
console.log(
  now_after_25
)
