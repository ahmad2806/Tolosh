import { FileModel } from './file.model';

export class ListPageObject {
    constructor(
        public pageName: string, 
        public filesList: FileModel[],
        public m_func: Function, 
        public img_src: string 
    ) {}
    
}