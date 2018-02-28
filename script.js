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

function getCurrentDay() {
    var d = new Date();
	d = d.getDay();

    if(d==0){
    	d = "Sunday";
    } else if(d==1){
    	d = "Monday";
    } else if(d==2){
    	d = "Tuesday";
    } else if(d==3){
    	d = "Wednesday";
    } else if(d==4){
    	d = "Thursday";
    } else if(d==5){
    	d = "Friday";
    } else if(d==5){
    	d = "Saturday";
    } 

    return d;
}

function getCurrentMonth() {
    var d = new Date();
	d = d.getMonth();

    if(d==0){
    	d = "January";
    } else if(d==1){
    	d = "February";
    } else if(d==2){
    	d = "March";
    } else if(d==3){
    	d = "April";
    } else if(d==4){
    	d = "May";
    } else if(d==5){
    	d = "June";
    } else if(d==6){
    	d = "July";
    } else if(d==7){
    	d = "August";
    } else if(d==8){
    	d = "September";
    } else if(d==9){
    	d = "October";
    } else if(d==10){
    	d = "November";
    } else if(d==11){
    	d = "December";
    }

    return d;
}

function getCurrentYear() {
    var d = new Date();
	d = d.getFullYear();
	return d;
}

function getFullDate() {
	var date = new Date();
    var date = getCurrentDay() + " " + getCurrentMonth() + " " + date.getDate() + ", " + getCurrentYear()

    return date;
}
