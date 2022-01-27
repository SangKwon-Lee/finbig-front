import dayjs from "dayjs";

export function D_day(date: any) {
  let today = dayjs();
  let expired_at = dayjs(date);
  let result = expired_at.diff(today, "day", true);
  let d_day = Math.floor(result);
  return d_day;
}
