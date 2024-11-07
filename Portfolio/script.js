// get the first input element w/ "toggle-switch" class name

const toggleSwitch = document.querySelector(
  '.toggle-switch input[type="checkbox"]'
);

// read key data from local storage

const currentTheme = localStorage.getItem("theme");

// if the current theme is true, set a "data-theme" attribute to document and "currentTheme" value
// if the current theme is strictly equal to "dark" set the toggle switch checked to true

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// if toggle is checked set "data-theme" to "dark", else set "data-theme" to "light"
// save both key/value data to local storage

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// add a change event to toggle switch to switch between themes

toggleSwitch.addEventListener("change", switchTheme);
