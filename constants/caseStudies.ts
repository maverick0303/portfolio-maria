export type CaseStudy = {
    slug: string;
    title: string;
    tag: string;
    color: string;
    heroImage: string; // imagen actual del proyecto (la que ya usas en Portfolio)
    liveUrl?: string;
    context: string; // el contexto: qué era, cuándo, por qué
    role: string[];
    problems: { title: string; description: string }[];
    objectives: string[]; // qué planeas/planeaste cambiar
    beforeImage?: string; // captura del "antes"
    afterImage?: string; // captura del "después" (o la actual si ya está hecho)
    improvements: string[]; // mejoras implementadas o por implementar
    reflection: string;
    images?: { src: string; caption: string }[];

};

export const caseStudies: CaseStudy[] = [
    {
        slug: "tiendita-de-musica",
        title: "Tiendita de Música",
        tag: "E-commerce",
        color: "#F2529D",
        heroImage: "/images/Tiendita.jpg",
        liveUrl: "", // TODO: link al sitio en vivo si lo tienes
        context:
            "Diseño y desarrollo de una plataforma web para una tienda de música, enfocada en ofrecer una experiencia completa de compra. El sistema incluye autenticación de usuarios, catálogo de productos, carrito de compras, gestión de clientes e inventario, además de la integración de una API para validar días feriados y calcular el despacho de pedidos. El proyecto fue desarrollado siguiendo la metodología Scrum.",
        role: ["HTML", "CSS", "JavaScript", "Django"],
        problems: [
            {
                title: "Interfaz visual desactualizada",
                description: "La interfaz utilizaba una estructura y una identidad visual poco atractivas, con escasa jerarquía visual, colores poco consistentes y componentes que no transmitían una experiencia moderna.",
            },
            {
                title: "Diseño poco responsive",
                description: "La experiencia en pantallas pequeñas no estaba completamente optimizada, afectando la navegación desde dispositivos móviles.",
            },
            {
                title: "Consistencia visual",
                description: "Existían diferencias entre componentes, botones y espaciados, generando una experiencia poco uniforme.",
            }
        ],
        objectives: [
            "Modernizar la identidad visual de la plataforma.",
            "Mejorar la organización y jerarquía de la información.",
            "Simplificar el flujo de navegación y compra.",
            "Crear una interfaz más limpia y consistente.",
            "Mejorar la experiencia en dispositivos móviles.",
            "Mantener la funcionalidad original sin alterar la lógica del sistema."
        ],
        beforeImage: "/images/tiendita-antes.jpg", // TODO: agrega esta captura a /public/images
        afterImage: "/images/Tiendita.jpg",
        improvements: [
            "Diseño visual más moderno y consistente.",
            "Mejor organización de la información.",
            "Componentes reutilizables y coherentes.",
            "Navegación más intuitiva.",
            "Mejor jerarquía visual.",
            "Interfaz optimizada para diferentes tamaños de pantalla.",
            "Mayor claridad en el flujo de compra.",
            "Experiencia de usuario más agradable.",
        ],
        reflection:
            "Este proyecto representó uno de mis primeros acercamientos al desarrollo web completo. Al retomarlo tiempo después, pude identificar muchas oportunidades de mejora tanto en diseño como en experiencia de usuario. Más allá de actualizar la apariencia, el proceso me permitió aplicar conocimientos adquiridos posteriormente sobre arquitectura de interfaces, jerarquía visual y usabilidad. Comparar ambas versiones refleja mi evolución como desarrolladora y demuestra cómo mi forma de abordar un proyecto ha cambiado con la experiencia.",
        images: [
            //-----------------------
            // LOGOTIPO
            //-----------------------
            {
                src: "/images/Tiendita.jpg",
                caption: "El logotipo comunicaba correctamente la identidad de la tienda, pero su estilo resultaba demasiado infantil para el rubro.",
            },
            //----------------------
            // VISTA USUARIO
            //------------------------
            {
                src: "/projects/TIENDITA DE MUSICA/INICIO SESION.png",
                caption: "La vista de inicio de sesión no cumple con los estándares de responsividad esperados: los márgenes superior e inferior de la tarjeta son excesivos. Además, el mensaje de confirmación de cierre de sesión es demasiado pequeño y pierde contraste frente al color de fondo.",
            }, {
                src: "/projects/TIENDITA DE MUSICA/BUSQUEDA.png",
                caption: "Las tarjetas de producto presentan un error de responsividad: la guitarra eléctrica se ve notablemente más alta que la acústica, rompiendo la uniformidad del grid. Falta espaciado entre productos para lograr una composición más centrada, no existe un filtro de búsqueda, los resultados usan una tipografía distinta al resto de la interfaz y los precios no incluyen separador de miles.",
            }, {
                src: "/projects/TIENDITA DE MUSICA/CAMBIO CLAVE.png",
                caption: "Hay espacio en blanco innecesario en los laterales y no existe un botón para mostrar u ocultar la contraseña, lo que dificulta su verificación. La tarjeta es más grande de lo necesario, generando un scroll evitable; reducir el tamaño de los elementos y la tipografía resolvería ambos problemas.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CARRITO CON ITEMS.png",
                caption: "El carrito carece de una identidad visual propia y puede confundir al usuario. Los productos agregados no muestran su imagen, los precios no tienen separador de miles, los controles para sumar o restar cantidad son muy pequeños y están alejados del número, y el botón de pago con PayPal no sigue el sistema de diseño del resto del sitio.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CARRITO SIN ITEMS.png",
                caption: "Comparte los problemas visuales del carrito con productos, pero además muestra los botones de pagar y eliminar incluso cuando el carrito está vacío, cuando deberían ocultarse.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CUERDA.png",
                caption: "Las tarjetas de instrumentos tienen tamaños inconsistentes entre sí, rompiendo el grid. Sobra espacio en los laterales que podría destinarse a más productos o a un filtro, y el título de la sección tiene demasiado margen superior respecto al contenido.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/DATOS PERSONALES.png",
                caption: "Los inputs son más grandes de lo necesario, lo que agranda la tarjeta principal y genera un scroll evitable.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/MODIFICAR DATOS.png",
                caption: "El aviso de que el correo no puede modificarse ocupa espacio permanente en la interfaz; un popover o tooltip al pasar el cursor sería una solución más limpia.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/DETALLE PRODUCTO.png",
                caption: "La imagen del producto es excesivamente grande y desequilibra la composición de la pantalla. El botón de agregar al carrito debería tener mayor tamaño, y el scroll resultante podría evitarse ajustando las proporciones.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/HISTORIAL.png",
                caption: "Queda un espacio en blanco sin aprovechar que podría usarse para centrar el texto o incluir una imagen representativa de la tienda.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/IDIOFONOS.png",
                caption: "Los espacios laterales dan una sensación de vacío; se podría incorporar un filtro u otro elemento visual. El título necesita mayor jerarquía y los productos, una mejor distribución para evitar huecos.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/INICIO TIENDA.png",
                caption: "La página de inicio tiene demasiado espacio en blanco y no ofrece un acceso directo al detalle o al carrito desde cada producto. El título no está perfectamente centrado y el margen respecto a los productos es excesivo.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/PERCUSION.png",
                caption: "Los espacios laterales dan una sensación de vacío; se podría incorporar un filtro u otro elemento visual. El título necesita mayor jerarquía y los productos, una mejor distribución para evitar huecos.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/RECUPERAR CLAVE 1.png",
                caption: "Esta vista funciona correctamente: el contraste de color es adecuado y los mensajes se leen con claridad.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/RECUPERAR CLAVE 2.png",
                caption: "Esta vista funciona correctamente: el contraste de color es adecuado y los mensajes se leen con claridad.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/REGISTRO.png",
                caption: "Los bordes de la tarjeta exceden el margen de la pantalla, rompiendo la estética general. Los campos de contraseña no cuentan con opción de mostrar u ocultar el texto, lo que incentiva a los usuarios a elegir contraseñas simples para evitar errores al repetirla. El aviso resaltado en amarillo ocupa espacio necesario para la jerarquía visual; convendría convertirlo en un popover.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/VIENTO.png",
                caption: "Los espacios laterales dan una sensación de vacío; se podría incorporar un filtro u otro elemento visual. El título necesita mayor jerarquía y los productos, una mejor distribución para evitar huecos.",
            },
            //-------------------------------
            // VISTA ADMIN
            //-------------------------------
            {
                src: "/projects/TIENDITA DE MUSICA/DESCRIPCION ADMIN.png",
                caption: "Desde el detalle de producto, el administrador puede iniciar una compra, cuando su rol debería limitarse a modificar o eliminar productos.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/ERROR MODIFICAR.png",
                caption: "El sistema no aplica separadores de miles automáticamente ni permite ingresarlos de forma manual. Tampoco ofrece una vista previa de la imagen del producto ni permite ajustar su tamaño antes de subirla.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/MODIFICAR EXISTENTE.png",
                caption: "El formulario para ingresar nuevos productos es demasiado extenso (se redujo para esta captura); reducir el tamaño de los inputs o reorganizar el layout evitaría el scroll excesivo para el administrador.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/USUARIOS.png",
                caption: "El administrador puede ver datos sensibles del usuario (RUT, correo, teléfono) sin ningún tipo de enmascaramiento; estos datos deberían ocultarse parcialmente.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/VISTA ADMIN.png",
                caption: "La vista principal del administrador debería incluir un botón de edición directo en cada producto, sin necesidad de entrar al detalle. También se puede aprovechar mejor el espacio lateral y reducir el interlineado entre botones, título y productos.",
            },
        ],
    },
    //----------------------------------
    //TIME TECH:
    //----------------------------------
    {
        slug: "timetech",
        title: "Aplicación móvil de ventas",
        tag: "App Móvil",
        color: "#04D9D9",
        heroImage: "/images/timetech.jpg",
        liveUrl: "",
        context: "Diseño y desarrollo de una aplicación móvil enfocada en la compra de productos tecnológicos. La aplicación permite explorar un catálogo, agregar productos al carrito, realizar compras, consultar el historial de pedidos y completar formularios integrados con servicios externos. El proyecto fue desarrollado utilizando metodología Scrum, priorizando una experiencia de usuario clara, intuitiva y funcional.",
        role: ["Angular", "Ionic 7", "JavaScript", "SCSS", "SQLite"],
        problems: [
            {
                title: "Interfaz con oportunidades de mejora",
                description: "Aunque cumplía con los requerimientos funcionales, la interfaz presentaba una apariencia básica y podía beneficiarse de una mejor jerarquía visual y una identidad más moderna."
            }
            , {
                title: "Consistencia entre pantallas",
                description: "Existían diferencias en estilos, componentes y distribución de elementos que afectaban la uniformidad de la experiencia."
            }, {
                title: "Experiencia móvil",
                description: "Era posible optimizar el uso del espacio, la navegación y la accesibilidad para ofrecer una interacción más cómoda desde dispositivos móviles."
            }
        ],

        objectives: ["Modernizar la apariencia de la aplicación.", "Mejorar la experiencia de navegación.", "Optimizar el flujo de compra.", "Unificar el diseño de los componentes.", "Reforzar la jerarquía visual.", "Mantener todas las funcionalidades originales."],
        beforeImage: "/images/timetech.jpg",
        afterImage: "",
        improvements: ["Interfaz más moderna y atractiva.", "Navegación más intuitiva.", "Mejor organización del contenido.", "Componentes visuales consistentes.", "Flujo de compra más claro.", "Optimización de la experiencia móvil.", "Mejor jerarquía visual.",],
        reflection: "Este proyecto fortaleció mi experiencia en el desarrollo de aplicaciones móviles híbridas y me permitió comprender las diferencias entre diseñar para web y para dispositivos móviles. Al revisarlo nuevamente, identifiqué oportunidades para mejorar la navegación, la organización de la información y la experiencia de usuario. El rediseño refleja cómo ha evolucionado mi criterio para crear interfaces más limpias, consistentes y centradas en el usuario, sin perder de vista la funcionalidad del producto.",
        images: [
            //----------------------------------
            // LOGOTIPO
            //----------------------------------
            {
                src: "/images/timetech.jpg",
                caption: "El logotipo resultaba visualmente agradable, pero no transmitía la seriedad esperada para la marca.",
            },
            //----------------------------------
            // VISTA ADMINISTRADOR
            //----------------------------------
            {
                src: "/projects/TIMETECH/ADMIN DIGITALES.png",
                caption: "Los botones de modificar o ver detalle solo aparecen al ingresar a la categoría de relojes digitales. Las imágenes de producto son demasiado grandes; reducirlas permitiría mostrar más productos por pantalla y disminuir el scroll.",
            }, {
                src: "/projects/TIMETECH/ADMIN DETALLE.png",
                caption: "En la vista de detalle del administrador se pierde el botón para modificar el producto, un ejemplo de falta de jerarquía visual y consistencia entre pantallas. También queda espacio sin aprovechar en la parte inferior, que podría destinarse a productos relacionados o a un aviso de stock bajo.",
            }, {
                src: "/projects/TIMETECH/ADMIN.png",
                caption: "La vista de inicio del administrador se siente sobrecargada; se puede reducir el tamaño de los elementos. Los botones de acción deberían ubicarse dentro del detalle de cada producto, y el acceso a 'usuarios' debería llevar al perfil del administrador logueado, no a la vista pública.",
            }, {
                src: "/projects/TIMETECH/USUARIOS.png",
                caption: "Esta vista funciona bien; el único ajuste pendiente es enmascarar los correos para que ni siquiera el administrador pueda verlos completos.",
            }, {
                src: "/projects/TIMETECH/AGREGAR ADMIN.png",
                caption: "El registro de un nuevo administrador no debería vivir dentro de la lista general de usuarios; convendría un flujo independiente donde el administrador principal pueda asignar permisos específicos al nuevo perfil.",
            }, {
                src: "/projects/TIMETECH/AGREGAR PRODUCTO.png",
                caption: "La tarjeta del formulario queda muy pegada a la parte superior, generando un espacio en blanco excesivo debajo; centrarla mejoraría la composición.",
            }, {
                src: "/projects/TIMETECH/MODIFICAR PRODUCTOS.png",
                caption: "La vista de edición funciona bien en general; el único ajuste pendiente es reducir el tamaño de la imagen del producto, que actualmente es demasiado grande y obliga a un scroll innecesario.",
            }, {
                src: "/projects/TIMETECH/DETALLES PRODUCTOS.png",
                caption: "Aquí se aprecian correctamente las secciones que maneja la tienda.",
            }, {
                src: "/projects/TIMETECH/MODIFICAR ADMIN.png",
                caption: "Muestra los datos del administrador logueado; debería incluir un acceso directo a la gestión de usuarios registrados desde esta misma vista.",
            },
            //----------------------------------
            // VISTA USUARIO
            //----------------------------------
            {
                src: "/projects/TIMETECH/INICIO SESION.png",
                caption: "Si el usuario toca el campo de correo sin escribir y luego pasa al de contraseña, el campo de correo queda marcado en rojo de forma persistente, un error de validación y consistencia visual.",
            }, {
                src: "/projects/TIMETECH/ERRORES INICIO.png",
                caption: "Al enviar el formulario sin completar los datos, el mensaje de error ocupa demasiado espacio; convendría reducirlo. La imagen del usuario tampoco es coherente con la estética general del sitio.",
            }, {
                src: "/projects/TIMETECH/RECUPERAR CLAVE.png",
                caption: "El logotipo aparece descentrado; ajustar su alineación mejoraría la composición del mensaje.",
            }, {
                src: "/projects/TIMETECH/RECUPERAR CLAVE ERROR.png",
                caption: "El mensaje es correcto, aunque podría mejorarse la estética y hacerse más conciso.",
            }, {
                src: "/projects/TIMETECH/RECUPERAR CLAVE 3.png",
                caption: "El título es demasiado grande y la tarjeta está desplazada hacia la izquierda, dando una sensación de desorden; conviene reducir el título y centrar mejor el contenido.",
            }, {
                src: "/projects/TIMETECH/REGISTRO.png",
                caption: "La estética funciona bien: los espacios entre inputs son adecuados y no hay sobrecarga de campos.",
            }, {
                src: "/projects/TIMETECH/REGISTRO ERROR.png",
                caption: "Al salir de un campo incompleto, se muestran todos los errores de golpe en lugar de señalar únicamente el campo correspondiente.",
            }, {
                src: "/projects/TIMETECH/INICIO.png",
                caption: "El popover de bienvenida debería tener forma de tarjeta compacta en lugar de ocupar todo el ancho de la pantalla.",
            }, {
                src: "/projects/TIMETECH/AGREGAR AL CARRITO.png",
                caption: "El mensaje 'Producto agregado' aparece en la parte inferior de la pantalla, donde es fácil pasarlo por alto; debería ubicarse en un punto más visible e incluir un enlace directo al carrito.",
            }, {
                src: "/projects/TIMETECH/CARRITO.png",
                caption: "El diseño del carrito es demasiado simple y no está alineado con la estética general. El botón de comprar debería estar en la parte inferior en lugar de la superior, y faltan controles de '+' y '-' para ajustar cantidades sin salir de la vista. También hay espacio en blanco sin aprovechar que podría usarse para productos relacionados.",
            }, {
                src: "/projects/TIMETECH/CARRITO VACIO.png",
                caption: "La vista funciona bien; el único punto a mejorar es el ícono de carrito vacío, cuyo estilo resulta poco profesional para la marca.",
            }, {
                src: "/projects/TIMETECH/EXITO COMPRA.png",
                caption: "El mensaje comunica correctamente el éxito de la compra, aunque su estética podría mejorarse. Además, la barra de navegación da la impresión de cerrar la sesión del usuario, otro caso de inconsistencia entre pantallas.",
            }, {
                src: "/projects/TIMETECH/HISTORIAL.png",
                caption: "La dirección del usuario no cuenta con un botón de edición directo, obligando a salir y volver a entrar para modificarla. La imagen de cada compra debería ajustarse al ancho de la tarjeta, y los pedidos múltiples deberían agruparse en una sola tarjeta en lugar de repetirse verticalmente.",
            }, {
                src: "/projects/TIMETECH/RELOJES DIGITALES.png",
                caption: "El botón para ver el detalle del producto solo aparece al entrar a una categoría específica, lo que dificulta descubrir esa función. Las imágenes de producto también son demasiado grandes, generando scroll innecesario.",
            }, {
                src: "/projects/TIMETECH/AUDIFONOS BLUETOOTH.png",
                caption: "El botón para ver el detalle del producto solo aparece al entrar a una categoría específica, lo que dificulta descubrir esa función. Las imágenes de producto también son demasiado grandes, generando scroll innecesario.",
            }, {
                src: "/projects/TIMETECH/RELOJES ANALOGICOS.png",
                caption: "El botón para ver el detalle del producto solo aparece al entrar a una categoría específica, lo que dificulta descubrir esa función. Las imágenes de producto también son demasiado grandes, generando scroll innecesario.",
            }, {
                src: "/projects/TIMETECH/AUDIFONOS GAMES.png",
                caption: "El botón para ver el detalle del producto solo aparece al entrar a una categoría específica, lo que dificulta descubrir esa función. Las imágenes de producto también son demasiado grandes, generando scroll innecesario.",
            }, {
                src: "/projects/TIMETECH/RELOJES SMARTWATCH.png",
                caption: "El botón para ver el detalle del producto solo aparece al entrar a una categoría específica, lo que dificulta descubrir esa función. Las imágenes de producto también son demasiado grandes, generando scroll innecesario.",
            }, {
                src: "/projects/TIMETECH/DATOS USUARIO.png",
                caption: "Esta vista funciona correctamente: los colores, botones y jerarquía visual son adecuados.",
            }, {
                src: "/projects/TIMETECH/EDITAR USUARIO.png",
                caption: "Es un acierto que el botón de guardar permanezca inactivo mientras no haya cambios pendientes.",
            }, {
                src: "/projects/TIMETECH/CAMBIO.png",
                caption: "Al subir una foto de perfil, el usuario no puede recortarla ni ajustarla, por lo que una imagen de gran tamaño se ve deformada. El aviso de que el correo no puede modificarse también podría integrarse como popover o aprovechar el espacio en blanco inferior.",
            }, {
                src: "/projects/TIMETECH/CAMBIAR CLAVE.png",
                caption: "El espacio en blanco afecta la estética de la vista; centrar mejor el contenido la haría más armoniosa. El botón de cambiar contraseña también debería reducir su ancho en lugar de ocupar todo el ancho de la pantalla.",
            }, {
                src: "/projects/TIMETECH/CLAVE ERROR.png",
                caption: "El mensaje de 'la contraseña no cumple los requisitos' es correcto, pero el input inferior no debería activarse hasta que se presione el botón de cambiar contraseña.",
            }, {
                src: "/projects/TIMETECH/DETALLES.png",
                caption: "La vista de detalle sin sesión iniciada funciona bien al no mostrar acciones de compra, pero el espacio en blanco podría aprovecharse para mostrar productos similares o recomendados.",
            }, {
                src: "/projects/TIMETECH/FERIADOS.png",
                caption: "Los datos de feriados no respetan el espaciado esperado, lo que genera confusión y afecta la confianza del usuario en la aplicación.",
            },
        ],
    },
    {
        slug: "bookmatch",
        title: "BookMatch",
        tag: "Web App",
        color: "#F29BC4",
        heroImage: "/images/bookmatch.png",
        liveUrl: "",
        context: "TODO",
        role: ["Next.js", "React", "UI/UX", "TypeScript"],
        problems: [{ title: "TODO", description: "TODO" }],
        objectives: ["TODO"],
        beforeImage: "",
        afterImage: "/images/bookmatch.png",
        improvements: ["TODO"],
        reflection: "TODO",
        images: [
            { src: "/images/Tiendita.jpg", caption: "TODO: descripción de esta captura" },
            // agrega más rutas de imágenes aquí cuando las tengas
        ],
    },
];