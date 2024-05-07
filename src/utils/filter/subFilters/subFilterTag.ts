
type SubFilter =(filterCategory:string,contentCategory:string[])=>boolean

export const subFilterTag:SubFilter = (filterCategory,contentCategory)=>{
    if(filterCategory && contentCategory && !contentCategory.includes(filterCategory)){
        return false;
    }
    return true;
}