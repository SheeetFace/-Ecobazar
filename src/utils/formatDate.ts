type Format = 'short'|'normal'|'full'
type FormatDate = (date:string|number, format:Format)=>string

export const formatDate: FormatDate = (date, format)=>{

    let newDate:Date;

    if(typeof date === 'number'){
        if(date < 0) return 'Invalid Date';
        newDate = new Date(date);
    }else if(typeof date === 'string') newDate = new Date(date);
    else return 'Invalid Date';
    
    if (isNaN(newDate.getTime())) return 'Invalid Date';

    const day = newDate.getDate().toString().padStart(2, '0');
    const month = newDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = newDate.getFullYear();
    const hours = newDate.getHours().toString().padStart(2, '0');
    const minutes = newDate.getMinutes().toString().padStart(2, '0');

    switch (format) {
        case 'short':
            return `${day} ${month}`;
        case 'normal':
            return `${day} ${month}, ${year}`;
        case 'full':
            return `${day} ${month}, ${year} ${hours}:${minutes}`;
        default:
            return 'Invalid Date';
    }
}
