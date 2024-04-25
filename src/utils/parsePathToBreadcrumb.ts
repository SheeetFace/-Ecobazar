interface BreadcrumbItem{
    name:string
    pathBack:string
}
type Breadcrumb = BreadcrumbItem[]|[]

export const parsePathToBreadcrumb = (str:string):Breadcrumb=>{

    let breadcrumbPaths:Breadcrumb=[]

    if(str){
        if(str==='/') return [{name:'Home',pathBack:'/'}]

        const arrStr=str.split('/') 

        breadcrumbPaths = arrStr.map((item)=>{

            const newItem = item.includes('%20') ? item.replace('%20',' ') :item

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