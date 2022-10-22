let dataHabitaciones = {
    cantidad: 100,
    habitaciones: [{
        id: 1,
        nombre: "Suite",
        descripcion: "Espaciosa habitación que se destaca por su gran confort, moderno diseño, particular decoración y equipamiento de alta calidad. La simpleza y refinamiento de los detalles junto al TV LCD, escritorio, sala de estar con sillones y una privilegiada vista al Parque desde el último piso a través de sus amplios ventanales realzan su categoría.La Suite, es la opción ideal para disfrutar del máximo confort en categoría de Habitaciones.",
        imagen: ["https://pxpics.imgix.net/1747/P3490/photos/ad5bf1eceed4ab29742e016c97f85bc5ec64c267.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.1&w=600&s=baa06906412046c1c41bcdd8c5e0f0d8", "https://pxpics.imgix.net/1747/P3490/photos/e3afab4e4466680f84f6184c3fb02241c175c170.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.1&w=600&s=178a8a43eeeeb914d03fbe8477fcd0bd"] ,
        tamaño: "45 m2",
        capacidad: 4,
        comodidades: ["Desayuno Incluido", "Tv", "Wi-fi", "Baño privado", "Aire acondicionado", "calefacción"],
        cantidad: 30
    },
    {
        id: 2,
        nombre: "Executive",
        descripcion: "La antesala con sillones, su cómoda barra desayunadora complementada por un equipamiento específico, su innovador diseño y sus luminosos ventanales con la privilegiada vista al Parque, hacen de este tipo de habitación el elegido por todo aquel que busca comodidad, amplitud y espacio para trabajar distendido, o simplemente relajarse disfrutando la vista.",
        imagen: ["https://pxpics.imgix.net/1747/P3490/photos/ad5bf1eceed4ab29742e016c97f85bc5ec64c267.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.1&w=600&s=baa06906412046c1c41bcdd8c5e0f0d8", "https://pxpics.imgix.net/1747/P3490/photos/e3afab4e4466680f84f6184c3fb02241c175c170.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.1&w=600&s=178a8a43eeeeb914d03fbe8477fcd0bd"],
        tamaño: "32 m2",
        capacidad: 3,
        comodidades: ["Desayuno Incluido", "Tv", "Wi-fi", "Baño privado", "Aire acondicionado", "calefacción", "Caja de seguridad"],
        cantidad: 40
    },
    {
        id: 3,
        nombre: "Standar",
        descripcion: "Delicada y confortable habitación que cuida el detalle en su moderna decoración y equipamiento brindando el mejor nivel de calidad. Este tipo de habitación, con 21 m2, es el más grande de su clase en San Rafael, y por lo tanto es ideal para negocios o vacaciones de unos días.",
        imagen: ["https://pxpics.imgix.net/1747/P3490/photos/ad5bf1eceed4ab29742e016c97f85bc5ec64c267.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.1&w=600&s=baa06906412046c1c41bcdd8c5e0f0d8", "https://pxpics.imgix.net/1747/P3490/photos/e3afab4e4466680f84f6184c3fb02241c175c170.jpg?auto=format&browser=Chrome&h=400&ixlib=php-3.3.1&w=600&s=178a8a43eeeeb914d03fbe8477fcd0bd"],
        tamaño: "20 m2",
        capacidad: 2,
        comodidades: ["Desayuno Incluido", "Tv", "Wi-fi", "Aire acondicionado", "Caja de seguridad"],
        cantidad: 30
    },

    ]
}

let imagenes = ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"]


// {
//     nombre: "suite",
//     descripcion: ,
//     tamaño: ,
//     capacidad: ,
//     comodidades: []
// },

