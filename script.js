(function () {
  // Número de WhatsApp: prefijo del país + número, sin espacios ni signos
  var WHATSAPP = '34600000000';

  // No permitir reservar en fechas pasadas
  var dateInput = document.querySelector('input[type=date]');
  var today = new Date();
  dateInput.min = today.toISOString().slice(0, 10);

  // Resaltar el día de hoy en el horario
  var day = today.getDay();
  document.querySelectorAll('#hrs tr').forEach(function (row) {
    var k = Number(row.dataset.d);
    if (k === day || (k === 2 && day >= 2 && day <= 5)) {
      row.classList.add('today');
    }
  });

  // Formulario de reserva: prepara el mensaje de WhatsApp
  document.getElementById('f').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = new FormData(e.target);
    var ok = document.getElementById('ok');

    var fecha = new Date(f.get('d') + 'T12:00').toLocaleDateString('es-ES', {
      weekday: 'long', day: 'numeric', month: 'long'
    });

    var msg = 'Hola, soy ' + f.get('n') + '. Quiero reservar: ' + f.get('s') +
      ' con ' + f.get('b') + ', el ' + fecha + ' a las ' + f.get('h') + '.';

    var link = document.createElement('a');
    link.className = 'btn';
    link.style.marginTop = '14px';
    link.textContent = 'Confirmar por WhatsApp';
    link.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
    link.rel = 'noopener';

    var title = document.createElement('b');
    title.textContent = 'Solicitud lista, ' + f.get('n');

    var text = document.createElement('p');
    text.textContent = f.get('s') + ' · ' + fecha + ' · ' + f.get('h') +
      '. Envíala por WhatsApp para que la confirmemos.';

    ok.innerHTML = '';
    ok.append(title, text, link);
    ok.classList.add('show');
    ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();