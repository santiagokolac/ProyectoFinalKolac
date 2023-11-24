El proyecto del curso React JS de la plataforma CoderHouse consiste en el desarrollo de un e-commerce. Al ya tener el material fotográfico y la estética definida, elegí hacerlo de mi emprendimiento de pastelería "Piel de Frutilla".
Este comercio electrónico permite al cliente comprar tortas, budines, brownies y cookies, productos que están albergados dentro de la base de datos FireBase con sus respectivos nombres, precios, cateogías, descripción, stock disponible
e imágenes (las cuáles se encuentran dentro de la carpeta public del proyecto).

Descripción sintética de los componentes creados:

App.js: componente principal que configura la estructura general de la aplicación. Utilizamos la tecnología React Router para navegar entre distitas secciones.
NavBar.js: barra de navegación que contiene enlaces a las categorías de productos y al carrito de compras. Además incluye el componente CartWidget, el cual muestra el ícono del carrito y la cantidad de productos que éste contiene.
ItemListContainer.js: componente que muestra la lista de productos según la categoría seleccionada. Utiliza la base de datos Firebase para obtener la información de los productos.
ItemList.js: componente que muestra la vista previa de los productos en la interfaz.
ItemDetailContainer.js: componente que muestra los detalles de un producto específico. También utiliza Firebase para obtener la información del producto.
Item.js: componente que representa un producto específico.
ItemDetail.js: componente que muestra la información detallada de un producto específico con su imagen, descripción, precio (los cuales son obtenidos de Firebase) y un botón de agregar al carrito.
ItemCount.js: componente que permite al usuario seleccionar la cantidad del producto que desea agregar al carrito.
CartContext.js: contexto de React que gestiona el estado del carrito de compras de manera global y que proporciona funciones para agregar y quitar productos y limpiar el carrito.
CartWidget.js: componente que muestra el ícono del carrito junto con la cantidad actual de productos que se encuentran en el mismo.
Cart.js: componente que muestra el contenido del carrito de compras junto con la opción de eliminar productos específicos, vaciar todo el carrito y proceder al checkout.
CartItem.js: componente que representa un ítem individual en el carrito junto con la opción de eliminarlo.
Checkout.js: componente que maneja el proceso de finalización de la compra, recopilando la información del usuario y enviando la orden a Firebase. También actualiza el stock de productos en la base de datos.

Además, la aplicación incluye la muestra de errores y mensajes informativos para mejorar la experiencia del usuario.

Cada componente fue estilado utilizando CSS.