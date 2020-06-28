

var numsquares=6;
var colors = generateRandomColors(numsquares);

var squares =document.querySelectorAll(".square");
var pickedColor=pickColor();
var colordisplay=document.getElementById("colorDisplay");
colordisplay.textContent = pickedColor;
var messageDisplay=document.getElementById("messagedisplay");
//messageDisplay.textContent= pickedColor;
var h1=document.querySelector("h1");

var resetButton =document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	//generate new colors
	reset();
});

//var easybtn=document.querySelector("#easy");
//var hardbtn=document.querySelector("#hard");

var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){

//copy pasted code
modeButtons[i].addEventListener("click",function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	console.log(this.textContent);
	this.textContent===" easy " ? numsquares=3: numsquares=6;
	reset();
})





}


function reset(){
		console.log(numsquares);
	colors=generateRandomColors(numsquares);
	pickedColor=pickColor();
	h1.style.background= "steelblue";
	colordisplay.textContent=pickedColor;
	messagedisplay.textContent="";
	this.textContent="New Colors";
	for( var i=0; i<squares.length;i++){
		if(colors[i]){
	squares[i].style.backgroundColor=colors[i];
	squares[i].style.display="block";
	}
	else{
		squares[i].style.display="none";
	}

}



}


// easybtn.addEventListener("click",function(){

// 	numsquares=3;
// 	easybtn.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	colors=generateRandomColors(numsquares);
// 	pickedColor=pickColor();
// 	colordisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];

// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}

// })



// hardbtn.addEventListener("click",function(){
// 	numsquares=6;

// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	colors=generateRandomColors(numsquares);
// 	console.log("ssss"+numsquares);
// 	pickedColor=pickColor();
// 	colordisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display="block";

// 		}
// 		}


// })

for( var i=0; i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];


	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor)
			{//alert("correct");
			console.log("correct");
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			resetButton.textContent="Play Again?";
			h1.style.background= pickedColor;
	}
		else
			{this.style.background= "#232323";
			console.log("Wrong!!");
			messageDisplay.textContent="Try Again";
	}

	})
}

function changeColors(color){

	for(var i=0;i<colors.length;i++){
		squares[i].style.background = color;
	}

	}

function pickColor() {
	var random =Math.floor(Math.random()*colors.length );
	
	console.log(random+"heyy");
	return (colors[random]);
}

function generateRandomColors(num){

	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomColor())
	}
	return arr;
}


function randomColor(){

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
 

}