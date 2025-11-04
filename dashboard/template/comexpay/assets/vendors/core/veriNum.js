function verificar(){
    const codigo = document.getElementById("codigo").value
    const id = localStorage.id
    const formData = new FormData
    formData.append('id', id)
    formData.append('codigo', codigo)

    axios.post("https://api.comexpay.co/api/v1/comexpayRoutes/veriNumero", formData, {headers: { 'Content-Type': 'multipart/form-data'}})
    .then(function(res) {
        if(res.data.data.phoneVerifi == undefined){
            Swal.fire({
                icon: "error",
                title: "Error en el codigo",
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({
                icon: "success",
                title: "Numero verificado con exito",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                location.href ='https://app.comexpay.co/dashboard';
            })
        }
    }).catch(function(err){
        console.log(err)
    })

}