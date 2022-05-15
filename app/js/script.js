let passion = document.getElementById("passion");
passion.addEventListener("mouseover", function( e ) {
	e.stopPropagation();
	e = e || window.event;
	e.preventDefault;
	var target = e.target, text = target.textContent || target.innerText; 
	console.log(e)
	if( target.classList.contains('active') && !target.classList.contains('default')){
		target.classList.remove('active')
	}else{
		target.classList.add('active');
	}
	if(!target.classList.contains('default')){
		document.querySelector('#passion .default').classList.remove('active');
	}
  }, false);
passion.addEventListener("mouseout", function( e ) {
	e = e || window.event;
	e.stopPropagation();
	e.preventDefault;
	var target = e.target, text = target.textContent || target.innerText; 
	if( target.classList.contains('active') && !target.classList.contains('default')){
		target.classList.remove('active')
	}else{
		target.classList.add('active');
	}
	if(!target.classList.contains('default')){
		document.querySelector('#passion .default').classList.add('active');
	}
  }, false);