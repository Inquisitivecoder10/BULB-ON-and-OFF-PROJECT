# BULB-ON-or-OFF-PROJECT IN JAVASCRIPT

This is a simple JavaScript project that allows you to control a virtual bulb, turning it on and off.

## Installation

To get started with this project, you'll need to have [Visual Studio Code (VS Code)](https://code.visualstudio.com/) or another code editor of your choice installed on your computer.

## Usage

1. Open the `index.html` file in your web browser.
2. Click the "Turn On" button to light up the bulb.
3. Click the "Turn Off" button to switch off the bulb.

## Code Example

```javascript
// JavaScript code to control the bulb
const bulb = document.getElementById("bulb");
const turnOnButton = document.getElementById("turnOn");
const turnOffButton = document.getElementById("turnOff");

turnOnButton.addEventListener("click", () => {
    bulb.classList.add("on");
});

turnOffButton.addEventListener("click", () => {
    bulb.classList.remove("on");
});
