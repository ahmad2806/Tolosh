import { SignPdfModel } from './SignPdfModel';

export class ListPageObject {
    constructor(
        public pageName: string, 
        public filesList: SignPdfModel[],
        public m_func: Function, 
        public img_src: string 
    ) {}
    
}