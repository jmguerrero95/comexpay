const mostrar = (elemento) => {
  elemento.style.display = 'flex';
}
const mostrarBlock = (elemento) => {
  elemento.style.display = 'block';
}
const ocultar = (elemento) => {
  elemento.style.display = 'none';
}

function block_recuperar(data){
  const bloqueIniciar = document.getElementById("bloqueIniciar");
  const bloqueRecuperar = document.getElementById("bloqueRecuperar");
  bloqueIniciar.style.display = "none";
  bloqueRecuperar.style.display = "block";
}
function block_recuperarMov(){
  const bloqueIniciar = document.getElementById("primerbloq");
  const bloqueRecuperar = document.getElementById("segunbloq");
  bloqueIniciar.style.display = "none";
  bloqueRecuperar.style.display = "block";
}
function recuperar(){
  const email = document.getElementById("email_recu").value;
  const formData = new FormData();
  formData.append('email', email);
  axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/recuperar", formData, {headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      Swal.fire({
        icon: "success",
        title: "Revisa tu bandeja de entrada del correo electronico",
        showConfirmButton: false,
        timer: 4000
      })
    }).catch(function (err){
      console.log(err)
    })
}
function recuperarMov(){
  const email = document.getElementById("email_recu2").value;
  const formData = new FormData();
  formData.append('email', email);
  axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/recuperar", formData, {headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      const bloqueIniciar = document.getElementById("segunbloq");
      const bloqueRecuperar = document.getElementById("primerbloq");
      bloqueIniciar.style.display = "none";
      bloqueRecuperar.style.display = "block";
      Swal.fire({
        icon: "success",
        title: "Revisa tu bandeja de entrada del correo electronico",
        showConfirmButton: false,
        timer: 4000
      })
    }).catch(function (err){
      console.log(err)
    })
}


