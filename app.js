
window.addEventListener('DOMContentLoaded', () => {
    const $btnAutoaccept = document.getElementById('btn-auto-accept');

    $btnAutoaccept.addEventListener('click', () => {
        if($btnAutoaccept.classList.contains('btn-activated')) {
            // Deberia cancelar el activador
            electron.deactivateAutoaccept();

            $btnAutoaccept.classList.remove('btn-activated');
            $btnAutoaccept.classList.add('btn-desactivated');
            $btnAutoaccept.textContent = 'Desactivado';
        }
        else {
            electron.activateAutoaccept();

            $btnAutoaccept.classList.remove('btn-desactivated');
            $btnAutoaccept.classList.add('btn-activated');
            $btnAutoaccept.textContent = 'Activado';
        }
    });
    
})

