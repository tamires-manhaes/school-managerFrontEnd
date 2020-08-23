export function formatDate(date){
  
  const newDate = new Date(date);
  const day = newDate.getDay();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  const dateParsed = {
    dia: day,
    mes: month,
    ano: year
  }

  return dateParsed;
}
