export const formatDate = () => {
  let date = new Date();

  let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];

  let hour = date.getHours();
  let meridian = hour > 12 ? 'AM' : hour === 0 ? 'AM' : 'PM';
  hour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;

  let minute = date.getMinutes().toString().padStart(2, '0');


  return `${day}, ${hour}:${minute} ${meridian}`;
}