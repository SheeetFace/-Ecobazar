

export const subFilterSearch=(filterSearch:string,sharedTitle:string)=>{

    const lowerCaseSearch = filterSearch.toLowerCase();
    const lowerCaseTitle = sharedTitle.toLowerCase();

    if(!lowerCaseTitle.includes(lowerCaseSearch)) return false;

    return true
}