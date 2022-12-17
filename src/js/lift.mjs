export const createLift = () => {
  const liftCont = document.createElement("div");
  const liftGateLeft = document.createElement("div");
  const liftGateRight = document.createElement("div");

  liftCont.classList.add("lift-container");
  liftGateLeft.classList.add("lift-gate", "lift-gate_left");
  liftGateRight.classList.add("lift-gate", "lift-gate_right");

  liftCont.appendChild(liftGateLeft);
  liftCont.appendChild(liftGateRight);
  return liftCont;
};
// module.export = createLift;
