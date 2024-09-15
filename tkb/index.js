const obj_ar = document.querySelectorAll('div[id="obj"]')
const time_ar = document.querySelectorAll('div[id="time-item"]')

const tag_ = document.getElementById('object')
var objStyle = tag_.style

var isSetOnTag = false

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function set(obj){
	var text = obj.textContent
	objStyle.opacity = '1'
	if(text === '-X-'){
		tag_.innerHTML = 'Nghỉ'
		objStyle.color = 'red'
		objStyle.textShadow = '0px 0px 5px black'
	}else{
		if(obj.id !== 'X'){
			if(obj.id === 'TD'){
				objStyle.color = 'lime'
				objStyle.textShadow = '0px 0px 5px #8eeb7d'
			}else{
				objStyle.color = '#EEEEEE'
				objStyle.textShadow = '0px 0px 5px #EEEEEE'				
			}
		}
		tag_.innerHTML = text
	}
}

function reset(obj){
	objStyle.opacity = '0'
	setTimeout(()=>{
		tag_.innerHTML = 'None'
	}, 500)
}

for(let i = 0; i<obj_ar.length; i++){
	var obj = obj_ar[i]

	if(obj.textContent === '-X-'){
		obj.style.color = 'red'
		obj.style.textShadow = '0px 0px 5px red'
		obj.id = 'X'
	}
	if(obj.textContent === 'T.Dục' || obj.textContent === 'QP-AN'){
		obj.id = 'TD'
	}

	obj.addEventListener('click', function(){
		isSetOnTag = true
		var subj = obj_ar[i]
		set(subj)
	})
}

console.log(time_ar)
for(let i = 0; i<time_ar.length; i++){
	var obj = time_ar[i]

	obj.addEventListener('mouseover', function(){
		var key = time_ar[i].childNodes[0]
		var keyStyle = key.style

		keyStyle.color = '#EEEEEE'
		keyStyle.textShadow = '0px 0px 5px #EEEEEE'

	})
	obj.addEventListener('mouseout', function(){
		var key = time_ar[i].childNodes[0]
		var keyStyle = key.style

		keyStyle.textShadow = 'none'
		keyStyle.color = 'black'
	})
}