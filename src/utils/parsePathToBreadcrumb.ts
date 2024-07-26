interface BreadcrumbItem{
    name:string
    pathBack:string
}
type Breadcrumb = BreadcrumbItem[]|[]

export const parsePathToBreadcrumb = (str:string):Breadcrumb=>{

    let breadcrumbPaths:Breadcrumb=[]

    const splitFn = (item:string,splitMark:string) => {
        return item.split(splitMark).join(' ')
    }

    if(str){
        if(str==='/') return [{name:'Home',pathBack:'/'}];

        const arrStr=str.split('/');

        breadcrumbPaths = arrStr.map((item)=>{

            let newItem = item;

            if(item.includes('%20')) newItem = splitFn(item,'%20');
            else if(item.includes('-')) newItem = splitFn(item,'-');

            newItem = newItem.charAt(0).toUpperCase() + newItem.slice(1)
            
            return(
                {
                    name:item ? newItem: 'Home',
                    pathBack:`/${item}` 
                }
            )
        })
    }

    return breadcrumbPaths
}