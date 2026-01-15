class carousel{
    constructor(c_name){
        this.idx=0;
        this.c_name=c_name;
        this.slides = document.getElementsByClassName(c_name);
        for(let i=1;i<this.slides.length;i++){
            this.slides[i].style.display='none';
        }
        console.log(this.slides);
        setTimeout(this.scroll,100,this,this.idx,this.slides);
        // this.scroll();
    }

    scroll(idx,slides){
        console.log(this.constructor.idx);
        slides[idx].style.display='none';
        idx=(idx+1)%slides.length;
        slides[idx].style.display='block';
        console.log('r');
        setTimeout(scroll,3000,idx,slides);
    }
}