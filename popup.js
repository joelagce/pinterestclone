


var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    btnAbrirPopup2 = document.getElementById('signup'),		
    btnCerrarPopup = document.getElementById('btn-cerrar-popup')
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');
    overlay = document.getElementById('overlay'),
    overlay2 = document.getElementById('overlay2'),




btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('activo');
	
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('activo');
	
});
btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('activo');
	
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('activo');
	
});