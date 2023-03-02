// Define a function to fetch a new quote from the API
function fetchQuote() {
    fetch('https://api.gameofthronesquotes.xyz/v1/random')
      .then(response => response.json())
      .then(data => {
        // Update the HTML content with the received data
        document.getElementById('quote').innerHTML = `"${data.sentence}" - ${data.character.name}`;
      })
      .catch(error => console.error(error));
  }
  
  // Fetch a quote on page load
  fetchQuote();
  
  // Add an event listener to the refresh button
  document.getElementById('refresh-btn').addEventListener('click', fetchQuote);
  