let dataActividades = {

    actividades: [{
        id: 1,
        nombre: "WATSU",
        tipo: "pileta",
        descripcion: "Es la unión de dos palabras. Water (agua) y Shiatsu, técnica japonesa que apoya procesos de sanación. Es una terapia realizada en piscinas y que permite a la persona entrar en un estado profundo de relajación involucrando a todos los sentidos.",
        horaHabilitada: {
            desde: "10:00",
            hasta: "11:30",
        },
        dirigido: {
            niños: true,
            jovenes: true,
            adultos: true,
            ancianos: true,
            mujeresEmbarzadas: true,
        },
        img: "https://www.masterdireccionhoteles.com/wp-content/uploads/2018/06/galeria-watsu-15-300x200.jpg",
        dias: {
            lunes: false,
            martes: true,
            miercoles: false,
            jueves: true,
            viernes: true,
            sabado: false,
            domingo: false,
        }
    },
    {
        id: 2,
        nombre: "WOGA",
        tipo: "pileta",
        descripcion: "También llamado yoga acuático es una técnica de ejercicios en el agua teniendo en cuenta la flotación, el equilibrio, la concentración y la respiración. Se puede realizar de forma individual o colectiva. ",
        horaHabilitada: {
            desde: "14:00",
            hasta: "15:00",
        },
        dirigido: {
            niños: true,
            jovenes: true,
            adultos: true,
            ancianos: true,
            mujeresEmbarzadas: true,
        },
        img: "https://www.masterdireccionhoteles.com/wp-content/uploads/2018/06/El_Woga_una_terapia_acuatica_reconfortante_joya_life_1-300x168.jpg",
        dias: {
            lunes: true,
            martes: false,
            miercoles: true,
            jueves: false,
            viernes: true,
            sabado: true,
            domingo: true,
        },
    },
    {
        id: 3,
        nombre: "AEROYOGA",
        tipo: "tela",
        descripcion: "Es un método inspirado en el yoga que utiliza la suspensión de un columpio especial como plataforma para fomentar la creatividad, el desbloqueo,la tonificación , la definición muscular y rejuvenecimiento. ",
        horaHabilitada: {
            desde: "14:00",
            hasta: "15:00",
        },
        dirigido: {
            niños: false,
            jovenes: true,
            adultos: true,
            ancianos: true,
            mujeresEmbarzadas: false,
        },
        img: "https://www.masterdireccionhoteles.com/wp-content/uploads/2018/06/ventajas-de-practicar-aeroyoga-300x198.jpg",
        dias: {
            lunes: false,
            martes: false,
            miercoles: false,
            jueves: false,
            viernes: true,
            sabado: true,
            domingo: true,
        },
    },
    {
        id: 4,
        nombre: "JUMPING FITNESS",
        tipo: "ritmo",
        descripcion: "Consiste en realizar una serie de ejercicios en una cama elástica individual. Se trata de saltar combinando pasos aeróbicos, variando el ritmo y la velocidad al ritmo de la música. ",
        horaHabilitada: {
            desde: "17:00",
            hasta: "19:00",
        },
        dirigido: {
            niños: false,
            jovenes: true,
            adultos: true,
            ancianos: false,
            mujeresEmbarzadas: false,
        },
        img: "https://www.masterdireccionhoteles.com/wp-content/uploads/2018/06/c700x420-300x180.jpg",
        dias: {
            lunes: false,
            martes: false,
            miercoles: true,
            jueves: true,
            viernes: false,
            sabado: false,
            domingo: false,
        },
    },
    {
        id: 5,
        nombre: "KANGOO POWER",
        tipo: "ritmo",
        descripcion: "Es una actividad cardiovascular y de tonificación que se realiza con una botas especiales que reducen el impacto de las articulaciones mientras se salta al ritmo de la música.",
        horaHabilitada: {
            desde: "16:00",
            hasta: "17:40",
        },
        dirigido: {
            niños: false,
            jovenes: true,
            adultos: true,
            ancianos: false,
            mujeresEmbarzadas: false,
        },
        img: "https://www.masterdireccionhoteles.com/wp-content/uploads/2018/06/El_Woga_una_terapia_acuatica_reconfortante_joya_life_1-300x168.jpg",
        dias: {
            lunes: false,
            martes: false,
            miercoles: false,
            jueves: true,
            viernes: true,
            sabado: true,
            domingo: false,
        },
    },
    {
        id: 6,
        nombre: "AQUACYCLING",
        tipo: "pileta",
        descripcion: "Es una técnica de entrenamiento físico mediante una bicicleta sumergida en la piscina quedando parte del cuerpo al descubierto.",
        horaHabilitada: {
            desde: "09:45",
            hasta: "10:40",
        },
        dirigido: {
            niños: false,
            jovenes: true,
            adultos: true,
            ancianos: false,
            mujeresEmbarzadas: false,
        },
        img: "https://www.masterdireccionhoteles.com/wp-content/uploads/2018/06/Aqua-Cycling-300x200.jpg",
        dias: {
            lunes: true,
            martes: false,
            miercoles: false,
            jueves: false,
            viernes: true,
            sabado: true,
            domingo: false,
        },
    },


    ]
}

//no anda