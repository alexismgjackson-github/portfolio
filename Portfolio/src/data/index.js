import { built } from "./projectsBuilt.js";
import { building } from "./projectsBuilding.js";
import { experience } from "./experience.js";
import { tools } from "./tools.js";

function getBuiltHtml() {
  let builtHtml = ``;

  built.forEach(function (project) {
    builtHtml += `
     <div class="project">
        <div class="project-header">
          <h3 class="project-name">${project.name}</h3>
          <a
                href="${project.link}"
                target="_blank"
                class="project-link"
                alt="Link to ${project.name} project"
          >
           <img src="icons/arrow.svg" alt="Link icon" class="link-icon">
          </a>
        </div>
        <p class="project-details">
              ${project.details}
        </p>
    </div>
    `;
  });
  return builtHtml;
}

function getBuildingHtml() {
  let buildingHtml = ``;

  building.forEach(function (project) {
    buildingHtml += `
     <div class="project">
        <div class="project-header">
          <h3 class="project-name">${project.name}</h3>
          <span><img src="icons/timer.svg" alt="Timer icon" class="timer-icon"></span>
        </div>
        <p class="project-details">
              ${project.details}
        </p>
    </div>
    `;
  });
  return buildingHtml;
}

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

function getToolsHtml() {
  let toolsHtml = ``;

  tools.forEach(function (tool) {
    toolsHtml += `
    <li class="tool">
      <span
      ><img
        src="icons/tool.svg"
        alt="Tool icon"
        class="tool-icon" /></span
      >${tool.name}
    </li>
    `;
  });
  return toolsHtml;
}

function render() {
  document.getElementById("experience-grid").innerHTML = getExperienceHtml();
  document.getElementById("projects-built-grid").innerHTML = getBuiltHtml();
  document.getElementById("projects-building-grid").innerHTML =
    getBuildingHtml();
  document.getElementById("tools-list").innerHTML = getToolsHtml();
}

render();

////////// TOGGLE SECTION //////////

// get the first input element w/ "toggle-switch" class name

const toggleSwitch = document.querySelector(
  '.toggle-switch input[type="checkbox"]'
);

// read key data from local storage

const currentTheme = localStorage.getItem("theme");

// if the current theme is true, set a "data-theme" attribute to document and "currentTheme" value
// if the current theme is strictly equal to "light" set the toggle switch checked to true

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "light") {
    toggleSwitch.checked = true;
  }
}

// if toggle is checked set "data-theme" to "light", else set "data-theme" to "dark"
// save both key/value data to local storage

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

// add a change event to toggle switch to switch between themes

toggleSwitch.addEventListener("change", switchTheme);
