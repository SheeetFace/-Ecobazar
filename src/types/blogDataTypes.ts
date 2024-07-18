type ParagraphItem = {
    type: "paragraph"
    text: string
}
type ImageItem = {
    type: "image"
    images: { src: string; alt: string }[]
}
type HeaderItem = {
    type: "header"
    text: string
}
type ListItem = {
    type: "list"
    textList: { text: string }[]
}
  
export type BlogPostDataItem = ParagraphItem | ImageItem | HeaderItem | ListItem;

export interface BlogDataTypes{
    id:string
    category:string
    owner:string
    commentsCount:string
    title:string
    src:string
    date:string
    tag:string[]
    post:BlogPostDataItem[]
}