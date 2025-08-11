document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('form-applicant');

  formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const datos = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      habilidades: document.getElementById('habilidades').value,
      experiencia: document.getElementById('experiencia').value,
      mensaje: document.getElementById('mensaje').value
    };

    try {
      const respuesta = await fetch('http://localhost:4000/api/applicants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        alert('Formulario enviado correctamente 🥳');
        formulario.reset();
      } else {
        alert('Error al enviar: ' + resultado.mensaje);
      }

    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Hubo un problema al enviar el formulario. Intenta más tarde.');
    }
  });
});
