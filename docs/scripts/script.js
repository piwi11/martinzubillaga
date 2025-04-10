const gistId = "ce16440676b693f17a86e9413a32d5a5"; // ID del Gist público

const url = `https://api.github.com/gists/${gistId}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el contenido del Gist.");
    }
    return response.json(); // Obtener la respuesta como JSON
  })
  .then((data) => {
    // Obtener el contenido del archivo del Gist
    const fileName = Object.keys(data.files)[0]; // Obtiene el nombre del archivo
    const content = data.files[fileName].content;

    // Insertar el contenido en el elemento con ID "doc-content"
    document.getElementById("doc-content").innerText = content;
  })
  .catch((error) => {
    // Mostrar un mensaje de error si algo falla
    document.getElementById("doc-content").innerText =
      "Error cargando el contenido.";
    console.error("Error:", error);
  });
