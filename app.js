const thicknessSlider = document.getElementById("thickness-slider");
const thicknessValue = document.getElementById("thickness-value");
thicknessValue.innerHTML = thicknessSlider.value;

thicknessSlider.oninput = function () {
    thicknessValue.innerHTML = this.value;
}
const softnessSlider = document.getElementById("softness-slider");
const softnessValue = document.getElementById("softness-value");
softnessValue.innerHTML = softnessSlider.value;

softnessSlider.oninput = function () {
    softnessValue.innerHTML = this.value;
}
const tempSlider = document.getElementById("temprature-slider");
const tempValue = document.getElementById("temprature-value");
tempValue.innerHTML = tempSlider.value;

tempSlider.oninput = function () {
    tempValue.innerHTML = this.value;
}

const alarmToggle = document.getElementById("alarm-toggle");
const hourDropdown = document.getElementById("hour-dropdown");
const minuteDropdown = document.getElementById("minute-dropdown");
const amPmDropdown = document.getElementById("ampm-dropdown");

hourDropdown.disabled = true;
minuteDropdown.disabled = true;
amPmDropdown.disabled = true;

alarmToggle.onchange = function() {
  if (this.checked) {
    hourDropdown.disabled = false;
    minuteDropdown.disabled = false;
    amPmDropdown.disabled = false;
  } else {
    hourDropdown.disabled = true;
    minuteDropdown.disabled = true;
    amPmDropdown.disabled = true;
  }
}

// const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
// const minutes = ["00", "15", "30", "45"];
// const amPm = ["AM", "PM"];

for (let i = 0; i < hours.length; i++) {
  let hourOption = document.createElement("option");
  hourOption.text = hours[i];
  hourDropdown.add(hourOption);
}

for (let i = 0; i < minutes.length; i++) {
  let minuteOption = document.createElement("option");
  minuteOption.text = minutes[i];
  minuteDropdown.add(minuteOption);
}

for (let i = 0; i < amPm.length; i++) {
  let amPmOption = document.createElement("option");
  amPmOption.text = amPm[i];
  amPmDropdown.add(amPmOption);
}


let soundCounter = 0;

const soundButton = document.getElementById('sound-button');
const soundDropdown = document.getElementById('sound-type');
const soundToggle = document.getElementById('sound-toggle');
soundButton.disabled = true;
soundDropdown.disabled=true;

soundToggle.addEventListener('change', () => {
  const isDisabled = soundToggle.checked;
  soundButton.disabled = isDisabled;
  soundDropdown.disabled = isDisabled;
});

soundButton.addEventListener('click', () => {
  soundCounter++;
  if (soundCounter % 2 === 0) {
    soundButton.innerText = 'Pause Sound';
  } else {
    soundButton.innerText = 'Play Sound';
  }
});

