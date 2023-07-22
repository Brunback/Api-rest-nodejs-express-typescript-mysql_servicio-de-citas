function enviarFormulario(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  
  fetch('http://localhost:3003/doctors', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(data => {
    // Procesar los datos JSON recibidos aquí
    console.log(data);
  })
  .catch(error => {
    // Manejo de errores adecuado
    console.error('Error:', error);
  });
}

const formulario = document.getElementById('doctorForm').addEventListener('submit', enviarFormulario);
