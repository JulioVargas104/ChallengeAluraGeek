export function accionFormulario() {
    const botonLimpiar = document.querySelector("[data-limpiar]");
    const elFormulario = document.querySelector("[data-formulario]");

    botonLimpiar.addEventListener("click", (evento) => {
        evento.preventDefault();
        Swal.fire({
            title: '¿Seguro que deseas limpiar el formulario?',
            text: "¡No podrás deshacer la acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.isConfirmed) {
                elFormulario.reset();
                Swal.fire(
                    '!Formulario limpio!',
                    'Tu formulario se limpió correctamente.',
                    'success'
                );
            }
        });
    });
}