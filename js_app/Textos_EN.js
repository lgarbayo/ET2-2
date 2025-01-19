let textos_EN = {

    // title texts
    'text_titulo_app': 'ET2 IU Interface',
    'text_titulo_menu': 'Menu Options',
    'text_titulo_pie': 'Footer',
    'text_libro': 'Books',
    'text_titulo_page_libro': 'Book Management',
    'text_contenido_titulo_form_libro_ADD': 'Add Book Form',
    'text_contenido_titulo_form_libro_EDIT': 'Edit Book Form',
    'text_contenido_titulo_form_libro_SEARCH': 'Search Book Form',
    'text_contenido_titulo_form_libro_DELETE': 'Delete Book Form',
    'text_contenido_titulo_form_libro_SHOWCURRENT': 'Current Book Form',
    'resultadodef': 'Correct format for test definition structure',
    'resultadoprueba': 'Correct format for test structure',
    'resultadotest': 'Test execution result',

    // attributes
    'CodigoL': 'Book code',
    'AutoresL': 'Book authors',
    'TituloL': 'Book title',
    'ISBN': 'Book ISBN',
    'PagIniL': 'Starting page',
    'PagFinL': 'Ending page',
    'VolumenL': 'Volume',
    'EditorialL': 'Publisher',
    'FechaPublicacionL': 'Publication date',
    'EditorL': 'Editor',
    'PaisEdicionL': 'Country of edition',
    'archivopdfL': 'Book PDF file',

    // form validation errors
    'CodigoL_min_size_KO': 'Too short. Must be at least 1 character.',
    'CodigoL_max_size_KO': 'Too long. Must be at most 11 characters.',
    'CodigoL_format_KO': 'Invalid format. Only digits are allowed.',

    'AutoresL_min_size_KO': 'Too short. Must be at least 10 characters.',
    'AutoresL_max_size_KO': 'Too long. Must be at most 200 characters.',
    'AutoresL_format_KO': 'Invalid format. Only alphabetic characters and spaces are allowed.',

    'TituloL_min_size_KO': 'Too short. Must be at least 5 characters.',
    'TituloL_max_size_KO': 'Too long. Must be at most 100 characters.',
    'TituloL_format_KO': 'Invalid format. Only alphabetic characters and spaces are allowed.',

    'ISBN_min_size_KO': 'Too short. Must be at least 13 characters.',
    'ISBN_max_size_KO': 'Too long. Must be at most 13 characters.',
    'ISBN_format_KO': 'Invalid format. Only digits are allowed.',

    'PagIniL_min_size_KO': 'Too short. Must be at least 1 character.',
    'PagIniL_max_size_KO': 'Too long. Must be at most 4 characters.',
    'PagIniL_format_KO': 'Invalid format. Only digits are allowed.',

    'PagFinL_min_size_KO': 'Too short. Must be at least 1 character.',
    'PagFinL_max_size_KO': 'Too long. Must be at most 4 characters.',
    'PagFinL_format_KO': 'Invalid format. Only digits are allowed.',
    'PagFinL_mayor_PagIniL': 'The final page must be greater than the initial page.',

    'VolumenL_min_size_KO': 'Too short. Must be at least 1 character.',
    'VolumenL_max_size_KO': 'Too long. Must be at most 4 characters.',
    'VolumenL_format_KO': 'Invalid format. Only digits are allowed.',

    'EditorialL_min_size_KO': 'Too short. Must be at least 10 characters.',
    'EditorialL_max_size_KO': 'Too long. Must be at most 100 characters.',
    'EditorialL_format_KO': 'Invalid format. Only alphabetic characters with spaces, accents, or ñ are allowed.',

    'FechaPublicacionL_format_KO': 'Invalid format. Only yyyy-mm-dd format is allowed.',
    'FechaPublicacionL_valid_date_KO': 'Invalid date.',

    'EditorL_min_size_KO': 'Too short. Must be at least 10 characters.',
    'EditorL_max_size_KO': 'Too long. Must be at most 100 characters.',
    'EditorL_format_KO': 'Invalid format. Only alphabetic characters with spaces, accents, or ñ are allowed.',

    'PaisEdicionL_min_size_KO': 'Too short. Must be at least 4 characters.',
    'PaisEdicionL_max_size_KO': 'Too long. Must be at most 20 characters.',
    'PaisEdicionL_format_KO': 'Invalid format. Only alphabetic characters with spaces, accents, or ñ are allowed.',

    'archivopdfL_empty_KO': 'The file cannot be empty. You must upload a file.',
    'archivopdfL_format_name_file_KO': 'The file name does not meet the allowed format.',
    'archivopdfL_type_file_KO': 'The file type is not allowed. Only .pdf files are accepted.',
    'archivopdfL_max_size_file_KO': 'The file exceeds the allowed size. Maximum 2 MB.',
    'archivopdfL_min_size_name_KO': 'The file name is too short. Must be at least 7 characters.',
    'archivopdfL_max_size_name_KO': 'The file name is too long. Must be less than 100 characters.',

    'true': 'Success',

    // labels
    'label_CodigoL': 'Book code',
    'label_AutoresL': 'Book authors',
    'label_TituloL': 'Book title',
    'label_ISBN': 'Book ISBN',
    'label_PagIniL': 'Starting page',
    'label_PagFinL': 'Ending page',
    'label_VolumenL': 'Volume',
    'label_EditorialL': 'Publisher',
    'label_FechaPublicacionL': 'Publication date',
    'label_EditorL': 'Editor',
    'label_PaisEdicionL': 'Country of edition',
    'label_archivopdfL': 'Book PDF file',

    // BACKEND ERRORS
    'CodigoL_es_nulo_KO': 'Book code is null. Expected but not received',
    'AutoresL_es_nulo_KO': 'Book authors are null. Expected but not received',
    'TituloL_es_nulo_KO': 'Book title is null. Expected but not received',
    'ISBN_es_nulo_KO': 'Book ISBN is null. Expected but not received',
    'PagIniL_es_nulo_KO': 'Starting page is null. Expected but not received',
    'PagFinL_es_nulo_KO': 'Ending page is null. Expected but not received',
    'VolumenL_es_nulo_KO': 'Volume is null. Expected but not received',
    'EditorialL_es_nulo_KO': 'Publisher is null. Expected but not received',
    'FechaPublicacionL_es_nulo_KO': 'Publication date is null. Expected but not received',
    'EditorL_es_nulo_KO': 'Editor is null. Expected but not received',
    'PaisEdicionL_es_nulo_KO': 'Country of edition is null. Expected but not received',
    'archivopdfL_es_nulo_KO': 'Book PDF file is null. Expected but not received',
    'SQL_OK': 'Operation completed successfully.',
    'SQL_KO': 'The operation failed due to an SQL error. Some data is not in the correct format.',
    'RECORDSET_VACIO': 'The search returned no results.',
    'RECORDSET_DATOS': 'The search returned data.'
}