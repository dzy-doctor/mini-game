
let field = document.querySelector('.wrap');
let box = document.querySelector('.box');
let start = document.querySelector('.btn');
let colorBox = ['#eb3b0f', '#eba60f', '#47eb0f', '#0febe5', '#0f13eb', '#940feb', '#eb0fea', '#eb0f47'];


start.addEventListener('click', function(){
	box.style.display = 'block';
	start.style.display = 'none';
})

 
	field.addEventListener('click', function(event){
         
		if(event.target.className ==='box'){

			function getRandomIntInclusive(min, max) {
  				min = Math.ceil(min);
  				max = Math.floor(max);
  				return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются

}
		}
				
				let a = getRandomIntInclusive(40, 80);
				let ind = getRandomIntInclusive(0, 7);

				box.style.width =  a + 'px';
 				box.style.height =  a + 'px';
 				box.style.backgroundColor = colorBox[ind];
 				box.style.left = getRandomIntInclusive(10, 300) + 'px';
 				box.style.top = getRandomIntInclusive(10, 200)+ 'px';

	})















