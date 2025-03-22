const typed = new Typed('.typed', {
	strings: [
		'<i class="porque">Madre de mis hijos</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Eres evolucionada</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Confío en tí</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Nos gusta la música</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Hablamos de todo</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Eres hermosa</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Me gusta tu piel</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Me gusta besarte</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Quiero estar contigo</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Me gusta abrazarte</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Me conviene</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Me gusta tu calor</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Eres mujer</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Porque Sí</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Sueño contigo</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Te extraño</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Cuento contigo</i>',
		'<i class="porque1">Te amo</i>',
		'<i class="porque">Me importas</i>',
		'<i class="porque2">Me gustas</i>',
		'<i class="porque">Eres interesante</i>',
		'<i class="porque1">Te amo</i>',
		
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});