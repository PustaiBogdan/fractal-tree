export default class Complex{
    constructor(val1,val2,val3,val4,val5,limitaBucConstruite,grosimea,bifat,culoare1,culoare2){
        this.val1=val1;
        this.val2=val2;
        this.val3=val3;
        this.val4=val4;
        this.val5=val5;
        this.grosimea=grosimea;
        this.bifat=bifat;
        this.culoare1=culoare1;
        this.culoare2=culoare2;
        this.limitaBucConstruite=limitaBucConstruite;
    }


}
let clasa= new Complex(Math.PI , 0.01 ,Math.PI/2, 0.01,0.33,9,1,false,'#800000','#008000');//val default

export {clasa}  

