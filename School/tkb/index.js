const obj_ar = document.querySelectorAll('div[id="obj"]')

for(let i = 0; i<obj_ar.length; i++){
	var obj = obj_ar[i]

	if(obj.textContent === '-X-'){
		obj.style.color = 'red'
		obj.style.textShadow = '0px 0px 5px red'
	}
	if(obj.textContent === 'T.Dục' || obj.textContent === 'QP-AN'){
		obj.style.color = 'lime'
		obj.style.textShadow = '0px 0px 10px #8eeb7d'
	}
}