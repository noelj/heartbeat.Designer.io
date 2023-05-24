// JavaScript code
// Get the button element
const downloadButton = document.getElementById('download-cv');

// Add a click event listener to the button
downloadButton.addEventListener('click', () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Define the sections you want to include
  const sections = ['home', 'skills'];

  // Iterate over the sections and add their content to the PDF
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionContent = section.innerHTML;
    doc.addPage().html(sectionContent);
  });

  // Save the PDF file
  doc.save('cv.pdf');
});
