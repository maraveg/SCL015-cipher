# “Encripta Tus Mensajes SOS”
##### Cuando no quieras que los demás lean tus mensajes ¡Codifícalos!

Esta es una aplicación web que permite codificar y decodificar un texto con un número de desplazamiento elegido por el usuario.

A esta aplicación web se accede desde cualquier navegador de internet, aunque se recomienda preferentemente el uso de Chrome.

Link para ingresar a la aplicacion : [https://maraveg.github.io/SCL015-cipher/src/index.html]

#### Definición de Usuarios y Objetivos.

Los principales usuarios de este producto son las mujeres. Mujeres que dentro de sus hogares sufren de abuso  físico y psicológico y que debido al constante acoso de su agresor, no cuentan con la privacidad suficiente al momento de buscar ayuda.

Por lo tanto al no contar con este espacio, el objetivo de esta aplicación es que las usuarias puedan comunicarse sin miedo a que su agresor las descubra. Considerando que aunque estos mensajes sean borrados siempre quedan registros o respaldos en cualquier tipo de dispositivo usado.

Cifrando el texto se asegura que el agresor no comprenda lo que se está comunicando, ni quien es la persona a la que se quiera recurrir, así es mucho más fácil y privado ponerse en contacto con sus redes de apoyo, sean estas, instituciones, familiares o incluso dentro de las comunidades donde viven. 

#### Experiencia de Usuario e Interfaz.

Muchas veces en un episodio de violencia las personas no cuentan con la claridad mental para interactuar con aplicaciones demasiado complejas, por  eso se pensó que esta aplicación tuviese una interfaz sencilla y clara de entender para que el proceso de enviar mensajes codificados y decodificarlos sea mucho más rápido y simple. 

#### Prototipado.
Desde un comienzo se pensó en pocos elementos y que estos estuvieran todos distribuidos en una sola interfaz.

![](https://i.ibb.co/zJfbKdF/1ersketch.png)

Luego se eliminó un input de número al considerarse innecesario que hubiesen dos. Además, se optó por que fuese más explicativo, añadiendo instrucciones para que sea amigable con el usuario.

![](https://i.ibb.co/ZmL0F2Q/2dosketch.png)

#### Decisiones de Diseño.

En un comienzo se había definido el diseño con un solo “text area” donde se ingresara el mensaje, y que al dar click en “Codificar”, se desplegara el resultado en el mismo lugar.

![](https://i.ibb.co/Lz5CsDw/figma1.png)

Pero según el feedback recibido, este diseño era poco intuitivo ya que el orden de los botones no correspondian con el orden de la interacción que realiza el usuario. Además de ser poco factible llevar a cabo el producto con un solo “text area”, era más claro y coherente tener un espacio para el texto de entrada y otro espacio para el texto de salida.

También se eliminó el pequeño botón de “enter” del input del número offset, por considerarse que esa misma tarea lo podía realizar el botón “Codificar”.  Se aplicó el mismo criterio para eliminar el botón “Enviar”.

![](https://i.ibb.co/7gC50sL/figma2.png)

Los colores de esta aplicación  fueron elegidos en tonos pasteles y femeninos para que visualmente se relacione con su público objetivo.

#### Vista Final.

En el resultado final se le dio más espacio al área de Instrucciones, que también contiene el imput del número offset, para que bajo de este aparezca impreso el número que el usuario seleccionó y así lo pueda recordar de forma visual.

![](https://i.ibb.co/WFWJKXq/Final.png)

----

#### Funcionalidad.

El uso sugerido para esta aplicación web es:

##### Codificado:

 1. Ingresar un numero de desplazamiento del 1 al 100 en la primera casilla pequeña que se encuentra centrada en la parte superior de la interfaz. 
 2. Ese número será el que designe cuantas posiciones a la derecha dentro del abecedario se desplazará cada letra del texto que queremos codificar.
 3. Ingresar en la primera casilla de mayor tamaño que se encuentra a continuación, el TEXTO O MENSAJE que queramos codificar.
 4. Dar click al botón “CODIFICAR”  para que el mensaje cifrado se despliegue en la casilla de texto inferior. 
 5. Copiar y pegar (Ctrl+c y Ctrl+v) el texto codificado en el lugar donde se prefiera compartir.
 6. Dar click al botón “borrar” para eliminar el contenido ingresado.

##### Decodificado:

 1. Es importante indicarle a  la persona que recibirá el texto codificado, cuál es el número de desplazamiento que elegimos para que coincida  con el resultado correcto de decodificado.
 2. Ingresar ese número, en la misma casilla pequeña que se encuentra centrada en la parte superior de la interfaz 
 3. Ingresar en la primera casilla de mayor tamaño que se encuentra a continuación, el TEXTO O MENSAJE que queremos “DECODIFICAR”
 4. Dar click al botón “DECODIFICAR”  para que el mensaje descifrado se despliegue en la casilla de texto inferior. 
 5. Dar click al botón “borrar” para eliminar el contenido ingresado.