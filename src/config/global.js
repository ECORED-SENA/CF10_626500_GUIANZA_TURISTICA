export default {
  global: {
    componenteFormativo: 'Coordinación de actividades',
    descripcionCurso:
      'La administración corresponde a una de las funciones del guía de turismo, las acciones organizadas, ejecutadas y evaluadas del quehacer profesional del guionaje necesita de aplicación de herramientas de planificación y control sustentadas por el pensamiento sistémico y la gestión en la conducción, orientación, instrucción y asistencia del turista. La administración incluye el manejo financiero y los trámites para el manejo del talento humano.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias de gestión y proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La administración en la guianza',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Proceso administrativo y el ciclo de planear, hacer, verificar y actuar -PHVA- en el guionaje',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de planeación del guionaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Gráfico de Gantt',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de acción',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El talento humano en la guianza ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Funciones en cada momento del servicio',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Roles de guía en el servicio',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Los recursos físicos en el guionaje ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Materiales para el guionaje',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Especificaciones técnicas equipos operativos y de seguridad',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Recursos financieros en el guion',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, S., J. (2016). Promoción y ventas de servicios turísticos. Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50984?page=95.',
    },
    {
      referencia:
        'Barrios, O. (2016). Eventos: logística de los servicios turísticos. Fundación Proturismo. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/77500?page=51',
    },
    {
      referencia:
        'Chiavenato, I. (2000). Administración de recursos humanos. (5ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Chiavenato, I. (2012). Introducción a la teoría general de la administración. McGraw-Hill.',
    },
    {
      referencia:
        'Choy, Z., E. E. (2012). El dilema de los costos en las empresas de servicios. Quipukamayoc, 20(37), ',
      link:
        'https://link.gale.com/apps/doc/A355247850/IFME?u=sena&sid=bookmark-IFME&xid=8846efce',
    },

    {
      referencia:
        'García P, M., Quispe, A., C., Ráez G., L. (2003). Mejora continua de la calidad en los procesos. Industrial Data, 6(1), 89-94.',
      link: 'https://www.redalyc.org/articulo.oa?id=81606112',
    },
    {
      referencia:
        'González, F., Palacios, J., Barcala, R., y Oleagordia, A. (2008). Primeros Auxilios y socorrismo. Paraninfo. ',
    },

    {
      referencia:
        'Fernández, L., L. (2016). Procesos económico-administrativos en agencias de viajes (MF0267_2): venta de productos y servicios turísticos. Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51057',
    },
    {
      referencia:
        'Horovitz J. (1995). La calidad del servicio. Ed. McGraw-Hill.        ',
    },
    {
      referencia:
        'Icontec y Ministerio Comercio Industria y Turismo de Colombia. (2016). Norma de competencia laboral. Prestación del servicio de la guianza NTS GT 012. Icontec y Ministerio Comercio Industria y Turismo de Colombia.',
    },
    {
      referencia:
        'Instituto Distrital de Turismo. (2020). Estudio técnico de la guianza turística en Bogotá. Instituto Distrital de Turismo.',
      link:
        'https://www.idt.gov.co/sites/default/files/pdfs%20observatorio/Estudio%20Técnico%20de%20la%20Guianza%20Turística%20en%20Bogotá%20DV%20V1.pdf',
    },
    {
      referencia:
        'Luna, G., A. C. (2015). Proceso administrativo. Grupo Editorial Patria. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39415?page=82',
    },
    {
      referencia:
        'SENA. (2018). Recursos para la guianza turística. Material de estudio del Programa tecnólogo en Guianza turística. SENA. ',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2018). Instructivo: efectuar recaudos UniSalud. Universidad Nacional de Colombia. ',
      link:
        'https://gerencia.unal.edu.co/fileadmin/user_upload/IN_Efectuar_recaudo_UNISALUD_SISS_V1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad mercantil',
      significado:
        'la que ejerce un comerciante al ofrecer en un mercado bienes y servicios en el marco de la normativa. También conocida como operación mercantil. (Cámara de Comercio de Cali, s. f.).',
    },
    {
      termino: 'Calidad',
      significado:
        'nivel de excelencia que la empresa ha escogido alcanzar para satisfacer a su clientela clave (Horovitz, 1995, p. 1). ',
    },
    {
      termino: '<i>Check in y check out</i>',
      significado:
        'hace referencia a los vocablos en inglés que hace referencia la entrada <i>“in”</i> y la salida <i>“out”</i> aplica para hoteles y aeropuertos (Chekin, 2018). ',
    },
    {
      termino: 'Lista de pasajeros',
      significado:
        'formato que describe una lista de turistas con sus nombres, apellidos y nacionalidad, la cual está a cargo del guía turístico. Es un material de consulta necesario para los recorridos que sirve para obtener información precisa sobre los visitantes (SENA, 2008).',
    },
    {
      termino: 'Material de curación',
      significado:
        'entre los más utilizados están la gasa, las vendas, apósitos, compresas, vendajes elásticos, vendajes fijos, vendajes oculares, esparadrapo, micropore, bajalenguas, copitos, curitas, y los guantes de látex (ARL SURA, s. f.).',
    },
    {
      termino: 'Material instrumental',
      significado:
        'recipientes, pinzas, tijeras, kit de succión para mordeduras de serpientes, mascarilla para maniobra de resucitación, entre otros (ARL SURA, s. f.).',
    },
    {
      termino: 'Material POP',
      significado:
        'hace referencia a las piezas publicitarias como folletos plegables, <i>mugs</i> personalizados, afiches, pendones, revistas, esferos publicitarios, bolsas impresas entre otros. El término es la sigla en inglés de <i>point of purchase</i>, que traduce punto de venta (Imprestar, 2020).',
    },
    {
      termino: 'Medicamentos',
      significado:
        'sustancia o combinación de sustancias con propiedades para prevenir, diagnosticar, tratar o curar una enfermedad, o para restaurar la salud, que se presenta como tal y cuenta con el reconocimiento de la autoridad administrativa (RAE, 2022).',
    },
    {
      termino: 'Mejora continua',
      significado:
        'en la teoría de la calidad total hace referencia al objetivo permanente de optimizar el desempeño global en el servicio (García, et. al., 2003). ',
    },
    {
      termino: 'Método',
      significado:
        'es la forma de cómo realizar una actividad previamente establecida (Escolme, s. f.).',
    },
    {
      termino: 'Operación',
      significado:
        'ejecutar o desarrollar las acciones contempladas dentro de un servicio turístico (Santana, 2003).',
    },
    {
      termino: 'Prestador de servicio turístico',
      significado:
        'según la Ley General de Turismo de Colombia es toda persona natural o jurídica domiciliada en el país o en el extranjero, que, directa o indirectamente preste, intermedie, contrate, comercialice, venda o reserve servicios turísticos (MinComercio, 2020).',
    },
    {
      termino: 'Servicio',
      significado:
        'son bienes intangibles, resultado de esfuerzos humanos o mecánicos que producen un hecho, un desempeño o un esfuerzo que implican generalmente la participación del cliente y que no es posible poseer físicamente, ni transportarlos o almacenarlos, ideada para satisfacer las necesidades o deseos de los clientes (Choy, 2012).',
    },
    {
      termino: 'Sustancias antisépticas',
      significado:
        'sustancias que previenen la infección, evitando la presencia de gérmenes que por lo general se encuentran presentes en lesiones como consecuencia de accidentes, en el mercado existen múltiples sustancias con base a yodo y alcoholes con propiedades antisépticas, los cuales según los últimos criterios técnicos se deberán utilizar en circunstancias especiales , por lo cual la medida más recomendable técnicamente en primeros auxilios, será un buen lavado de la lesión con la solución salina, suero fisiológico o agua estéril (ARL SURA, s.f.)',
    },
  ],
  complementario: [
    {
      tema:
        'Proceso administrativo y el ciclo de Planear, Hacer, Verificar y Actuar -PHVA- en el guionaje ',
      referencia:
        'Deming, W. E. (1989). Calidad, productividad y competitividad. La salida de la crisis. ',
      tipo: 'Libro',
      link:
        'https://kupdf.net/download/libro-deming-completopdf_59a06584dc0d60565e184970_pdf ',
    },
    {
      tema: 'El botiquín como equipo de seguridad ',
      referencia:
        'Palacio, A. F., López, J., J. (2012). Dotación para botiquines y ambulancias. ',
      tipo: 'Documento',
      link:
        'https://www.hospitalcivilese.gov.co/site/images/guiasyprot/GUIASAMPH/4%20dotacion%20para%20botiquines%20y%20ambulancias%2047%20a%2053.pdf',
    },
    {
      tema: 'El botiquín como equipo de seguridad ',
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución 926 de 2017 - Sistema de emergencias médicas (SEM). ',
      tipo: 'Documento',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30038017',
    },
    {
      tema: 'El botiquín como equipo de seguridad ',
      referencia:
        'Sociedad Española de Farmacia Clínica, Familiar y Comunitaria. - Sefac. (2014). Fármacos y suplementos nutricionales para llevar en el botiquín del alpinista. ',
      tipo: 'Página web',
      link:
        'https://www.farmaceuticoscomunitarios.org/es/journal-article/farmacos-suplementos-nutricionales-llevar-botiquin-del-alpinista/full',
    },
    {
      tema: 'El botiquín como equipo de seguridad ',
      referencia:
        'Presidencia de la República. (2017). Decreto 2157 de 2017. por medio del cual se adoptan directrices generales para la elaboración del plan de gestión del riesgo de desastres de las entidades públicas y privadas en el marco del artículo 42 de la Ley 1523 de 2012.',
      tipo: 'PDF',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%202157%20DEL%2020%20DE%20DICIEMBRE%20DE%202017.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oscar Manuel Gómez Murillo',
        cargo: 'Instructor',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Samira Pineda Cuevas',
        cargo: 'Instructora ',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Wilson Pacheco Gutiérrez',
        cargo: 'Instructor ',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Alejandro Perlaza Espinosa',
        cargo: 'Instructor Técnico ',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Claudia Patricia Porras Otálora',
        cargo: 'Instructora ',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Luisa Fernanda Posada Hincapié',
        cargo: 'Experta temática ',
        centro: 'Regional Quindío - Centro de Comercio, Industria y Turismo.',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Anllelo Andres Reina Montañez '],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Revisión de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
