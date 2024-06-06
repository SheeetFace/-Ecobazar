

export const formatAuthError =(error:string):string=>{

    if(!error.includes('/')) return error;
    
    const [type, code] = error.split('/');
    return `Error type: ${type} (${code.toLocaleUpperCase()})`;
}