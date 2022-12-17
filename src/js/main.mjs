import { createFloor } from "./floor.mjs";
import { createLift } from "./lift.mjs";
const liftInput = document.querySelector("#lift");
const floorInput = document.querySelector("#floor");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");

const createLiftDemo = (liftInputVal, floorInputVal) => {
  // event.preventDefault();
  const liftSection = document.createElement("section");
  liftSection.classList.add("lift-section");

  while (floorInputVal > 1) {
    liftSection.appendChild(createFloor(floorInputVal));
    floorInputVal--;
  }
  const baseFloor = createFloor();
  while (liftInputVal) {
    baseFloor.appendChild(createLift());
    liftInputVal--;
  }
  liftSection.appendChild(baseFloor);
  return liftSection;
};

const proceed = (event) => {
  event.preventDefault();
  console.log(createLiftDemo(+liftInput.value, +floorInput.value));
  const newD = createLiftDemo(+liftInput.value, +floorInput.value);
  output.appendChild(newD);
};

btn.addEventListener("click", proceed);
