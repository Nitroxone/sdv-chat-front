export function getTimecode(): string {
  const date: Date = new Date();
  const hours: string = date.getHours().toString().length === 1 ? '0' + date.getHours() : '' + date.getHours()
  const minutes: string = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : '' + date.getMinutes();

  return hours + ':' + minutes;
}
