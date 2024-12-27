function searchCV(event) {
  event.preventDefault(); // Prevent form submission
  const query = document.getElementById("searchInput").value.toLowerCase();
  const cvSections = document.querySelectorAll("section"); // Select all sections
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = ""; // Clear previous results
  let found = false;

  cvSections.forEach((section) => {
    const sectionText = section.innerText.toLowerCase();
    if (sectionText.includes(query)) {
      found = true;
      // Create a new div for the matching section
      const highlightedSection = document.createElement("div");
      highlightedSection.innerHTML = section.innerHTML.replace(
        new RegExp(query, "gi"),
        (match) => `<span class="highlight">${match}</span>`
      );
      resultsDiv.appendChild(highlightedSection);
    }
  });

  // Show or hide results based on whether any matches were found
  if (found) {
    resultsDiv.style.display = "block";
  } else {
    resultsDiv.innerHTML = "<p>No results found.</p>";
    resultsDiv.style.display = "block";
  }
}
