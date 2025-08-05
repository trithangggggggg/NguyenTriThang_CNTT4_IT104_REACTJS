export function  formatDate(dateString){
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const fomatDay = day < 10 ? '0' + day : day;
    const fomatMonth = month < 10 ? '0' + month : month;

    return `${fomatDay}/${fomatMonth}/${year}`;

}
