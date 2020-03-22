var ocupados = [
            "A0",
            "D4"
          ];




          
$(document).tooltip();
$(document).ready(function(){

  //console.log("jQuery y la web cargados");


  /*libros.forEach((item, index) =>{
    if( )
  };*/
  //post forEach
  libros.forEach((item, index) =>{
      var libro = `
      <article class="libro">
        <img src="Caratulas/${item.id}.jpg" height="200px">
        <h2>${item.nombre}</h2>
        <br><p>
        Autor: ${item.autor}<br>
        ID: ${item.id}<br>
        Genero: ${item.genero}<br>
        Editorial: ${item.editorial}<br>
        Paginas: ${item.paginas}<br>
        <div title="${item.sinopsis}">Sinopsis: ... </div>
        </p>
      </article>
      `;
    var disponibilidad = item.disponible;
    if(disponibilidad === true){
      $('#libros').append(libro);
    }else{
      console.log(item.nombre+"  no disponible");
    };

  });

});

//libros json
var libros = [
  {
    "id": "A0",
    "nombre": "",
    "autor": "",
    "genero": "",
    "editorial": "",
    "paginas": "",
    "sinopsis": "",
    "pertenece a": "",
    "disponible": false
  },//plantilla
  {
    "id":  "A1",
    "nombre": "La lluvia sabe por qué",
    "autor": "María Fernanda Heredia",
    "genero": "Amistad, Novela juvenil",
    "editorial": "Norma",
    "paginas": 234,
    "sinopsis": "Durante una inocente reunion, Lucia se convierte en el blanco de una broma pesada: sus amigas la fotografian con celular mientras ella se cambia de ropa y alguien presiona entre risas la tecla Enviar. La imagen corre como la polvora y el escandalo estalla en la comunidad escolar.",
    "pertenece a": "Cristina",
    "disponible": true,
  },//La lluvia sabe por que
  {
    "id":  "A2",
    "nombre": "Amansando el tigre",
    "autor": "Tony Anthony",
    "genero": "Libro cristiano",
    "editorial": "CLC",
    "paginas": 270,
    "sinopsis": "Este rápido, preciso y escalofriante relato narra la conmovedora historia de un tricampeon mundial de Kung Fu. Con una fascinante visión de las tradicionales artes marciales de China, documenta la criaza abusiva y la educacion que convirtieron un niño tierno de cuatro años, en un rudo asesino profesional que finalmente es confinado a una carcel en Chipre, donde llega a tocar fondo, Este es un testimonio complejo y fascinante que pondra en evidencia el amor y la misericordia de Dios para transformar a los seres humanos.",
    "pertenece a": "Luna",
    "disponible": true
  },//Amansando el tigre
  {
    "id":  "A3",
    "nombre": "El joven Moriarty y la planta carnívora",
    "autor": "Sofia Rhei",
    "genero": "Novela infantil",
    "editorial": "Norma",
    "paginas": 207,
    "sinopsis": "James Moriarty inicia una nueva aventura en compañia de su hermana Arabella. Es esta ocasion unas vacaciones en Londres, una ciudad llena de maravillas y misterios destinada para un joven brillante y astuto que no deja de buscarse problemas. Al llegar a lo que se supone iban a ser unas vacaciones tranquilas, se enfrente con su hermana en una particular competencia. En esta desafiante aventura se encontraran con situaciones extraordinariass y misteriosas: un accidente en el Museo Británico, un niño que toca el violin sospechosamente bien, una araña gigante, un edificio con un siniestro pasado, ¡la planta carnivora mas grande del mundo! y una selva tropical en pleno Londres en la que nadie esta a salvo.",
    "pertenece a": "Luna",
    "disponible": true
  },//El joven Moriarty y la planta carnívora
  {
    "id":  "A4",
    "nombre": "El clan de la calle Veracruz",
    "autor": "Albeiro Echavarria",
    "genero": "Cuentos juveniles",
    "editorial": "Norma",
    "paginas": 283,
    "sinopsis": "Quelin un niño indigena, es secuestrado por el malvado Tastorino, quien asesino a su familia para quedarse con sus tierras en el Amazonas y asi seguir ampliando su emporio maderero. Un grupo de gatos, El clan de la calle Veracruz, conoce bien la maldad de Tastorino y decide resccatar a Quelin. Para ello es necesario que encuentren una gata kattlin, el unico animal capaz de lograr contacto con los seres protectores de la naturaleza que les podran ayudar a resccatar el niño y a detener los perversos planes de Tastorino",
    "pertenece a": "Luna",
    "disponible": true
  },//El clan de la calle Veracruz
  {
    "id":  "A5",
    "nombre": "Las mil y una noches",
    "autor": "Anonimo",
    "genero": "Cuento de hadas, Ficcion",
    "editorial": "Planetalector",
    "paginas": 190,
    "sinopsis": "Esta es la historia del rey Schariar y Scherezada, de las mil y unas noches en que la imaginación les gana la batala al rencor y a la venganza. Genios, reyes y princesas, objetos magicos, ciudades misteriosas, grandes aventureros, pescadores y mercaderes, palacios increibles, ladrones y vasallos, todos se dan cita en estos cuentos de origen arabe y de autor anonimo, que dieron lugar a innumerables versiones.",
    "pertenece a": "Luna",
    "disponible": true
  },//Las mil y una noches
  {
    "id":  "A6",
    "nombre": "Oro salvaje",
    "autor": "Janina Perez de la Iglesia",
    "genero": "Ficcion",
    "editorial": "Norma",
    "paginas": 232,
    "sinopsis": "La fiebre del oro se ha apoderador de toda California, y el pueblo de Resplandor no es la excepción: todos lo arriesgan todo por obtener riqueza, pero la epidemia de colera se expande sin limite. Billy Cañon llega al lugar en busca del legendario oro rojo del Capital Cook, que lo acercara al corazon de su amada, pero que tambien parece ser mortal. Para encontrarlo, partira en la aventura de su vida acompañado de sus nuevos amigos Cody, Rebeca y Tai Chi Sun, quienes veran sus vidas puestas patas arriba una y otra vez",
    "pertenece a": "",
    "disponible": true
  },//Oro salvaje
  {
    "id":  "A7",
    "nombre": "El Lazarillo de Tormes",
    "autor": "Anónimo",
    "genero": "Novela picaresca",
    "editorial": "Atenea",
    "paginas": 96,
    "sinopsis": "Es un esbozo irónico y despiadado de la sociedad del momento, de la que se muestran sus vicios y actitudes hipócritas, sobre todo las de los clérigos y religiosos. Hay diferentes hipótesis sobre su autoría. Probablemente el autor fue simpatizante de las ideas erasmistas. Esto motivó que la inquisición la prohibiera y que, mas tarde, permitiera su publicación, una vez expurgada. La obra no volvio a ser publicada íntegramente hasta el siglo XIX d.c..",
    "pertenece a": "Mayra",
    "disponible": true
  },//El Lazarillo de Tormes
  {
    "id":  "A8",
    "nombre": "El día del odio",
    "autor": "J.A. Osorio Lizarazo",
    "genero": "",
    "editorial": "Santillana",
    "paginas": 280,
    "sinopsis": "Como ha sucedido con no pocos escritores a quienes (el tiempo perdona cuando escriben bien), la obra de Osorio Lizarazo se rescata a si misma, por su propio valor, de un olvido absurdamente basado en razones extraliterarias. Escritor de oficio y disciplina, Osorio Lizarazo constituye una figura sin cuyosss defectos y cualidades queda incompleto el cuadro verdadero de la narrativa colombiana. Sus temas, siempre de índole social, se desenvuelven algunas veces en ese medio poco transitado por los novelistass latinoamericanos: el urbano. En esta ocasión el escenario es Bogotá, en cuyo pueblo van incubándose los hechos del 9 de abril de 1948, día en que se resuelven en estallido de violencia los sufrimientos acumulados durante tantos años.",
    "pertenece a": "Mayra",
    "disponible": true
  },//El día del odio
  {
    "id":  "A9",
    "nombre": "Aventuras de la Dama Infanta",
    "autor": "José Martínez Sánchez",
    "genero": "",
    "editorial": "Tiempo de leer",
    "paginas": 96,
    "sinopsis": "Como en los viejos libros de aventuras, asediada por duendes y apariciones, la bella Juana (una joven lectora de cuentos infantiles) emprende un viaje imaginario al valle de las petunias, donde deberá enfrentarse a los temores de su infancia, encarnados en ciertos mitos andinos que hoy recorren las mejores historias de nuestra geografía. El Carro Fantasma, La Tarasca, El Mohan y la Madremonte, serán superados por la Dama Infanta con la ayuda del Mago Lector. Más que un texto sobre tradición oral, (Aventuras de la Dama Infanta) es una narración fantastica sobre el influjo de la lectura en los años maravillosos de la adolescencia.",
    "pertenece a": "Mayra",
    "disponible": true
  },//Aventuras de la Dama Infanta
  {
    "id":  "B1",
    "nombre": "Las travesuras del pícaro tío conejo",
    "autor": "Sonia Nadhezda Truque",
    "genero": "",
    "editorial": "Tiempo de leer",
    "paginas": 120,
    "sinopsis": "Tío conejo, Guatín o patecera son los nombres con los que se conoce en el territorio nacional: Es un personaje popular, a veces astuto, otras cándido, que vence o es vencido y sus historias hacen las delicias de los niños, quienes se asombran de ver cómo ese pequeño animalito se enfrenta a otros mucho más fuertes y grandes y siempre sale airoso.",
    "pertenece a": "Mayra",
    "disponible": true
  },//Las travesuras del pícaro tío conejo
  {
    "id":  "B2",
    "nombre": "Inglés practico",
    "autor": "KingKolor",
    "genero": "Educativo",
    "editorial": "Educativa KingKolor",
    "paginas": 108,
    "sinopsis": "Usted encontrará: el alfabeto y los numeros, dias y meses, estaciones, colores, familia, figuras geometricas, el cuerpo humano, sustantivos, articulos, adjetivos, pronombres, verbos, preguntas, preposiciones, adverbios, cuantificadores, comparativos, superlativos y mucho mas todo ilustrado por la casa editorial KingKolar.",
    "pertenece a": "Mayra",
    "disponible": true
  },//Inglés practico
  {
    "id":  "B3",
    "nombre": "Un genio de la narración",
    "autor": "Clive Staples Lewis",
    "genero": "Narrativo",
    "editorial": "Jucum",
    "paginas": 191,
    "sinopsis": "En un periodo marcado por dos guerras mundiales, Lewis abordó valientemente cuestiones acerca de la vida y la fe.Convencido de que la vida de Jesus es el relato autentico y verdadero y conocido por su busqueda de la verdad con honestidad, claridad e imaginacion, el hombre que un día fuera ateo se convertiria en uno de los cristianos mas influyentes del ciclo veinte.",
    "pertenece a": "Luna",
    "disponible": true
  },//Un genio de la narración
  {
    "id":  "B5",
    "nombre": "En medio de la maldad",
    "autor": "Dietrich Bonhoeffer",
    "genero": "Narrativo",
    "editorial": "Jucum",
    "paginas": 216,
    "sinopsis": "Mientras Dientrich cantaba el himno nacional aleman, pensó en la devastación que Hitler y los nazis estaban causando en Europa. Estaba dispuestoa hacer todo lo que pudiera por detenerles, aunque ello significara apretar el gatillo contra el mismo fúhrer. Acusado de ser un agitador, Dietrich perseveró intrepidamente en medio de la maldad.El legado que nos dejó la historia de su vida sigue vigente:¨Callarse es hablar.No hacer nada es actuar¨",
    "pertenece a": "Marly Luna",
    "disponible": true
  },//En medio de la maldad
  {
    "id":  "B6",
    "nombre": "Las cronicas de narnia. El sobrino del mago",
    "autor": "Clive Staples Lewis",
    "genero": "Novela de fantasía",
    "editorial": "Planeta Colombia s.a",
    "paginas": 256,
    "sinopsis": "Narnia... un lugar por el que deambulan Bestias Parlantes.....donde aguarda una bruja.... donde un nuevo mundo está a punto de nacer.Dos amigos, victimas del poder de unos anillos mágicos,son arrojados a otro mundo en el una malvada hechicera intenta convertirlos en sus esclavos.Pero entonces aparece Aslan y con su canción va hilando el tejido de un nuevo mundo que  recibirá el nombre de Nanrnia.",
    "pertenece a": "Marly Luna",
    "disponible": true
  },//Las cronicas de narnia. El sobrino del mago
  {
    "id":  "B7",
    "nombre": "Aventuras de un niño de la calle",
    "autor": "Julia Mercedes Castilla",
    "genero": "Narrativo",
    "editorial": "Norma",
    "paginas": 167,
    "sinopsis": "Relata el drama y las peripecias del diario vivir de un gamin abandonado por sus padres, que se ve obligado a buscar como ganarse la vida en una gran ciudad.",
    "pertenece a": "Luna",
    "disponible": true
  },//Aventuras de un niño de la calle
  {
    "id":  "B8",
    "nombre": "Cuentos para jugar",
    "autor": "Gianni Rodari",
    "genero": "Literatura infantil",
    "editorial": "Alfaguara Infantil",
    "paginas": 177,
    "sinopsis": "Esta obra recoge veinte cuentos cuyos desenlaces quedan abiertos a tres finales distintos; un original recurso que ha servido para estimular la creatividad literaria de lectores de todo el mundo.En ellos, Gianni Rodari deja retazos de su fina ironia, a la vez que hace un llamamiento a la cordialidad, la generosidad, la imaginación, y la honradez.",
    "pertenece a": "Luna",
    "disponible": true
  },//Cuentos para jugar
  {
    "id":  "B9",
    "nombre": "La vida del cacique Diomedez Diaz",
    "autor": "Tomas Barreto Rincon Escritor",
    "genero": "Biografica",
    "editorial": "Sampués",
    "paginas": 128,
    "sinopsis": "Ahora ha muerto, pero ya, desde antes, desde  mucho antes habia entrado vivo a la inmortalidad. Mientras el televisor transmitía una película violenta norteamericana, interrumpieron la señal para anunciar una noticia de ultima hora, por el fastidio que me producían las imágenes macabras de la película; consideré que cualquier interrupción, era mejor que el desarrollo final del contenido, tan deliberadamente usan el cine para promover un estado sicopático de violencia en el mundo",
    "pertenece a": "Lizeth Alarcon",
    "disponible": true
  },//La vida del cacique Diomedez Diaz
  {
    "id":  "C1",
    "nombre": "Cien años de soledad",
    "autor": "Gabriel Garcia Márquez",
    "genero": "Novela, realismo mágico",
    "editorial": "Oveja Negra",
    "paginas": 326,
    "sinopsis": "Mito por derecho propio, saludada por sus lectores como la obra en español más importante después de la Biblia, Cien años de soledad cuenta la saga de la familia Buendía y su maldición, que castiga el matrimonio entre parientes dándoles hijos con cola de cerdo. Como un río desbordante, a lo largo de un siglo se entretejerán sus destinos por medio de sucesos maravillosos en el fantástico pueblo de Macondo, en una narración que es la cumbre indiscutible del realismo mágico y la literatura del boom. Alegoría universal, es también una visión de Latinoamérica y una parábola sobre la historia humana.",
    "pertenece a": "Pilar Torres",
    "disponible": true
  },//Cien años de Soledad
  {
    "id":  "C2",
    "nombre": "La Celestina",
    "autor": "Fernando de Rojas",
    "genero": "Novela, tragicomedia, drama",
    "editorial": "Atenea",
    "paginas": 158,
    "sinopsis": "Obra medieval por excelencia con la que se inicia la modernidad literaria en España y que sería la obra cumbre de las letras españolas de no ser por la existencia del Quijote. La Celestina tuvo un éxito de publico extraordinario desde su primera aparición el texto de estas ediciones no es el mismo ya que el autor fue modificando la obra. La primera edición y mas antigua de las conservadas se imprimió en Burgos, por Fadrique de Basilea en 1499, y consta de dieciséis actos con el título de Comedia de Calisto y Melibea. Hubo después varias segundas ediciones de Toledo, impresa por Pedro Hagenbachc, que añade los versos acrósticos.",
    "pertenece a": "Mayra",
    "disponible": true
  },//La Celestina
  {
    "id":  "B4",
    "nombre": "Sócrates y el misterio de la copa robada",
    "autor": "Pedro Badrán",
    "genero": "Novela Juvenil",
    "editorial": "Norma",
    "paginas": 136,
    "sinopsis": "En esta nueva historia de Socrates Solano, el jugador se encuentra lesionado,luego de disputar la final de un importante torneo brasilero.El tiempo libre lo aprovecha conversando con siu amiga Samanta, una periodista argentina. Juntos emprenden una aventura para averiguar e parardero de la copa Jules Rimet, que desaparecio y se sospecha fue robada por bandas criminales.Esta pesquisa los llevara a tierras del Amazonass, en la frontera con Brasil, Perú y Colombia, sorteando toda clase de peligros. ¿Podran regresar el valioso trofeo a la vitrina de la Federacion de Futbol Brasilero, el lugar al que pertenece",
    "pertenece a": "Luna",
    "disponible": true
  },//Sócrates y el misterio de la copa robada
  {
    "id":  "C3",
    "nombre": "Adulterio",
    "autor": "Paulo Coelho",
    "genero": "Novela, ficcion",
    "editorial": "Grijalbo",
    "paginas": 274,
    "sinopsis": "Porque, a pesar de todo, es mejor no vivir que no amar. Una mujer. Un secreto. Una pasión inesperada que trastoca su vida y sus valores. A sus 31 años, Linda tiene todo aquello que muchos sueñan y pocos logran conseguir: una vida perfecta. Un marido que la ama, unos hijos adorables, una exitosa carrera como periodista y una hermosa casa en Ginebra, Suiza. Y de pronto, sin previo aviso, su vida se pinta de sombras y comienza a temer que nada se transforme, o que todo cambie de improvisto. Es en ese momento cuando reencuentra a Jacob, su antiguo amor de la escuela, que irrumpe en su vida para sacarla de su letargo y hacerla sentir de nuevo esa pasión que creía olvidada. Atenazada entre la culpa y el placer, ella tendrá que encontrar su propia redención.",
    "pertenece a": "Natalia",
    "disponible": true
  },//Adulterio
  {
    "id":  "C4",
    "nombre": "El Perfume",
    "autor": "Patrick Suskind",
    "genero": "Novela, misterio, realismo mágico, fantasía, horror",
    "editorial": "",
    "paginas": 200,
    "sinopsis": "Jean-Baptiste Grenouille es, gracias a su prodigioso sentido del olfato, el mejor elaborador de perfumes de todos los tiempos. Pero es un ser grotesco, deforme y repulsivo a los ojos de las mujeres. Como venganza a tanta ofensa sufrida a causa de su aspecto físico, elabora un raro perfume que subyuga la voluntad de quien lo huele. Así, Jean-Baptiste consigue el favor de las damas de las damas de la alta sociedad y el dominio de los poderosos. Existe un único problema: para obtener la esencia elemental de la mágica fragancia se necesitan los fluidos corporales de jovencitas virgenes, y para ello el perfumista no duda en convertirse en un obsesivo, cruel y despiadado asesino.",
    "pertenece a": "Cristina Holguin",
    "disponible": true
  },//El Perfume
  {
    "id":  "C5",
    "nombre": "El Peregrino",
    "autor": "Paulo Coelho",
    "genero": "Novela, Ficción",
    "editorial": "Planeta",
    "paginas": 239,
    "sinopsis": "Santiago de Compostela, ciudad española conocida como centro internacional de peregrinación, está adelante, y no puedo imaginar que este camino me conduce no sólo a esta ciudad, sino a mucas otras ciudades del mundo. Ni petrus, mi maestro, ni yo sabemos que esta tarde estoy caminando hacia mi destino, tantas veces soñado y otras tantas, negado. Estoy caminando hacia la historia de mi renacimiento.",
    "pertenece a": "Andrea Jimenez",
    "disponible": true
  },//El Peregrino
  {
    "id":  "C6",
    "nombre": "Satanás",
    "autor": "Mario Mendoza",
    "genero": "Novela",
    "editorial": "Planeta",
    "paginas": 280,
    "sinopsis": "Una mujer hermosa e ingenua que roba con destreza a altos ejeccutivos, un pintor habitado por fuerzas misteriosas y un sacerdote que se enfrenta a un caso de posesión demoníaca en La Candelaria, el barrio colonial de Bogotá... historias que se tejen en torno a la de Campo Elías, heroe de la guerra de Vietnam, quien inicia su particular descenso a los infiernos obsesionado por la dualidad entre el bien y el mal, entre Jekyll y Hyde, y se convertirá en un ángel exterminador.",
    "pertenece a": "Natalia",
    "disponible": true
  },//Satanás
  {
    "id":  "C7",
    "nombre": "Personas desconocidas",
    "autor": "John Katzenbach",
    "genero": "Ficción, Thriller, Suspenso, Thriller psicológico",
    "editorial": "Grupo Zeta",
    "paginas": 476,
    "sinopsis": "Una niña de trece años que desaparece sin dejar rastro. Cuatro jovenes blancos asesinados,Dos policías retirados que no quieren o no pueden hablar.Un narcotraficante entre rejas con mas información de la que debiera, y una pareja de policías empeñados en descubrir la verdad:una perfecta combinación para thriller fenomenal, como solo John Katzenbach podría escribirlo",
    "pertenece a": "Laura Sandoval",
    "disponible": true
  },//Personas desconocidas
  {
    "id":  "C8",
    "nombre": "Mi vida y mi carcel con Pablo Escobar",
    "autor": "Victoria Eugenia Henao",
    "genero": "Biografía, Autobiografía",
    "editorial": "Planeta",
    "paginas": "523",
    "sinopsis": "A medida de la década del setenta Victoria Eugenia Henao era una adolescente como  cualquier otra, que ignoraba el rumbo que tomaría su vida al enamorarse de Pablo Escobar Gaviria.Durante dos años, la esposa y madre de los hijos del jefe del cartel de Medellin se sumergio en sus recuerdos para revivir los horribles episodios que afrontó con quien, a partir de 1982, asoló a Colombia con una estrategia de terror, asesinando políticos,periodistas, defensores de derechos humanos e inundando al mundo de cocaína.¿Por qué se casó con Pablo Escobar?¿Por qué nunca lo abandonó ni lo denunció? Victoria Eugenia narra de manera cruda y desgarradora lo que significó compartir la vida con uno de los criminales mas peligrosos y buscados del mundo.",
    "pertenece a": "Gabriel Vicioso",
    "disponible": true
  },//Mi vida y mi carcel con Pablo Escobar
  {
    "id":  "C9",
    "nombre": "Memorias de un hijueputa",
    "autor": "Fernando Vallejo",
    "genero": "Ficción literaria",
    "editorial": "Alfaguara",
    "paginas": "186",
    "sinopsis": "El memorialista loco de este libro sostiene que hay que defender deberes y no derechos; que la democracia es el pernicioso sistema electoral de unos corruptos que van  tras el botín del poder, pero que le permite por lo menos al ciudadano escoger entre el malo y el peor;que de los tres poderes sobran el legislativo y el judicial pues con el ejecutivo basta ya que puede comprar a los otros dos, como día a día, segun el, se esta viendo;que las patrias solo traen guerras; que las religiones han impedido el surgimiento de la moral y quen por eso siguen exisistiendo los mataderos y nos seguimos comiendo a los animales; y que entre patrias y religiones han logrado que hoy por hoy estemos en un mundo embotellado y atestado pero es sí, muy bien cimentado: sobre un arsenal nuclear.",
    "pertenece a": "Johan Sanchez",
    "disponible": true
  },//Memorias de un hijueputa
  {
    "id":  "D1",
    "nombre": "Apocalipsis",
    "autor": "Mario Mendoza",
    "genero": "Narrativa",
    "editorial": "Planeta",
    "paginas": "305",
    "sinopsis": "Hasta el momento en que su padre decide suicidarse,la vida de Marcos parece normal.Va al colegio,lee novelas de aventuras, tiene su grupo de amigos, de vez en cuando le ayuda a su viejo en la tienda de barrio que les da de comer. Sin embargo,a partir de ese día,Marcos debe convertirse en hombre y valerse por si mismo.Una apasionante historia se desata cuando descubre que, en un oscuro y alejado centro para enfermos mentales, vive un hermano suyo del que no tenia noticia, un personaje luminoso que le cambiará la vida para siempre.A partir de ese instante, los acontecimientos se convierten en una carrera desaforada, en un acontecer atropellado y surcado por el misterio.En ese constante trasegar,la reaparición de un rito prohibido  muy antiguo le da un giro definitivo a la historia.Marcos de adentra. entonces, en los espacios más reconditos del alma humana.",
    "pertenece a": "Johan Sanchez",
    "disponible": true
  },//Apocalipsis
  {
    "id":  "D2",
    "nombre": "La Isla de las palabras",
    "autor": "Sandra Leal1",
    "genero": "",
    "editorial": "Tiempo de leer",
    "paginas": 86,
    "sinopsis": "Muchas palabras nacieron en un lugar mágico creado para las letras que nadie usaba: una Isla. Nacieron palabras como Sol, Rey, Día, Persona, Jirafa y muchas más. La Isla de las palabras es un emocionante relato que de principio a fin mantiene cautivo a los lectores, porque además del tratamiento claro y sencillo del lenguaje, recurre a la estrategia del suspenso: todos los personajes tienen la misión de hallar la palabra que rompa la maldición que un mal día cayó sobre la isla.",
    "pertenece a": "Mayra",
    "disponible": true
  },//La Isla de las palabras
  {
    "id":  "D3",
    "nombre": "Popol Vuh",
    "autor": "Anónimo",
    "genero": "Narración",
    "editorial": "Panamericana",
    "paginas": 230,
    "sinopsis": "En cada uno de los relatos míticos prehispánicos, las comunidades indígenas pretendían explicarse el mundo, su constitución y la creación misma del hombre. Popol Vuh es un libro escrito en lengua quiché con el auxilio del alfabeto castellano que describe el origen de la comunidad mayaquiché, su microcosmos y las creencias que los llevan a considerar el maíz como elemento vital, dado que con éste se monldeó la figura del hombre y lo alimentó desde tiempos inmemoriales.",
    "pertenece a": "Mayra",
    "disponible": true
  },//Popol Vuh
  {
    "id":  "D4",
    "nombre": "Bajo la misma estrella",
    "autor": "John Green",
    "genero": " Novela, Novela rosa, Ficción adulto joven",
    "editorial": "Nube de tinta",
    "paginas": 300,
    "sinopsis": "Emotiva,irónica ya afiliada.Una novela teñida de humor y de tragedia que habla de nuestra capacidad para soñar incluso en las circunstancias mas dificiles.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Bajo la misma estrella
  {
    "id":  "D5",
    "nombre": "Coflictos de pareja",
    "autor": "Amador Sereno",
    "genero": "Autoayuda y superación",
    "editorial": "Impacto",
    "paginas": 317,
    "sinopsis": "Una muestra real de la convivencia actual, procurando un afianzamiento y duración en las reaciones de pareja",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Coflictos de pareja
  {
    "id":  "D6",
    "nombre": "El retrato de Dorian Gray",
    "autor": "Oscar Wilde",
    "genero": "Ficción gótica, Novela filosófica",
    "editorial": "Cometa de papel",
    "paginas": 283,
    "sinopsis": "Un aristócrata hedonista se conserva joven y guapo mientras un retrato escondido refleja su horrible alma.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//El retrato de Dorian Gray
  {
    "id":  "D7",
    "nombre": "Fish",
    "autor": "Stephen C.Lundin,M.D Harry Paul,John Christensen",
    "genero": "Motivación",
    "editorial": "Urano",
    "paginas": 122,
    "sinopsis": "Es un libro sobre la vida; sobre la manera en que debemos vivir nuestra vida cotidiana y cómo hemos de relacionarlos con nuestros familiares, nuestros amigos y las personas que encontramos por la calle.Si utiliza lo que aporta este libro, no sólo mejorará en su trabajo, sino también como persona, lo que es mucho mas importante.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Fish
  {
    "id":  "D8",
    "nombre": "Aprendiendo a quererse a si mismo",
    "autor": "Walter Riso",
    "genero": "Autoayuda",
    "editorial": "Norma",
    "paginas": 154,
    "sinopsis": "En este libro, el doctor Walter Riso nos ensea a querernos de una manera sana y realista, y nos muestra como ese es el mejor camino para construir un yo fuerte y seguro y tener una vida plena y feliz.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Aprendiendo a quererse a si mismo
  {
    "id":  "D9",
    "nombre": "¿Quien se ha llevado mi queso?",
    "autor": "Spenger johnson, M.D.",
    "genero": "Ficción, Libro de autoayuda",
    "editorial": "Urano",
    "paginas": 93,
    "sinopsis": "Mediante una sencilla parábola, este libro nos ofrece valiosas enseñanzas para entender un mundo que se mueve  un ritmo cada vez más acelerado.De hecho , se trata de un cursillo rápido de adaptaciónal cambio en todos los ámbitos de la existencia que ha sido de gran utilidad  para grandes y peueñas empresas, y que puede servir para arrojar nueva luz sobre cualquier problema.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//¿Quien se ha llevado mi queso?
  {
    "id":  "E1",
    "nombre": "Autoliderazgo y el ejecutivo al minuto",
    "autor": "Ken Blanchard",
    "genero": "Motivacional",
    "editorial": "Norma",
    "paginas": 180,
    "sinopsis": "¡Descubra la magia de no buscar excusas!Es rapido.Es sencillo.¡Funciona! El libro que revela los tres trucos faciles que harán de usted un ejecutivo eficiente.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Autoliderazgo y el ejecutivo al minuto
  {
    "id":  "E2",
    "nombre": "Las aventuras de Tom Sawyer",
    "autor": "Mark Twain",
    "genero": "Novela, Historieta, Cuento de hadas, Sátira",
    "editorial": "Losada",
    "paginas": 274,
    "sinopsis": "Abre este libro y sumérgete en las aventuras de Tom Sawyer, un niño con una enorme imaginación que, en medio de sus juegos, es testigo de un asesinato, encuentra un tesoro escondido en una isla y se escapa de su casa para vivir como un pirata en compañía de sus grandes amigos.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Las aventuras de Tom Sawyer
  {
    "id":  "E3",
    "nombre": "El viejo y el mar",
    "autor": "E.Hemingway",
    "genero": "Novela, Novela corta, Alegoría, Novela de aprendizaje, Historia de mar",
    "editorial": "",
    "paginas": 135,
    "sinopsis": "La lucha desigual de iun hombre, en el ocaso de su vida, contra la naturaleza, llena de peligros y zozobras y contra un enorme pez jamas visto, adquiere por momentos connotaciones de heroica epopeya en este relato del norteamericano Ernest Hemingway, uno de los autores mas importantes de la generación perdida¨, nombre con que se designo a los creadores",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//El viejo y el mar
  {
    "id":  "E4",
    "nombre": "El secreto del escarabajo",
    "autor": "Oscar Mendoza",
    "genero": "",
    "editorial": "Intermedio",
    "paginas": 272,
    "sinopsis": "En los estantes de las librerías hay muchos librros que dan claves para ser mejor persona, mejor empleado, mejor jefe.Pero son pocos, por no decir minimos, los que hablan sin tapujos de emprendimiento, lo que se necesita para hacer realidad los sueños, de manera clara,concisa y con ejemplos reales de personas que superaron sus limitaciones y dieron el salto definitivo que los llevó a alcanzar sus metas.El secreto del escarabajo revela justamente la manera como cada uno puede encontrar su propia fórmula para alcanzar el éxito.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//El secreto del escarabajo
  {
    "id":  "E5",
    "nombre": "Padre rico padre pobre",
    "autor": "Robert T.Kiyosaki",
    "genero": "Autoayuda",
    "editorial": "Time & Money Network Editions",
    "paginas": 224,
    "sinopsis": "Padre Rico y Padre Pobre es un libro escrito por Robert Kiyosaki y Sharon Lechter. Evoca el concepto de libertad financiera a través de la inversión,los inmuebles, ser dueño de negocios y el uso de tácticas de protección financiera.",
    "pertenece a": "Juan Garcia",
    "disponible": true
  },//Padre rico padre pobre
];




/*Plantilla
{
  "ID": 00,
  "nombre": "",
  "autor": "",
  "genero": "",
  "editorial": "",
  "paginas": ,
  "sinopsis": "",
  "pertenece a": "",
  "disponible": true
},//

libros.sort(function(a,b){
  return a.nombre-b.nombre
});*/
console.log(libros);
