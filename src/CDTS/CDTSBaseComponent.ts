export default abstract class CDTSBaseComponent{
    targetElementId:string;
    data: any;
    language: string;
    constructor(targetElementId: string, data: any){
        if(targetElementId === undefined || targetElementId === null ){
            throw new TypeError("Must provide a target element id");
        }else{
            this.targetElementId = targetElementId;
        }
        if(data === undefined || targetElementId === null){
            this.data = undefined;
        }else{
            this.data = data;
        }
        if(this.generateHtml === undefined){
            throw new TypeError("Must override method generateHtml");
        }
    }
    
    abstract generateHtml():string;
}