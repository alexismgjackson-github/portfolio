import { built } from "./projectsBuilt.js";

// Generates HTML markup for completed projects
function getBuiltHtml() {
  let builtHtml = ``;

  // Loop through each project in the 'built' array
  built.forEach(function (project) {
    builtHtml += `
     <div class="project">
        <div class="project-header">
          <h3 class="project-name">${project.name}</h3>
          
          <!-- Link to the live project -->
          <a
                href="${project.link}"
                target="_blank"
                class="project-link site"
                alt="Link to ${project.name} project"
                aria-label="Link to ${project.name} project"
          >
           <img src="./public/assets/icons/view.svg" alt="View icon" class="view-icon">
          </a>
          
          <!-- Link to the project's source code -->
          <a
                href="${project.code}"
                target="_blank"
                class="project-link code"
                alt="Link to ${project.name}'s code in Github"
                aria-label="Link to ${project.name}'s code in Github"
          >
           <img src="./public/assets/icons/code.svg" alt="Code icon" class="code-icon">
          </a>
        </div>

        <!-- Project description -->
        <p class="project-details">
              ${project.details}
        </p>
    </div>
    `;
  });

  return builtHtml;
}

// Renders all the HTML content into appropriate DOM containers
function render() {
  document.getElementById("projects-built-grid").innerHTML = getBuiltHtml();
}

// Call render to populate the page on load
render();
