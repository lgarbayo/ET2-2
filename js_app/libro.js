class libro extends EntidadAbstracta{

	constructor(){
		
		super();
		this.columnasamostrar = Array('CodigoL','AutoresL','TituloL','ISBN','PagIniL','PagFinL','VolumenL','EditorialL','FechaPublicacionL','EditorL','PaisEdicionL','archivopdfL');
		this.entidad = 'libro';
		this.datosespecialestabla = Array('FechaPublicacionL','archivopdfL');

		this.inicializar();


	}

	cargar_formulario_html(){
		
		// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
		this.accion = '';

		let formulario = `
			<label id="label_CodigoL" class="label_CodigoL">CodigoL</label>
    		<input type="text" id="CodigoL" name="CodigoL"></input>
    		<span id="div_error_CodigoL"><a id="error_CodigoL"></a></span>
    		<br>

   			<label id="label_AutoresL" class="label_AutoresL">AutoresL</label>
    		<input type="text" id="AutoresL" name="AutoresL"></input>
    		<span id="div_error_AutoresL"><a id="error_AutoresL"></a></span>
    		<br>

    		<label id="label_TituloL" class="label_TituloL">TituloL</label>
    		<input type="text" id="TituloL" name="TituloL"></input>
    		<span id="div_error_TituloL"><a id="error_TituloL"></a></span>
    		<br>

		    <label id="label_ISBN" class="label_ISBN">ISBN</label>
    		<input type="text" id="ISBN" name="ISBN"></input>
    		<span id="div_error_ISBN"><a id="error_ISBN"></a></span>
    		<br>

    		<label id="label_PagIniL" class="label_PagIniL">PagIniL</label>
    		<input type="text" id="PagIniL" name="PagIniL"></input>
    		<span id="div_error_PagIniL"><a id="error_PagIniL"></a></span>
    		<br>

    		<label id="label_PagFinL" class="label_PagFinL">PagFinL</label>
    		<input type="text" id="PagFinL" name="PagFinL"></input>
    		<span id="div_error_PagFinL"><a id="error_PagFinL"></a></span>
    		<br>

    		<label id="label_VolumenL" class="label_VolumenL">VolumenL</label>
    		<input type="text" id="VolumenL" name="VolumenL"></input>
    		<span id="div_error_VolumenL"><a id="error_VolumenL"></a></span>
    		<br>

    		<label id="label_EditorialL" class="label_EditorialL">EditorialL</label>
    		<input type="text" id="EditorialL" name="EditorialL"></input>
    		<span id="div_error_EditorialL"><a id="error_EditorialL"></a></span>
    		<br>

    		<label id="label_FechaPublicacionL" class="label_FechaPublicacionL">FechaPublicacionL</label>
    		<input type="text" id="FechaPublicacionL" name="FechaPublicacionL"></input>
    		<span id="div_error_FechaPublicacionL"><a id="error_FechaPublicacionL"></a></span>
    		<br>

    		<label id="label_EditorL" class="label_EditorL">EditorL</label>
    		<input type="text" id="EditorL" name="EditorL"></input>
    		<span id="div_error_EditorL"><a id="error_EditorL"></a></span>
    		<br>

    		<label id="label_PaisEdicionL" class="label_PaisEdicionL">PaisEdicionL</label>
   			<input type="text" id="PaisEdicionL" name="PaisEdicionL"></input>
    		<span id="div_error_PaisEdicionL"><a id="error_PaisEdicionL"></a></span>
    		<br>

    		<label id="label_archivopdfL" class="label_archivopdfL">archivopdfL</label>
    		<input type="text" id="archivopdfL" name="archivopdfL"></input>
    		<span id="div_error_archivopdfL"><a id="error_archivopdfL"></a></span>
    		<a id="link_archivopdfL" href="http://193.147.87.202/ET2/filesuploaded/files_archivopdfL/"><img src="./iconos/FILE.png" /></a>

    		<label id="label_nuevo_archivopdfL" class="label_nuevo_archivopdfL">nuevo_archivopdfL</label>
    		<input type="file" id="nuevo_archivopdfL" name="nuevo_archivopdfL"></input>
    		<span id="div_error_nuevo_archivopdfL"><a id="error_nuevo_archivopdfL"></a></span>
    		<br>
    	`;

		document.getElementById("IU_form").innerHTML = formulario;
	}

	/*
	creacion de formularios
	*/

	createForm_ADD(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'ADD';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_ADD';

		document.getElementById('CodigoL').setAttribute("readonly", true);
		const cookie = getCookie("lang");
		document.getElementById('CodigoL').setAttribute("placeholder", cookie == "ES" ? "Código originado automáticamente" : "Automatically generated Code");

		document.getElementById('label_archivopdfL').remove();
		document.getElementById('archivopdfL').remove();
		document.getElementById('link_archivopdfL').remove();

		this.colocarvalidaciones('ADD');
		
		this.colocarboton('ADD');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.ADD();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SEARCH(){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_SEARCH';

		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();
		document.getElementById('link_archivopdfL').remove();

		this.colocarvalidaciones('SEARCH');
		
		this.colocarboton('SEARCH');

		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.SEARCH();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_EDIT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
			// atributo creado para distinguir en comprobar_atributo() entre venir de ADD o EDIT
			this.accion = 'EDIT';
		}

		// poner titulo al formulario
		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_EDIT';

		// relleno los valores de los atributos
		this.rellenarvaloresform(parametros);

		document.getElementById('archivopdfL').setAttribute('readonly', true);
		document.getElementById('CodigoL').setAttribute('readonly', true);

		document.getElementById('FechaPublicacionL').value = this.cambiardatosespecialestabla('FechaPublicacionL', parametros.FechaPublicacionL);

		// añado el nombre de fichero a la ruta de href que tengo en el hiperenlace del fichero
		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		// coloco las validaciones
		this.colocarvalidaciones('EDIT');

		document.getElementById('archivopdfL').removeAttribute('onblur');
		
		// coloco el boton
		this.colocarboton('EDIT');

		// pongo valores a los onsubmit y action
		document.getElementById("IU_form").setAttribute('onsubmit',"return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.EDIT();");

		// pongo visible el formulario
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_DELETE(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_DELETE';

		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();
		
		this.rellenarvaloresform(parametros);

		document.getElementById('FechaPublicacionL').value = this.cambiardatosespecialestabla('FechaPublicacionL', parametros.FechaPublicacionL);

		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		// pongo no activos todos los campos
		this.ponernoactivoform();

		this.colocarboton('DELETE');


		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"javascript:validar.DELETE();");
		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	createForm_SHOWCURRENT(parametros){

		if (eval(this.cargar_formulario_html)){
			this.cargar_formulario_html();
		}

		document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_'+this.entidad+'_SHOWCURRENT';

		document.getElementById('label_nuevo_archivopdfL').remove();
		document.getElementById('nuevo_archivopdfL').remove();
		
		this.rellenarvaloresform(parametros);

		document.getElementById('FechaPublicacionL').value = this.cambiardatosespecialestabla('FechaPublicacionL', parametros.FechaPublicacionL);

		document.getElementById('link_archivopdfL').href += parametros.archivopdfL;

		this.ponernoactivoform();

		document.getElementById("IU_form").setAttribute('onsubmit',"return true;");
		document.getElementById("IU_form").setAttribute('action',"");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();

	}

	/*
	comprobacion campos ADD, EDIT
	*/

	comprobar_AutoresL(){
		if (!(this.validaciones.min_size('AutoresL',10))){
			this.mostrar_error_campo('AutoresL','AutoresL_min_size_KO');
			return 'AutoresL_min_size_KO';
		}
		if (!(this.validaciones.max_size('AutoresL',200))){
			this.mostrar_error_campo('AutoresL','AutoresL_max_size_KO');
			return 'AutoresL_max_size_KO'
		}
		if (!(this.validaciones.format('AutoresL', '^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ.,;:-\\s]+$'))){
			this.mostrar_error_campo('AutoresL','AutoresL_format_KO');
			return 'AutoresL_format_KO'
		}
		this.mostrar_exito_campo('AutoresL');
		return true;
	}

	comprobar_TituloL(){
		if (!(this.validaciones.min_size('TituloL',5))){
			this.mostrar_error_campo('TituloL','TituloL_min_size_KO');
			return 'TituloL_min_size_KO';
		}
		if (!(this.validaciones.max_size('TituloL',100))){
			this.mostrar_error_campo('TituloL','TituloL_max_size_KO');
			return 'TituloL_max_size_KO'
		}
		if (!(this.validaciones.format('TituloL', '^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ0123456789.,;:¡!¿?-\\s]+$'))){
			this.mostrar_error_campo('TituloL','TituloL_format_KO');
			return 'TituloL_format_KO'
		}
		this.mostrar_exito_campo('TituloL');
		return true;
	}

	comprobar_ISBN() {
		if (!this.validaciones.min_size('ISBN', 13)) {
			this.mostrar_error_campo('ISBN', 'ISBN_min_size_KO');
			return 'ISBN_min_size_KO';
		}
		if (!this.validaciones.max_size('ISBN', 13)) {
			this.mostrar_error_campo('ISBN', 'ISBN_max_size_KO');
			return 'ISBN_max_size_KO';
		}
		if (!this.validaciones.format('ISBN', '^[0-9]+$')) {
			this.mostrar_error_campo('ISBN', 'ISBN_format_KO');
			return 'ISBN_format_KO';
		}
		this.mostrar_exito_campo('ISBN');
		return true;
	}

	comprobar_PagIniL() {
		if (!this.validaciones.min_size('PagIniL', 1)) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_min_size_KO');
			return 'PagIniL_min_size_KO';
		}
		if (!this.validaciones.max_size('PagIniL', 4)) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_max_size_KO');
			return 'PagIniL_max_size_KO';
		}
		if (!this.validaciones.format('PagIniL', '^[0-9]+$')) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_format_KO');
			return 'PagIniL_format_KO';
		}
		this.mostrar_exito_campo('PagIniL');
		return true;
	}

	comprobar_PagFinL() {
		if (!this.validaciones.min_size('PagFinL', 1)) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_min_size_KO');
			return 'PagFinL_min_size_KO';
		}
		if (!this.validaciones.max_size('PagFinL', 4)) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_max_size_KO');
			return 'PagFinL_max_size_KO';
		}
		if (!this.validaciones.format('PagFinL', '^[0-9]+$')) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_format_KO');
			return 'PagFinL_format_KO';
		}
		if (!this.validacionesespeciales('PagFinL', 'PagFinL_mayor_PagIniL')) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_mayor_PagIniL');
			return 'PagFinL_mayor_PagIniL';
		}
		this.mostrar_exito_campo('PagFinL');
		return true;
	}

	comprobar_VolumenL() {
		if (!this.validaciones.min_size('VolumenL', 1)) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_min_size_KO');
			return 'VolumenL_min_size_KO';
		}
		if (!this.validaciones.max_size('VolumenL', 4)) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_max_size_KO');
			return 'VolumenL_max_size_KO';
		}
		if (!this.validaciones.format('VolumenL', '^[0-9]+$')) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_format_KO');
			return 'VolumenL_format_KO';
		}
		this.mostrar_exito_campo('VolumenL');
		return true;
	}	

	comprobar_EditorialL() {
		if (!this.validaciones.min_size('EditorialL', 10)) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_min_size_KO');
			return 'EditorialL_min_size_KO';
		}
		if (!this.validaciones.max_size('EditorialL', 100)) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_max_size_KO');
			return 'EditorialL_max_size_KO';
		}
		if (!this.validaciones.format('EditorialL', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_format_KO');
			return 'EditorialL_format_KO';
		}
	
		this.mostrar_exito_campo('EditorialL');
		return true;
	}

	comprobar_FechaPublicacionL(){
		if (!(this.validaciones.format('FechaPublicacionL','[0-9]{4}-[0-9]{2}-[0-9]{2}$'))){
			this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_format_KO');
			return 'FechaPublicacionL_format_KO';
		}
		if (!(this.validacionesespeciales('FechaPublicacionL','fechavalida'))){
			this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_valid_KO');
			return 'FechaPublicacionL_valid_KO';
		}
		this.mostrar_exito_campo('FechaPublicacionL');
		return true;

	}

	comprobar_EditorL() {
		if (!this.validaciones.min_size('EditorL', 10)) {
			this.mostrar_error_campo('EditorL', 'EditorL_min_size_KO');
			return 'EditorL_min_size_KO';
		}
		if (!this.validaciones.max_size('EditorL', 100)) {
			this.mostrar_error_campo('EditorL', 'EditorL_max_size_KO');
			return 'EditorL_max_size_KO';
		}
		if (!this.validaciones.format('EditorL', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('EditorL', 'EditorL_format_KO');
			return 'EditorL_format_KO';
		}
	
		this.mostrar_exito_campo('EditorL');
		return true;
	}

	comprobar_PaisEdicionL() {
		if (!this.validaciones.min_size('PaisEdicionL', 4)) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_min_size_KO');
			return 'PaisEdicionL_min_size_KO';
		}
		if (!this.validaciones.max_size('PaisEdicionL', 20)) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_max_size_KO');
			return 'PaisEdicionL_max_size_KO';
		}
		if (!this.validaciones.format('PaisEdicionL', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_format_KO');
			return 'PaisEdicionL_format_KO';
		}
	
		this.mostrar_exito_campo('PaisEdicionL');
		return true;
	}

	comprobar_nuevo_archivopdfL(){
		if (document.getElementById('nuevo_archivopdfL').files.length == 0){
			if (this.accion == 'EDIT'){
				return true;
			}
			else{
				if (this.accion = "ADD"){
					this.mostrar_error_campo('nuevo_archivopdfL','archivopdfL_empty_KO');
					return 'archivopdfL_empty_KO';
				}
			}
		}

		// si tuviera un campo con multiples ficheros tendria que hacer un bucle para comprobar cada file[i]
		let mifichero = document.getElementById('nuevo_archivopdfL').files[0];

		if (!this.validaciones.max_size_file(mifichero, 500000)) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_max_size_file_KO');
			return 'archivopdfL_max_size_file_KO';
		}
		
		if (!this.validaciones.type_file(mifichero, Array('application/pdf'))) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_type_file_KO');
			return 'archivopdfL_type_file_KO';
		}
		
		if (!this.validaciones.min_size('nuevo_archivopdfL', 5)) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_min_size_name_KO');
			return 'archivopdfL_min_size_name_KO';
		}
		
		if (!this.validaciones.max_size('nuevo_archivopdfL', 20)) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_max_size_name_KO');
			return 'archivopdfL_max_size_name_KO';
		}
		
		if (!this.validaciones.format_name_file(mifichero, '^[A-Za-z.]+$')) {
			this.mostrar_error_campo('nuevo_archivopdfL', 'archivopdfL_format_name_file_KO');
			return 'archivopdfL_format_name_file_KO';
		}
		
		this.mostrar_exito_campo('nuevo_archivopdfL');
		return true;
		
	}

	comprobar_submit() {
		let result = 
			this.comprobar_AutoresL() &
			this.comprobar_TituloL() &
			this.comprobar_ISBN() &
			this.comprobar_PagIniL() &
			this.comprobar_PagFinL() &
			this.comprobar_VolumenL() &
			this.comprobar_EditorialL() &
			this.comprobar_FechaPublicacionL() &
			this.comprobar_EditorL() &
			this.comprobar_PaisEdicionL() &
			this.comprobar_nuevo_archivopdfL();
	
		result = Boolean(result);
	
		return result;
	}

	/*
	comprobacion campos SEARCH
	*/

	comprobar_CodigoL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('CodigoL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('CodigoL', 11)) {
			this.mostrar_error_campo('CodigoL', 'CodigoL_max_size_KO');
			return 'CodigoL_max_size_KO';
		}
		if (!this.validaciones.format('CodigoL', '^[0-9]+$')) {
			this.mostrar_error_campo('CodigoL', 'CodigoL_format_KO');
			return 'CodigoL_format_KO';
		}
		this.mostrar_exito_campo('CodigoL');
		return true;
	}

	comprobar_AutoresL_SEARCH(){
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('AutoresL', 1)) {
			return true;
		}
		if (!(this.validaciones.max_size('AutoresL',200))){
			this.mostrar_error_campo('AutoresL','AutoresL_max_size_KO');
			return 'AutoresL_max_size_KO'
		}
		if (!(this.validaciones.format('AutoresL', '^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ.,;:-\\s]+$'))){
			this.mostrar_error_campo('AutoresL','AutoresL_format_KO');
			return 'AutoresL_format_KO'
		}
		this.mostrar_exito_campo('AutoresL');
		return true;
	}

	comprobar_TituloL_SEARCH(){
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('TituloL', 1)) {
			return true;
		}
		if (!(this.validaciones.max_size('TituloL',100))){
			this.mostrar_error_campo('TituloL','TituloL_max_size_KO');
			return 'TituloL_max_size_KO'
		}
		if (!(this.validaciones.format('TituloL', '^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ0123456789.,;:¡!¿?-\\s]+$'))){
			this.mostrar_error_campo('TituloL','TituloL_format_KO');
			return 'TituloL_format_KO'
		}
		this.mostrar_exito_campo('TituloL');
		return true;
	}

	comprobar_ISBN_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('ISBN', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('ISBN', 13)) {
			this.mostrar_error_campo('ISBN', 'ISBN_max_size_KO');
			return 'ISBN_max_size_KO';
		}
		if (!this.validaciones.format('ISBN', '^[0-9]+$')) {
			this.mostrar_error_campo('ISBN', 'ISBN_format_KO');
			return 'ISBN_format_KO';
		}
		this.mostrar_exito_campo('ISBN');
		return true;
	}

	comprobar_PagIniL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('PagIniL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('PagIniL', 4)) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_max_size_KO');
			return 'PagIniL_max_size_KO';
		}
		if (!this.validaciones.format('PagIniL', '^[0-9]+$')) {
			this.mostrar_error_campo('PagIniL', 'PagIniL_digits_KO');
			return 'PagIniL_format_KO';
		}
		this.mostrar_exito_campo('PagIniL');
		return true;
	}

	comprobar_PagFinL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('PagFinL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('PagFinL', 4)) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_max_size_KO');
			return 'PagFinL_max_size_KO';
		}
		if (!this.validaciones.format('PagFinL', '^[0-9]+$')) {
			this.mostrar_error_campo('PagFinL', 'PagFinL_digits_KO');
			return 'PagFinL_format_KO';
		}
		this.mostrar_exito_campo('PagFinL');
		return true;
	}

	comprobar_VolumenL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('VolumenL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('VolumenL', 4)) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_max_size_KO');
			return 'VolumenL_max_size_KO';
		}
		if (!this.validaciones.format('VolumenL', '^[0-9]+$')) {
			this.mostrar_error_campo('VolumenL', 'VolumenL_digits_KO');
			return 'VolumenL_format_KO';
		}
		this.mostrar_exito_campo('VolumenL');
		return true;
	}	

	comprobar_EditorialL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('EditorialL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('EditorialL', 100)) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_max_size_KO');
			return 'EditorialL_max_size_KO';
		}
		if (!this.validaciones.format('EditorialL', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('EditorialL', 'EditorialL_format_KO');
			return 'EditorialL_format_KO';
		}
	
		this.mostrar_exito_campo('EditorialL');
		return true;
	}

	comprobar_FechaPublicacionL_SEARCH(){
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('FechaPublicacionL', 1)) {
			return true;
		}
		if (!(this.validaciones.format('FechaPublicacionL','[0-9]{4}-[0-9]{2}-[0-9]{2}$'))){
			this.mostrar_error_campo('FechaPublicacionL','FechaPublicacionL_format_KO');
			return 'FechaPublicacionL_format_KO';
		}
		this.mostrar_exito_campo('FechaPublicacionL');
		return true;

	}

	comprobar_EditorL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('EditorL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('EditorL', 100)) {
			this.mostrar_error_campo('EditorL', 'EditorL_max_size_KO');
			return 'EditorL_max_size_KO';
		}
		if (!this.validaciones.format('EditorL', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('EditorL', 'EditorL_format_KO');
			return 'EditorL_format_KO';
		}
	
		this.mostrar_exito_campo('EditorL');
		return true;
	}

	comprobar_PaisEdicionL_SEARCH() {
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('PaisEdicionL', 1)) {
			return true;
		}
		if (!this.validaciones.max_size('PaisEdicionL', 20)) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_max_size_KO');
			return 'PaisEdicionL_max_size_KO';
		}
		if (!this.validaciones.format('PaisEdicionL', '^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$')) {
			this.mostrar_error_campo('PaisEdicionL', 'PaisEdicionL_format_KO');
			return 'PaisEdicionL_format_KO';
		}
	
		this.mostrar_exito_campo('PaisEdicionL');
		return true;
	}

	comprobar_archivopdfL_SEARCH(){
		//para poder buscar por un campo solamente, es decir, que este campo sea vacío
		if (!this.validaciones.min_size('archivopdfL', 1)) {
			return true;
		}
		if (!(this.validaciones.max_size('archivopdfL',20))){
			this.mostrar_error_campo('archivopdfL','archivopdfL_max_size_name_KO');
			return 'archivopdfL_max_size_name_KO';
		}
		if (!(this.validaciones.format('archivopdfL','^[a-zA-Z.]+$'))){
			this.mostrar_error_campo('archivopdfL','archivopdfL_format_name_file_KO');
			return 'archivopdfL_format_name_file_KO';
		}
		this.mostrar_exito_campo('nuevo_archivopdfL');
		return true;
	}

	comprobar_submit_SEARCH() {
		let result = 
			this.comprobar_CodigoL_SEARCH() &
			this.comprobar_AutoresL_SEARCH() &
			this.comprobar_TituloL_SEARCH() &
			this.comprobar_ISBN_SEARCH() &
			this.comprobar_PagIniL_SEARCH() &
			this.comprobar_PagFinL_SEARCH() &
			this.comprobar_VolumenL_SEARCH() &
			this.comprobar_EditorialL_SEARCH() &
			this.comprobar_FechaPublicacionL_SEARCH() &
			this.comprobar_EditorL_SEARCH() &
			this.comprobar_PaisEdicionL_SEARCH() &
			this.comprobar_archivopdfL_SEARCH();
	
		result = Boolean(result);
	
		return result;
	}

	/*
		metodo para mostrar información especial de atributo en la tabla de muestra de tuplas
	*/

	cambiardatosespecialestabla(atributo, valoratributo){

		if (atributo == 'archivopdfL'){

			if (valoratributo == ''){
				return "no hay fichero";
			}
			let texto = valoratributo; 
			texto += `<a id="link_archivopdfL" href="http://193.147.87.202/ET2/filesuploaded/files_archivopdfL/`;
			texto += valoratributo;
			texto += `"><img src="./iconos/FILE.png" /></a>`;

			return texto;

		}

		if (atributo == 'FechaPublicacionL'){

			let fech = valoratributo.split('-');
			let fechaformateada = fech[0] + '-' + fech[1] + '-' + fech[2];
    		return fechaformateada;

		}

	}

	/*
		metodo para validaciones especiales de atributos en los formularios
	*/

	validacionesespeciales(atributo, prueba, specialCaseValue) {
		let fecha = document.getElementById(atributo).value;

		if (atributo == "FechaPublicacionL") {
			if (prueba == "fechavalida") {

				let fechaf = fecha.split("-");
				if (fechaf.length !== 3) return false;

				let year = parseInt(fechaf[0], 10);
				let month = parseInt(fechaf[1], 10) - 1; // Restar 1 porque los meses en Date van de 0 a 11
				let day = parseInt(fechaf[2], 10);

				if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

				if (month < 0 || month > 11 || day <= 0) return false;

				let date = new Date(year, month, day);

				if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
					return false;
				}

				return true;

			} 
		}

		if (atributo == "PagIniL" || atributo == "PagFinL") {
			if(prueba == "PagFinL_mayor_PagIniL") {
				let inicial = document.getElementById('PagIniL').value;
				let final = document.getElementById('PagFinL').value;

				if(!inicial) {
					return true;
				}

				let inicialEsValida = this.validaciones.format('PagIniL', '[0-9]+$') && this.validaciones.max_size('PagIniL', 4) && this.validaciones.min_size('PagIniL', 1);
				let finalEsValida = this.validaciones.format('PagFinL', '[0-9]+$') && this.validaciones.max_size('PagFinL', 4) && this.validaciones.min_size('PagFinL', 1);

				if (!inicialEsValida || !finalEsValida) {
					return false;
				}

				let pagIni = parseInt(inicial, 10);
				let pagFin = parseInt(final, 10);

				if (isNaN(pagIni) || isNaN(pagFin)) {
					return false;
				}

				return pagFin > pagIni;
			}
		}

		return false;
	}

	/*
	metodos auxiliares
	*/
	colocarboton(accion){

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('IU_form').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/'+accion+'.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

	}

	rellenarvaloresform(parametros){
		
		//obtener campos del formulario
        	let campos = document.forms['IU_form'].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
			if (document.getElementById(campos[i].id).type == 'file'){
                
			}
			else{
                		document.getElementById(campos[i].id).value = parametros[campos[i].id];
			}
        	}
	}

	colocarvalidaciones(accion){
		
		let evento;
		//obtener campos del formulario
        	let campos = document.forms['IU_form'].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && (document.getElementById(campos[i].id).type !== 'file')){
		                evento = 'onblur';
			}
			else{
				evento = 'onchange';
			}
		if (accion == 'SEARCH'){
			document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'_'+accion+'();');
		}
		else{
			document.getElementById(campos[i].id).setAttribute (evento,'validar.comprobar_'+campos[i].id+'();');
		}
        
		}
	}

	ponernoactivoform(){
		//obtener campos del formulario
	        let campos = document.forms['IU_form'].elements;
	        //recorrer todos los campos
	        for (let i=0;i<campos.length;i++) {
	                document.getElementById(campos[i].id).setAttribute('readonly', true);
	        }
	}
}
