type Format = 'short'|'normal'

type FormatDate = (dateString:string, format:Format)=>string

export const formatDate:FormatDate=(dateString, format)=>{
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US',{ month: 'short' }).toUpperCase();
    const year = date.getFullYear();

    if(format === 'short') return `${day} ${month}`
    else if(format === 'normal')return `${day} ${month}, ${year}`
    else return dateString
}