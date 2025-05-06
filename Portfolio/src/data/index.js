import { built } from "./projectsBuilt.js";
import { building } from "./projectsBuilding.js";
import { experience } from "./experience.js";
import { tools } from "./tools.js";

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

// Generates HTML markup for projects currently being worked on
function getBuildingHtml() {
  let buildingHtml = ``;

  building.forEach(function (project) {
    buildingHtml += `
     <div class="project">
        <div class="project-header">
          <h3 class="project-name">${project.name}</h3>
          <!-- Icon indicating the project is in progress -->
          <span><img src="./public/assets/icons/timer.svg" alt="Timer icon" class="timer-icon"></span>
        </div>

        <p class="project-details">
              ${project.details}
        </p>
    </div>
    `;
  });

  return buildingHtml;
}

// Generates HTML markup for work experience entries
function getExperienceHtml() {
  let experienceHtml = ``;

  experience.forEach(function (role) {
    experienceHtml += `
    <div class="experience">
      <h3 class="experience-title">${role.title}</h3>
      <span class="experience-duration">${role.duration}</span>
      <p class="experience-details">${role.details}</p>
    </div>
    `;
  });

  return experienceHtml;
}

// Generates HTML markup for tools used (skills or software/tools list)
function getToolsHtml() {
  let toolsHtml = ``;

  tools.forEach(function (tool) {
    toolsHtml += `
    <li class="tool">
      <span>
        <img
          src="./public/assets/icons/tool.svg"
          alt="Tool icon"
          class="tool-icon" />
      </span>
      ${tool.name}
    </li>
    `;
  });

  return toolsHtml;
}

// Renders all the HTML content into appropriate DOM containers
function render() {
  document.getElementById("experience-grid").innerHTML = getExperienceHtml();
  document.getElementById("projects-built-grid").innerHTML = getBuiltHtml();
  document.getElementById("projects-building-grid").innerHTML =
    getBuildingHtml();
  document.getElementById("tools-list").innerHTML = getToolsHtml();
}

// Call render to populate the page on load
render();

////////// TOGGLE SECTION //////////

// Selects the theme toggle checkbox input
const toggleSwitch = document.querySelector(
  '.toggle-switch input[type="checkbox"]'
);

// Checks for and applies the saved theme from localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  // Apply stored theme to the root element
  document.documentElement.setAttribute("data-theme", currentTheme);

  // If the theme is light, check the toggle switch
  if (currentTheme === "light") {
    toggleSwitch.checked = true;
  }
}

// Handles theme switching logic and stores the selection
function switchTheme(e) {
  if (e.target.checked) {
    // Apply light theme
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    // Apply dark theme
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// Add listener to the checkbox to handle user theme toggle
toggleSwitch.addEventListener("change", switchTheme);
