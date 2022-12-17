export const createFloor = (num = 1) => {
  const newFloor = document.createElement("div");
  const side = document.createElement("div");
  const span = document.createElement("span");
  const upBtn = document.createElement("button");
  const downBtn = document.createElement("button");

  newFloor.classList.add("floor-container");
  side.classList.add("side");

  const floorNumber = document.createTextNode(`Floor ${num}`);
  const upBtnText = document.createTextNode("Up");
  const downBtnText = document.createTextNode("Down");
  span.appendChild(floorNumber);
  upBtn.appendChild(upBtnText);
  downBtn.appendChild(downBtnText);
  side.appendChild(span);
  side.appendChild(upBtn);
  side.appendChild(downBtn);

  newFloor.appendChild(side);

  // if (num === 1) newFloor.appendChild(createLift());
  return newFloor;
};
// module.export = createFloor;
