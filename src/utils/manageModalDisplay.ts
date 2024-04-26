import type {MutableRefObject,RefObject} from 'react'

type ManageModalDisplayType = (
        isShow:boolean, 
        isFirstOpen:MutableRefObject<boolean>, 
        modalRef:RefObject<HTMLDivElement|null>,
        classShow:string, 
        classHide:string
    )=>void

export const manageModalDisplay:ManageModalDisplayType=(isShow, isFirstOpen, modalRef,classShow, classHide)=>{
    if(modalRef.current){
        if(isShow){
            isFirstOpen.current = true;
            modalRef.current.style.display='block'
            modalRef.current.classList.remove(classHide);
            modalRef.current.classList.add(classShow);
        }else{
            if(isFirstOpen.current){
                modalRef.current.classList.remove(classShow);
                modalRef.current.classList.add(classHide);
            }else{
                modalRef.current.style.display='none'
            }
        }
    }
}