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
        role: ["HTML", "CSS", "JavaScript,", "Django."],
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
            //----------------------
            // VISTA USUARIO
            //------------------------
            {
                src: "/projects/TIENDITA DE MUSICA/INICIO SESION.png",
                caption: "CHUPALO MESSI",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/BUSQUEDA.png",
                caption: "Vista de navegación — captura temporal para probar el carrusel.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CAMBIO CLAVE.png",
                caption: "Otra vista de ejemplo — reemplázala por tu captura real.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CARRITO CON ITEMS.png",
                caption: "Detalle del carrito de compras.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CARRITO SIN ITEMS.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/CUERDA.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/DATOS PERSONALES.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/DETALLE PRODUCTO.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/HISTORIAL.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/IDIOFONOS.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/INICIO TIENDA.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/PERCUSION.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/RECUPERAR CLAVE 1.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/RECUPERAR CLAVE 2.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/REGISTRO.png",
                caption: "Última captura de prueba del swipe.",
            },
            {
                src: "/projects/TIENDITA DE MUSICA/VIENTO.png",
                caption: "Última captura de prueba del swipe.",
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
                caption: "El logotipo estaba bonito pero no era lo suficientemente serio para la empresa.",
            },
            //----------------------------------
            // VISTA ADMINISTRADOR
            //----------------------------------
            {
                src: "/projects/TIMETECH/ADMIN DIGITALES.png",
                caption: "Cuando se dirigen los apartados de los relojes digitales alli recien aparecen los botones de: modificar o ir al detalle. Ademas las fotos de los productos es extremadamente grande, se podrian adaptar a un tamaño mas pequeño y que se pueda ver mas productos en la pantalla. Haciendo que el usuario no haga tanto scroll para ver los productos.",
            }, {
                src: "/projects/TIMETECH/ADMIN DETALLE.png",
                caption: "Desde la parte de los detalles (con vista al administrador), se pierde el botón de poder modificar los detalles del producto. Esto es un ejemplo de cómo la jerarquía visual y la consistencia entre pantallas pueden mejorarse. Además, hay espacio desperdiciados en la parte inferior del producto, pudo aprpvecharse colocando demas productos o una advertencia que diga que quedan poco producto disponible.",
            }, {
                src: "/projects/TIMETECH/ADMIN.png",
                caption: "El inicio del administrador es engorroso, se puede bajar un poco el tamaño de los elementos, los botones de acción no están bien posicionados, deberian de estar dentro de los productos (en la vista de detalle), al igual que el boton de los usuarios deberia ir al apartado de el usuario del que se logueo, no a la vista del publico.",
            }, {
                src: "/projects/TIMETECH/USUARIOS.png",
                caption: "Esta vista esta perfecta, lo unico que se deberia de colocar es un censurado a los correos para que nadie (ni siquiera el administrador) pueda verlos.",
            }, {
                src: "/projects/TIMETECH/AGREGAR ADMIN.png",
                caption: "El registro de agregar nuevo admin no deberia estar dentro del apartado de donde estan el resto de los usuarios, deberia ser un sistema a parte en donde tenga comunicacion con este y salga el nuevo administrador de la cuenta. Donde el administrador maximo pueda asignarle que permisos tiene el nuevo administrador.",
            }, {
                src: "/projects/TIMETECH/AGREGAR PRODUCTO.png",
                caption: "En esta sección hay un error y es que la card esta muy arriba haciendo que se cree un espacio en blanco enorme, se deberia de centrar la card para que sea mas armonioso y se vea mejor",
            }, {
                src: "/projects/TIMETECH/MODIFICAR PRODUCTOS.png",
                caption: "En esta pagina al modificar un producto en especifico esta bien, lo unico que se deberia de mejorar es el tamaño de la foto del producto, ya que es demasiado grande y hace que se vea mal la pagina, se deberia de reducir el tamaño de la foto y asi no se hace tanto scroll para agregar un producto.",
            }, {
                src: "/projects/TIMETECH/DETALLES PRODUCTOS.png",
                caption: "Aqui se notan las secciones correspondientes a lo que maneja la tienda",
            }, {
                src: "/projects/TIMETECH/MODIFICAR ADMIN.png",
                caption: "Aqui se reflejan los datos del administrador que se logueo, lo unico es que deberia de tener el boton de ver a los usuarios que se han registrado en la pagina, para que el administrador pueda ver a los usuarios y/o pueda eliminar a los usuarios.",
            },
            //----------------------------------
            // VISTA USUARIO
            //----------------------------------
            {
                src: "/projects/TIMETECH/INICIO SESION.png",
                caption: "El error en esta pestaña es que el usuario si toca el input de correo y no escribe nada, al tocar el input de contraseña y escribir algo, el input de correo se queda con el borde rojo, lo cual es un error de jerarquía visual y consistencia entre pantallas.",
            }, {
                src: "/projects/TIMETECH/ERRORES INICIO.png",
                caption: "Si se selecciona el botón de iniciar sesion sin haber ingresado datos, el error que aparece es muy grande y ocupa mucho espacio, se deberia de reducir el tamaño del error y que sea mas conciso. Ademas, la foto del usuario no esta acorde con la estetica de la pagina, se deberia de cambiar a una foto mas acorde con la pagina.",
            }, {
                src: "/projects/TIMETECH/RECUPERAR CLAVE.png",
                caption: "El mensaje que se le brinda al usuario podria ir mas centrado, como por ejemplo: el logotipo esta un poco disparejo.",
            }, {
                src: "/projects/TIMETECH/RECUPERAR CLAVE ERROR.png",
                caption: "El mensaje esta correcto, solo se mejoraria la estetica del mensaje y que sea menos largo y mas conciso.",
            }, {
                src: "/projects/TIMETECH/RECUPERAR CLAVE 3.png",
                caption: "El titulo esta muy grande, se deberia de reducir el tamaño del titulo y que sea mas conciso. Ademas centrar la card un poco mas ya que esta mas a la izquierda y se ve desrodenado",
            }, {
                src: "/projects/TIMETECH/REGISTRO.png",
                caption: "La estetica esta bien, los espacios de los inputs son adecuados ademas no hay una sobrecarga de inputs esta todo perfectamente equilibrado.",
            }, {
                src: "/projects/TIMETECH/REGISTRO ERROR.png",
                caption: "Si no se llega a completar una de las casillas, o el usuario sale de uno de los inputs inmediatamente te lanza todos los errores, y no deberia ser asi, solo deberia de alertar el input donde estaba posicionado el usuario o donde no cumple los requisitos.",
            }, {
                src: "/projects/TIMETECH/INICIO.png",
                caption: "El popover del mensaje de inicio de sesion deberia de ser un cuadrado y no rectangulo que ocupe toda la pantalla.",
            }, {
                src: "/projects/TIMETECH/AGREGAR AL CARRITO.png",
                caption: "El mensaje de: 'Producto agregado' debe de apuntar hacia el medio o tener otro estiloa donde el usuario lo pueda apreciar y este avisado de qeu su producto esta agregado correctamente , y no abajo de la pantalla. Ademas, deberia de tener un link en donde redirija al usuario a los productos en su carrito.",
            }, {
                src: "/projects/TIMETECH/CARRITO.png",
                caption: "El diseño del carrito es muy simple, se deberia de mejorar la estetica del carrito y que sea mas acorde con la pagina. Ademas, el boton de comprar deberia de estar en la parte inferior de la pantalla y no en la parte superior. Ademas, deberia de tener un boton de de '+' y '-' para aumentar o disminuir la cantidad de productos que el usuario desea comprar, para que asi no tenga que salir y volver a la pagina del producto para volver agregarlo. Y ademas, hay un espacio en blanco que se pudo aprovechar mejor, ya que el boton de comprar esta muy arriba y se puede aprovechar ese espacio para poner mas productos o alguna publicidad de la pagina.",
            }, {
                src: "/projects/TIMETECH/CARRITO VACIO.png",
                caption: "Esta bien esta pagina, solo es que el logo que muestra de que el carrito esta vacio es poco profesional y esta muy infantil ",
            }, {
                src: "/projects/TIMETECH/EXITO COMPRA.png",
                caption: "El mensaje esta bien, ya que le indica al usuario que su compra fue exitosa, pero se deberia de mejorar la estetica del mensaje y que sea mas acorde con la pagina. Y, si notan en la barra de navegacion, pareciera como si al usuario lo sacaba de su sesion y lo redirigia a la pagina de inicio, lo cual es un error de jerarquia visual y consistencia entre pantallas.",
            }, {
                src: "/projects/TIMETECH/HISTORIAL.png",
                caption: "Donde aparece la direccion del usuario, se deberia de poner un boton de editar direccion, ya que si el usuario desea cambiar su direccion, no puede hacerlo y tiene que salir de la pagina y volver a entrar para poder cambiar su direccion. Ademas, se deberia de ajustar la imagen de la compra a que de lo ancho de la card para que se vea estetico, y si el usuario hace compras de dos o mas pedidos, el usuario deberia de ver todos sus productos en un sola card, no varias hacia abajo.",
            }, {
                src: "/projects/TIMETECH/RELOJES DIGITALES.png",
                caption: "En ocasiones, los botones de visualizar el producto a 'detalle' solo aparece cuando el usuario se dirige a las secciones o categorias. Esto es un error de jerarquia visual y consistencia entre pantallas, ya que el usuario no sabe que tiene que hacer para ver el producto a detalle. Y el mismo dilema de la mayoria de las pantallas, es el tamaño de las fotos de los productos, que son demasiado grandes y hacen que el usuario tenga que hacer mucho scroll para ver los productos.",
            }, {
                src: "/projects/TIMETECH/AUDIFONOS BLUETOOTH.png",
                caption: "En ocasiones, los botones de visualizar el producto a 'detalle' solo aparece cuando el usuario se dirige a las secciones o categorias. Esto es un error de jerarquia visual y consistencia entre pantallas, ya que el usuario no sabe que tiene que hacer para ver el producto a detalle. Y el mismo dilema de la mayoria de las pantallas, es el tamaño de las fotos de los productos, que son demasiado grandes y hacen que el usuario tenga que hacer mucho scroll para ver los productos.",
            }, {
                src: "/projects/TIMETECH/RELOJES ANALOGICOS.png",
                caption: "En ocasiones, los botones de visualizar el producto a 'detalle' solo aparece cuando el usuario se dirige a las secciones o categorias. Esto es un error de jerarquia visual y consistencia entre pantallas, ya que el usuario no sabe que tiene que hacer para ver el producto a detalle. Y el mismo dilema de la mayoria de las pantallas, es el tamaño de las fotos de los productos, que son demasiado grandes y hacen que el usuario tenga que hacer mucho scroll para ver los productos.",
            }, {
                src: "/projects/TIMETECH/AUDIFONOS GAMES.png",
                caption: "En ocasiones, los botones de visualizar el producto a 'detalle' solo aparece cuando el usuario se dirige a las secciones o categorias. Esto es un error de jerarquia visual y consistencia entre pantallas, ya que el usuario no sabe que tiene que hacer para ver el producto a detalle. Y el mismo dilema de la mayoria de las pantallas, es el tamaño de las fotos de los productos, que son demasiado grandes y hacen que el usuario tenga que hacer mucho scroll para ver los productos.",
            }, {
                src: "/projects/TIMETECH/RELOJES SMARTWATCH.png",
                caption: "En ocasiones, los botones de visualizar el producto a 'detalle' solo aparece cuando el usuario se dirige a las secciones o categorias. Esto es un error de jerarquia visual y consistencia entre pantallas, ya que el usuario no sabe que tiene que hacer para ver el producto a detalle. Y el mismo dilema de la mayoria de las pantallas, es el tamaño de las fotos de los productos, que son demasiado grandes y hacen que el usuario tenga que hacer mucho scroll para ver los productos.",
            }, {
                src: "/projects/TIMETECH/DATOS USUARIO.png",
                caption: "Esta pagina esta bien, los colores, los botones y la jerarquia visual esta correcta.",
            }, {
                src: "/projects/TIMETECH/EDITAR USUARIO.png",
                caption: "Esta bien esto de que si no hay algun cambio no deberia de activare el botón.",
            }, {
                src: "/projects/TIMETECH/CAMBIO.png",
                caption: "Cuando el usuario actualiza su foto (ya sea con una foto o alguna imagen de su galeria), el usuario deberia de poder ajustar la foto, porque si sube una imagen de la cual es muy grande, el usuario no puede ajustar la imagen y se ve mal. Ademas, hay un mensaje de aviso de que no se puede cambiar el correo, eso podria ser un popover o aprovechar el espacio en blanco de abajo para colocar ese mismo mensaje de aviso.",
            }, {
                src: "/projects/TIMETECH/CAMBIAR CLAVE.png",
                caption: "Ese espacio en blanco daña la estetica del cambio de contraeña deberia de estar mas centrado para que se vea mas armonioso y no tan desordenado. Ademas, el boton de cambiar contraseña deberia de ser menos ancho y que no de a todo lo largo de la pantalla.",
            }, {
                src: "/projects/TIMETECH/CLAVE ERROR.png",
                caption: "El mensaje esta correcto de que 'la contraseña no cumple los requisitos', pero no deberia de activarse el input de abajo si no se accionó el boton de cambiar contraseña, ya que es un error de jerarquia visual y consistencia entre pantallas.",
            }, {
                src: "/projects/TIMETECH/DETALLES.png",
                caption: "La parte de los detalles cuando no se ha iniciado sesión esta bien ya que, no deberia de tener ningun boton de agregado ni nada porque el usuario no ha iniciado sesión. Pero deberia de ser aprovechado ese espacio en blanco para promocionar mas productos similares y/o otros productos que el usuario pueda estar interesado en comprar. ",
            }, {
                src: "/projects/TIMETECH/FERIADOS.png",
                caption: "Los datos de los feriados no aparecen en su respectivo espaciado, ese detalle hace confundir al usuario haciendo que pierda confianza en la aplicación.",
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