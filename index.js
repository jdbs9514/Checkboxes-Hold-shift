const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e){
  let inBetween = false;
  // shiftKey es una propiedad que indica si la tecla Shift está presionada o no
  // this.checked es una propiedad que indica si el checkbox está seleccionado o no
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      //condicion para seleccionar los checkbox entre el primero y el ultimo seleccionado
      if (checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween){
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));