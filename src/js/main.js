const liftInput = document.querySelector("#lift");
const floorInput = document.querySelector("#floor");
const btn = document.querySelector("#btn");

const createElement = (event) => {
  event.preventDefault();
  const newFloor = document.createElement("div");
  const upBtn = document.createElement("button");
  const downBtn = document.createElement("button");

  const floorNumber = document.createTextNode(`Floor ${floorInput.value}`);
  const upBtnText = document.createTextNode("Up");
  const downBtnText = document.createTextNode("Down");
  console.log(upBtnText);
  console.log(downBtnText);
  console.log(floorNumber);
  console.log(newFloor);
  console.log(upBtn);
  console.log(downBtn);
};

btn.addEventListener("click", createElement);
