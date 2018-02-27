function getESTHours() {
    var d = new Date();
	d = d.getHours();

    if(d==13){
    	d = 1;
    } else if(d==14){
    	d = 2;
    } else if(d==15){
    	d = 3;
    } else if(d==16){
    	d = 4;
    } else if(d==17){
    	d = 5;
    } else if(d==18){
    	d = 6;
    } else if(d==19){
    	d = 7;
    } else if(d==20){
    	d = 8;
    } else if(d==21){
    	d = 9;
    } else if(d==22){
    	d = 10;
    } else if(d==23){
    	d = 11;
    } else if(d==24){
    	d = 12;
    }

    return d;
}