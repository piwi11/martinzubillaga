const gistId = "ce16440676b693f17a86e9413a32d5a5"; // Public Gist ID

const url = `https://api.github.com/gists/${gistId}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load the Gist content.");
    }
    return response.json(); // Get the response as JSON
  })
  .then((data) => {
    // Get the content of the Gist file
    const fileName = Object.keys(data.files)[0]; // Get the file name
    const content = data.files[fileName].content;

    // Call the function to display the text with a typewriter effect
    typeWriterEffect(content, "doc-content");
  })
  .catch((error) => {
    // Display an error message if something goes wrong
    document.getElementById("doc-content").innerText =
      "Error loading the content.";
    console.error("Error:", error);
  });

// Function for the typewriter effect
function typeWriterEffect(text, elementId) {
  const element = document.getElementById(elementId);
  let index = 0;

  function writeCharacter() {
    if (index < text.length) {
      // Use innerHTML to handle special characters correctly
      element.innerHTML += text.charAt(index).replace(/\n/g, "<br>");
      index++;
      setTimeout(writeCharacter, 50); // Adjust the time to control the speed
    }
  }

  writeCharacter();
}
