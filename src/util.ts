export function getDateTime(): string {
  const dateTime = new Date();
  const time = dateTime.toTimeString().split(" ")[0].split(":");

  return `${dateTime.getFullYear()}년 ${
    dateTime.getMonth() + 1
  }월 ${dateTime.getDate()}일 ${time[0]}시 ${time[1]}분 ${time[2]}초`;
}
