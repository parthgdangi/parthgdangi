function show_projects(){
    var x=document.getElementsByClassName('no-priority');
    // var y=document.getElementsByClassName('all-projects')[0]
    if(x[0].style.display=="none"){
        for(let i = 0; i<x.length;i++){
            x[i].style.display="block";
        }
        this.value="Show Less";
    }
    else{
        for(let i = 0; i<x.length;i++){
            x[i].style.display="none";
        }
        this.value="All Projects"
    }
}

function send_mail(){
    var link="mailto:ramanandrama8@gmail.com"+"?cc=ramanand5998@gmail.com";
    window.location.href=link;
}

function scroll(idx,c_name){
    // console.log(idx)
    slides=document.getElementsByClassName(c_name);
    if(idx==-1){
        for(let i=0;i<slides.length;i++){
            slides[i].style.display='none';
        }
        idx=0;
    }
    slides[idx].style.display='none';
    idx=(idx+1)%slides.length;
    slides[idx].style.display='block';
    
    // console.log('r');
    setTimeout(scroll,2000,idx,c_name);
}