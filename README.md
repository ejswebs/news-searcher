News Searcher es un buscador de noticias desarrollado en React y maquetado con mui v4.

La app contempla los siguientes requerimientos:

✔En caso de que ocurra algún error, se presenta el mensaje correspondiente, explicando el error al usuario y dando la posibilidad de enviarlo por whatsapp al desarrollador
✔No realiza la búsqueda a menos que el usuario haya escrito al menos 3 caracteres
✔El botón buscar se habilita cuando el input cumpla con la condición anterior.
✔La búsqueda puede realizarse apretando la tecla enter del teclado.
✔Se presenta un spinner para que el usuario sepa de que se está realizando un procesamiento.
✔En caso de que no haya resultados, se presenta un mensaje que indique que no hay resultados para la búsqueda.
✔La búsqueda sólo se realiza en noticias en español.

Por cada noticia obtenida, se presenta:
✔ El nombre de la plataforma de origen de la noticia
✔ El título de la noticia
✔ La imagen de portada de la noticia
✔ La fecha de publicación de la noticia en formato:dd-mm-aaaa - hh:mm hs valiendose de la librería Luxon
✔ Cuando el usuario hace click sobre una noticia, la misma se abre en una nueva pestaña.
✔ Paginación, donde se presenten 10 noticias por vez

✔ El buscador esta disponible ya sea en la raíz o en la ruta /buscador.
✔ En caso que el usuario ingrese en una url inválida, se presenta una página de 404, con el mensaje recurso no encontrado y la posibilidad de ir al inicio.
✔La aplicación contiene un Footer y Header.

✔Este proyecto basa sus resultados en el EP everything de la API NewsAPI https://newsapi.org/docs/endpoints/everything.