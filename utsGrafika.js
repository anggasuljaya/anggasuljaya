var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

//Membuat Segitiga 
c.beginPath();
c.moveTo(225, 50); 
c.lineTo(50, 200); 
c.lineTo(300, 200);
c.closePath();
c.strokeStyle = 'deeppink';
c.stroke();

//Membuat Persegi
c.strokeRect(100,500,150,150); //Persegi dengan garis outline saja

//Membuat Lingkaran
c.beginPath();
c.arc(175, 325, 50, 0, Math.PI * 2);
c.fillStyle = 'blue';
c.fill();

c.font = "30px arial";
c.fillText("Segitiga :", 25, 25); //Teks dengan warna

c.font = "30px arial";
c.fillText("Lingkaran :", 25, 240);

c.font = "30px arial";
c.strokeText("Persegi : ", 25, 450); //Teks dengan garis luar saja

c.font = "30px arial";
c.strokeText("Gambar : ", 25, 700);


function cetakGambar(){
	//mendeklarasikan gambar
	var img = document.getElementById("angga");
	//mencetaknya
	c.drawImage(img, 50, 750);
}

//Mewarnai dengan mouse
var a = 5;
var b = 5;
var rad = 5;
var isClicked = false;

function drawArc(a, b, radius){
	c.beginPath();
	c.arc(a, b, radius, 0, Math.PI * 2);
	c.closePath();
	c.fillStyle = 'gray';
	c.fill();
}

document.onmousedown = function(event){
	isClicked = true;
	if (event.target.nodeName.tolowerCase()==='button'){
		c.clearRect(0, 0, 500, 500);
	}
}

document.onmouseup = function(){
	isClicked = false;
}

canvas.onmousemove = function(event){
	a = event.clientX;
	b = event.clientY;
	if (isClicked) {
		drawArc(a,b,rad);
	}
	else{
		return false;
	}
}