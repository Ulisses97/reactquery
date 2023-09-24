export default function formatDate(date: string){
  const dataObj = new Date(date);

  const day = dataObj.getDate().toString().padStart(2, '0');
  const month = (dataObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dataObj.getFullYear();

  return `${day}/${month}/${year}`
}
