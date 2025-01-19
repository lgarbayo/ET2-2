let textos_ES = {

	// textos titulos
    'text_titulo_app': 'Interfaz ET2 IU',
    'text_titulo_menu': 'Opciones de Menú',
    'text_titulo_pie': 'Pie de página',
    'text_libro': 'Libros',
    'text_titulo_page_libro': 'Gestión de Libros',
    'text_contenido_titulo_form_libro_ADD': 'Formulario Alta Libros',
    'text_contenido_titulo_form_libro_EDIT': 'Formulario Modificación Libros',
    'text_contenido_titulo_form_libro_SEARCH': 'Formulario Búsqueda Libros',
    'text_contenido_titulo_form_libro_DELETE': 'Formulario Borrado Libros',
    'text_contenido_titulo_form_libro_SHOWCURRENT': 'Formulario Actual de Libros',
    'resultadodef': 'Formato correcto estructura definición tests',
    'resultadoprueba': 'Formato correcto estructura pruebas',
    'resultadotest':'Resultado ejecución pruebas',

    // atributos
    'CodigoL': 'Código del libro',
    'AutoresL': 'Autores del libro',
    'TituloL': 'Título del libro',
    'ISBN': 'ISBN del libro',
    'PagIniL': 'Página inicial',
    'PagFinL': 'Página final',
    'VolumenL': 'Volumen',
    'EditorialL': 'Editorial',
    'FechaPublicacionL': 'Fecha de publicación',
    'EditorL': 'Editor',
    'PaisEdicionL': 'País de edición',
    'archivopdfL': 'Archivo PDF del libro',

    // labels
    'label_CodigoL': 'Código del libro',
    'label_AutoresL': 'Autores del libro',
    'label_TituloL': 'Título del libro',
    'label_ISBN': 'ISBN del libro',
    'label_PagIniL': 'Página inicial',
    'label_PagFinL': 'Página final',
    'label_VolumenL': 'Volumen',
    'label_EditorialL': 'Editorial',
    'label_FechaPublicacionL': 'Fecha de publicación',
    'label_EditorL': 'Editor',
    'label_PaisEdicionL': 'País de edición',
    'label_archivopdfL': 'Archivo PDF del libro',

	// errores validaciones formulario
    'CodigoL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 1 caracter.',
    'CodigoL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 11 caracteres.',
    'CodigoL_format_KO': 'Formato inválido. Solo se permiten dígitos.',

	'AutoresL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 10 caracteres.',
    'AutoresL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 200 caracteres.',
    'AutoresL_format_KO': 'Formato inválido. Solo se permiten caracteres alfabéticos y espacios.',

    'TituloL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 5 caracteres.',
    'TituloL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 100 caracteres.',
    'TituloL_format_KO': 'Formato inválido. Solo se permiten caracteres alfabéticos y espacios.',

    'ISBN_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 13 caracteres.',
    'ISBN_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 13 caracteres.',
    'ISBN_format_KO': 'Formato inválido. Solo se permiten dígitos.',

    'PagIniL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 1 caracter.',
    'PagIniL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 4 caracteres.',
    'PagIniL_format_KO': 'Formato inválido. Solo se permiten dígitos.',

    'PagFinL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 1 caracter.',
    'PagFinL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 4 caracteres.',
    'PagFinL_format_KO': 'Formato inválido. Solo se permiten dígitos.',
    'PagFinL_mayor_PagIniL': 'La página final debe ser mayor que la página inicial.',

    'VolumenL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 1 caracter.',
    'VolumenL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 4 caracteres.',
    'VolumenL_format_KO': 'Formato inválido. Solo se permiten dígitos.',

    'EditorialL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 10 caracteres.',
    'EditorialL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 100 caracteres.',
    'EditorialL_format_KO': 'Formato inválido. Solo se permiten caracteres alfabéticos con espacios, con acentos o con ñ.',

    'FechaPublicacionL_format_KO': 'Formato inválido. Solo se permite el formato aaaa-mm-dd.',
    'FechaPublicacionL_valid_date_KO': 'Fecha inválida.',

    'EditorL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 10 caracteres.',
    'EditorL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 100 caracteres.',
    'EditorL_format_KO': 'Formato inválido. Solo se permiten caracteres alfabéticos con espacios, con acentos o con ñ.',

    'PaisEdicionL_min_size_KO': 'Tamaño demasiado corto. Debe tener al menos 4 caracteres.',
    'PaisEdicionL_max_size_KO': 'Tamaño demasiado grande. Debe tener como máximo 20 caracteres.',
    'PaisEdicionL_format_KO': 'Formato inválido. Solo se permiten caracteres alfabéticos con espacios, con acentos o con ñ.',

    'archivopdfL_empty_KO': 'El archivo no puede estar vacío. Debe subir un archivo.',
    'archivopdfL_format_name_file_KO': 'El nombre del archivo no cumple el formato permitido.',
    'archivopdfL_type_file_KO': 'El tipo de archivo no está permitido. Solo se aceptan .pdf.',
    'archivopdfL_max_size_file_KO': 'El archivo excede el tamaño permitido. Máximo 2 MB.',
    'archivopdfL_min_size_name_KO': 'El nombre del archivo es demasiado corto. Debe tener al menos 7 caracteres.',
    'archivopdfL_max_size_name_KO': 'El nombre del archivo es demasiado largo. Debe tener menos de 100 caracteres.',

    'true': 'Éxito',

    // ERRORES BACK
    'CodigoL_es_nulo_KO': 'Código del libro es nulo. Se esperaba pero no se recibió',
    'AutoresL_es_nulo_KO': 'Autores del libro es nulo. Se esperaba pero no se recibió',
    'TituloL_es_nulo_KO': 'Título del libro es nulo. Se esperaba pero no se recibió',
    'ISBN_es_nulo_KO': 'ISBN del libro es nulo. Se esperaba pero no se recibió',
    'PagIniL_es_nulo_KO': 'Página inicial es nula. Se esperaba pero no se recibió',
    'PagFinL_es_nulo_KO': 'Página final es nula. Se esperaba pero no se recibió',
    'VolumenL_es_nulo_KO': 'Volumen es nulo. Se esperaba pero no se recibió',
    'EditorialL_es_nulo_KO': 'Editorial es nula. Se esperaba pero no se recibió',
    'FechaPublicacionL_es_nulo_KO': 'Fecha de publicación es nula. Se esperaba pero no se recibió',
    'EditorL_es_nulo_KO': 'Editor es nulo. Se esperaba pero no se recibió',
    'PaisEdicionL_es_nulo_KO': 'País de edición es nulo. Se esperaba pero no se recibió',
    'archivopdfL_es_nulo_KO': 'Archivo PDF del libro es nulo. Se esperaba pero no se recibió',
    'SQL_OK': 'Operación realizada correctamente.',
    'SQL_KO': 'La operación falló debido a un error SQL. Algunos datos no están en el formato correcto.',
    'RECORDSET_VACIO': 'La búsqueda no arrojó resultados.',
    'RECORDSET_DATOS': 'La búsqueda devolvió datos.'
}