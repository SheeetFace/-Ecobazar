
type SubFilter =(filterCategory:string[],contentCategory:string)=>boolean

export const subFilterCategoryValue:SubFilter =(filterCategory,contentCategory)=>{
  if(filterCategory.length > 0 && !filterCategory.includes(contentCategory.toLowerCase())){
    return false;
  }
  return true;
}