function veri_nombre(data){
  if(data == ""){
    const block_nombre = document.getElementById("nombre_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("name").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("nombre_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("name").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_nombreMov(data){
  if(data == ""){
    const block_nombre = document.getElementById("nombreMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("name2").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("nombreMov_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("name2").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_apellido(data){
  if(data == ""){
    const block_nombre = document.getElementById("apellido_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("apellido").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("apellido_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("apellido").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_apellidoMov(data){
  if(data == ""){
    const block_nombre = document.getElementById("apellidoMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("apellido2").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("apellidoMov_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("apellido2").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_email(data){
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(data == ""){
    const block_nombre = document.getElementById("email_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email").style.borderColor = "red";
  }else
  if( !validEmail.test(data) && data != ""){
    const block_nombre = document.getElementById("email_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    document.getElementById("email").style.borderColor = "red";
	}


  else{
    const block_nombre = document.getElementById("email_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_emailLogMov(data){
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(data == ""){
    const block_nombre = document.getElementById("emailMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log2").style.borderColor = "red";
  }else
  if( !validEmail.test(data) && data != ""){
    const block_nombre = document.getElementById("emailMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    document.getElementById("email_log2").style.borderColor = "red";
	}


  else{
    const block_nombre = document.getElementById("emailMov_valLog");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log2").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_emailLog(data){
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(data == ""){
    const block_nombre = document.getElementById("email_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log").style.borderColor = "red";
  }else
  if( !validEmail.test(data) && data != ""){
    const block_nombre = document.getElementById("email_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    document.getElementById("email_log").style.borderColor = "red";
	}


  else{
    const block_nombre = document.getElementById("email_valLog");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_emailMov(data){
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(data == ""){
    const block_nombre = document.getElementById("emailMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email2").style.borderColor = "red";
  }else
  if( !validEmail.test(data) && data != ""){
    const block_nombre = document.getElementById("emailMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    document.getElementById("email2").style.borderColor = "red";
	}


  else{
    const block_nombre = document.getElementById("emailMov_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email2").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_pass(data){
  if(data == ""){
    const block_nombre = document.getElementById("pass_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password").style.borderColor = "red";
  }else
  if(data.length < 8){
    const block_nombre = document.getElementById("pass_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Minimo 8 caracteres alfanumericos"
    document.getElementById("password").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("pass_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_passMov(data){
  if(data == ""){
    const block_nombre = document.getElementById("passMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password2").style.borderColor = "red";
  }else
  if(data.length < 8){
    const block_nombre = document.getElementById("passMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Minimo 8 caracteres alfanumericos"
    document.getElementById("password2").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("passMov_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password2").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_passLog(data){
  if(data == ""){
    const block_nombre = document.getElementById("passLog_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_ini").style.borderColor = "red";
  }else
  if(data.length < 8){
    const block_nombre = document.getElementById("passLog_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Minimo 8 caracteres alfanumericos"
    document.getElementById("password_ini").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("passLog_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_ini").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function veri_passLogMov(data){
  if(data == ""){
    const block_nombre = document.getElementById("passMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_log2").style.borderColor = "red";
  }else
  if(data.length < 8){
    const block_nombre = document.getElementById("passMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Minimo 8 caracteres alfanumericos"
    document.getElementById("password_log2").style.borderColor = "red";
  }
  else{
    const block_nombre = document.getElementById("passMov_valLog");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_log2").style.borderColor = "#DEE2E6";
  }
  console.log(data)
}

function blockLogin(valor){
  let login = document.getElementById('login');
  let iniciar = document.getElementById('iniciar');
  console.log(window.getComputedStyle(login).display)
  if(valor == 1){

    mostrarBlock(login)
    ocultar(iniciar)
  }
  if(valor == 2){

    mostrarBlock(iniciar)
    const bloqueIniciar = document.getElementById("bloqueIniciar");
    const bloqueRecuperar = document.getElementById("bloqueRecuperar");
    bloqueIniciar.style.display = "block";
    bloqueRecuperar.style.display = "none";
    ocultar(login)
  }

}
function cerrar(){
  let login = document.getElementById('login');
  let iniciar = document.getElementById('iniciar');
  ocultar(login)
  ocultar(iniciar)

}
document.getElementById("password").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    crear();
  }
});
function crear(){
  var isChecked = document.getElementById('terminos').checked;
  var isChecked2 = document.getElementById('politicacheck').checked;
  var isChecked3 = document.getElementById('tratamientocheck').checked;
  if(!isChecked){
    Swal.fire({
      icon: "error",
      title: "debe aprobar los terminos y condiciones.",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  if(!isChecked2){
    Swal.fire({
      icon: "error",
      title: "debe aprobar las Politicas de cookies.",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  if(!isChecked3){
    Swal.fire({
      icon: "error",
      title: "debe aprobar el Tratamiento de datos personales.",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  nombre = document.getElementById("name").value
  if(nombre == ""){
    const block_nombre = document.getElementById("nombre_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("name").style.borderColor = "red";
    return
  }
  apellido = document.getElementById("apellido").value
  if(apellido == ""){
    const block_nombre = document.getElementById("apellido_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("apellido").style.borderColor = "red";
    return
  }
  email = document.getElementById("email").value
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( !validEmail.test(email) ){
    const block_nombre = document.getElementById("email_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    return
	}
  if(email == ""){
    const block_nombre = document.getElementById("email_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email").style.borderColor = "red";
    return
  }
  phone = document.getElementById("phone").value
  if(phone == ""){
    Swal.fire({
      icon: "error",
      title: "Campo telefono no debe estar vacio",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  password = document.getElementById("password").value
  if(password == ""){
    const block_nombre = document.getElementById("pass_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password").style.borderColor = "red";
    return
  }
  if(password.length < 8){
    const block_nombre = document.getElementById("pass_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password").style.borderColor = "red";
    return
  }

  const formData = new FormData();
  formData.append('name', nombre);
  formData.append('lastName', apellido);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('password', password);
  axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/user", formData, {headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      console.log(res.data)
      if(res.data.data === 0){
        Swal.fire({
          icon: "error",
          title: "Correo ya esta en uso",
          showConfirmButton: false,
          timer: 3000
        })
        return
      }
      Swal.fire({
        icon: "success",
        title: "Cuenta creada exitosamente!! revisa tu bandeja de entrada",
        showConfirmButton: false,
        timer: 3000
      })
      let login = document.getElementById('login');
      let iniciar = document.getElementById('iniciar');
      mostrarBlock(iniciar)
      ocultar(login)
      console.log(res)

    }).catch(function(err) {
      Swal.fire({
        icon: "error",
        title: "Error intentalo nuevamente",
        showConfirmButton: false,
        timer: 1500
      })
      console.log(err)
    })
}

function crearMov(){
  var isChecked = document.getElementById('terminosMov').checked;
  var isChecked2 = document.getElementById('politicaMov').checked;
  var isChecked3 = document.getElementById('tratamientoMov').checked;
  if(!isChecked){
    Swal.fire({
      icon: "error",
      title: "debe aprobar los terminos y condiciones",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  if(!isChecked2){
    Swal.fire({
      icon: "error",
      title: "debe aprobar las Politicas de cookies",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  if(!isChecked3){
    Swal.fire({
      icon: "error",
      title: "debe aprobar el Tratamiento de datos personales.",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  nombre = document.getElementById("name2").value
  if(nombre == ""){
    const block_nombre = document.getElementById("nombreMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("name2").style.borderColor = "red";
    return
  }
  apellido = document.getElementById("apellido2").value
  if(apellido == ""){
    const block_nombre = document.getElementById("apellidoMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("apellido2").style.borderColor = "red";
    return
  }
  email = document.getElementById("email2").value
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( !validEmail.test(email) ){
    const block_nombre = document.getElementById("emailMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    return
	}
  if(email == ""){
    const block_nombre = document.getElementById("emailMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email2").style.borderColor = "red";
    return
  }
  phone = document.getElementById("phone2").value
  if(phone == ""){
    Swal.fire({
      icon: "error",
      title: "Campo telefono no debe estar vacio",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  password = document.getElementById("password2L").value
  console.log(password)
  if(password == ""){
    const block_nombre = document.getElementById("passMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password2L").style.borderColor = "red";
    return
  }
  if(password.length < 8){
    const block_nombre = document.getElementById("passMov_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "contraseña minimo 8 caracteres alfanumericos"
    document.getElementById("password2L").style.borderColor = "red";
    return
  }

  const formData = new FormData();
  formData.append('name', nombre);
  formData.append('lastName', apellido);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('password', password);
  axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/user", formData, {headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      console.log(res.data)
      if(res.data.data === 0){
        Swal.fire({
          icon: "error",
          title: "Correo ya esta en uso",
          showConfirmButton: false,
          timer: 3000
        })
        return
      }
      Swal.fire({
        icon: "success",
        title: "Cuenta creada exitosamente!! revisa tu bandeja de entreda",
        showConfirmButton: false,
        timer: 3000
      })
      let login = document.getElementById('login');
      let iniciar = document.getElementById('iniciar');
      mostrarBlock(iniciar)
      ocultar(login)
      console.log(res)

    }).catch(function(err) {
      Swal.fire({
        icon: "error",
        title: "Error intentalo nuevamente",
        showConfirmButton: false,
        timer: 1500
      })
      console.log(err)
    })
}
/*document.getElementById("password_ini").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    iniciar();
  }
});*/
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto
  iniciar();          // Llama a la función de inicio de sesión
});
function iniciar(){
  email = document.getElementById("email_log").value
  password = document.getElementById("password_ini").value
  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if(email == ""){
    const block_nombre = document.getElementById("email_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log").style.borderColor = "red";
    return
  }else
  if( !validEmail.test(email) && email != ""){
    const block_nombre = document.getElementById("email_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    document.getElementById("email_log").style.borderColor = "red";
    return
	}
  else{
    const block_nombre = document.getElementById("email_valLog");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log").style.borderColor = "#DEE2E6";
  }
  if(password == ""){
    const block_nombre = document.getElementById("passLog_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_ini").style.borderColor = "red";
    return
  }else
  if(password.length < 8){
    const block_nombre = document.getElementById("passLog_val");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Minimo 8 caracteres alfanumericos"
    document.getElementById("password_ini").style.borderColor = "red";
    return
  }
  else{
    const block_nombre = document.getElementById("passLog_val");
    block_nombre.style.display = "none";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_ini").style.borderColor = "#DEE2E6";
  }

  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/login", formData, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      if(res.data.veri==0){
        location.href = "https://app.comexpay.co/pages/verificacion/verificarEmail"
      }
      if(res.data.data[0] == undefined){
        axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/admin", formData, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
          .then(function(res) {
            if(res.response.status == 401){
              Swal.fire({
                icon: "error",
                title: "Email o contraseña incorrectos",
                showConfirmButton: false,
                timer: 1500
              })
              return
            }
            console.log(res.data.data)
            if(res.data.data[0] == undefined){
              Swal.fire({
                icon: "error",
                title: "Email o contraseña incorrectos",
                showConfirmButton: false,
                timer: 1500
              })
              return
            }
            console.log(res)
            if(res.data.data == 0){
              Swal.fire({
                icon: "error",
                title: "Email no ha sido verificado",
                showConfirmButton: false,
                timer: 1500
              })
              return
            }
            else{
              console.log(data.data)
              //localStorage.id = res.data.data[0]._id
              //location.href ='https://app.comexpay.co/home';
            }
          }).catch(function(err) {
            if(err.response.status == 401){
              Swal.fire({
                icon: "error",
                title: "Email o contraseña incorrectos",
                showConfirmButton: false,
                timer: 1500
              })
              return
            }
          })
      }else{
        localStorage.clear();
        localStorage.id = res.data.data[0]._id
        if(res.data.data[0].phoneVerifi == false){
          location.href ='https://app.comexpay.co/pages/verificacion/verificarNum';
        }else
        location.href ='https://app.comexpay.co/dashboard';
      }

    }).catch(function(err) {
      if(err.response.status == 401){
        axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/admin", formData, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
        .then(function(res) {

          location.href ='https://app.comexpay.co/home';


          /*if(res.data.data[0] == undefined){
            Swal.fire({
              icon: "error",
              title: "Email o contraseña incorrectos",
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            localStorage.id = res.data.data[0]._id
            location.href ='https://app.comexpay.co/home';
          }*/
        }).catch(function(err) {
          Swal.fire({
            icon: "error",
            title: "Email o contraseña incorrectos",
            showConfirmButton: false,
            timer: 1500
          })
          return
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "Intentalo de nuevo mas tarde",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
}
function iniciarMov(){
  email = document.getElementById("email_log2").value
  password = document.getElementById("password_log2").value

  var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( !validEmail.test(email) ){
    const block_nombre = document.getElementById("emailMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Correo invalido"
    return
	}
  if(email == ""){
    const block_nombre = document.getElementById("emailMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("email_log2").style.borderColor = "red";
    return
  }


  if(email == ""){
    Swal.fire({
      icon: "error",
      title: "Campo email no debe estar vacio",
      showConfirmButton: false,
      timer: 3000
    })
    return
  }
  if(password == ""){
    const block_nombre = document.getElementById("passMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "Campo obligatorio"
    document.getElementById("password_log2").style.borderColor = "red";
    return
  }
  if(password.length < 8){
    const block_nombre = document.getElementById("passMov_valLog");
    block_nombre.style.display = "block";
    block_nombre.innerText = "contraseña minimo 8 caracteres alfanumericos"
    document.getElementById("password_log2").style.borderColor = "red";
    return
  }


  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/login", formData, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
      if(res.data.veri==0){
        location.href = "https://app.comexpay.co/pages/verificacion/verificarEmail"
      }
      console.log(res.data.data)
      if(res.data.data[0] == undefined){
        axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/admin", formData, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
        .then(function(res) {
          if(res.response.status == 401){
            Swal.fire({
              icon: "error",
              title: "Email o contraseña incorrectos",
              showConfirmButton: false,
              timer: 1500
            })
            return
          }
          console.log(res.data.data)
          if(res.data.data[0] == undefined){
            Swal.fire({
              icon: "error",
              title: "Email o contraseña incorrectos",
              showConfirmButton: false,
              timer: 1500
            })
            return
          }
          if(res.data.data == 0){
            Swal.fire({
              icon: "error",
              title: "Email no ha sido verificado",
              showConfirmButton: false,
              timer: 1500
            })
            return
          }
          else{
            //localStorage.id = res.data.data[0]._id
            //location.href ='https://app.comexpay.co/home';
          }
        }).catch(function(err) {
          if(err.response.status == 401){
            Swal.fire({
              icon: "error",
              title: "Email o contraseña incorrectos",
              showConfirmButton: false,
              timer: 1500
            })
            return
          }
        })
      }else{
        localStorage.id = res.data.data[0]._id
          if(res.data.data[0].phoneVerifi == false){
            location.href ='https://app.comexpay.co/pages/verificacion/verificarNum';
          }else
          location.href ='https://app.comexpay.co/dashboard';
      }

    }).catch(function(err) {
      if(err.response.status == 401){
        axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/admin", formData, {withCredentials: true, headers: { 'Content-Type': 'multipart/form-data'}})
        .then(function(res) {
          location.href ='https://app.comexpay.co/home';
          /*if(err.response.status == 401){
              Swal.fire({
                icon: "error",
                title: "Email o contraseña incorrectos",
                showConfirmButton: false,
                timer: 1500
              })
              return
          }
          console.log(res.data.data)
          if(res.data.data[0] == undefined){
            Swal.fire({
              icon: "error",
              title: "Email o contraseña incorrectos",
              showConfirmButton: false,
              timer: 1500
            })
          }else{
            localStorage.id = res.data.data[0]._id
            location.href ='https://app.comexpay.co/home';
          }*/
        }).catch(function(err) {
          if(err.response.status == 401){
            Swal.fire({
              icon: "error",
              title: "Email o contraseña incorrectos",
              showConfirmButton: false,
              timer: 1500
            })
            return
          }
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "Intentalo de nuevo mas tarde",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
}
window.addEventListener("scroll", () => {
  let scrollAbajo = window.scrollY;
  if(scrollAbajo <= 5 ){
    const nav_mov = document.getElementById("nav_mov");
    nav_mov.style.backgroundColor = "white";
    const iconNav = document.getElementById("iconNav");
    iconNav.style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(116, 42, 206)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
    console.log("bien")
    const imagen1 = document.getElementById("imagen1");
    const imagen2 = document.getElementById("imagen2");
    imagen1.style.display = "none";
    imagen2.style.display = "block";
  }else{
    const nav_mov = document.getElementById("nav_mov");
    nav_mov.style.backgroundColor = "#742ACE";
    const iconNav = document.getElementById("iconNav");
    iconNav.style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
    const imagen1 = document.getElementById("imagen1");
    const imagen2 = document.getElementById("imagen2");
    imagen1.style.display = "block";
    imagen2.style.display = "none";

  }
})