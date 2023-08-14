# BULB-ON-or-OFF-PROJECT IN JAVASCRIPT

This is a simple JavaScript project that allows you to control a virtual bulb, turning it on and off.

## Installation

No installation is required. Just open the `index.html` file in a web browser.

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
