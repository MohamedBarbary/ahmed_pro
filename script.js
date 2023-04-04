// select basic elements
const mainPart = document.querySelector(".main");
const progType = document.querySelector(".type");
const submit = document.querySelector(".bt1");

const out1 = document.querySelector(".out1");
const out2 = document.querySelector(".out2");
const out3 = document.querySelector(".out3");
const out4 = document.querySelector(".out4");
const out5 = document.querySelector(".out5");
const out6 = document.querySelector(".out6");
const out7 = document.querySelector(".out7");
// create html elements
const typesHtml = `
     <div class="data">
            <label for="da">Type Of Material</label>
            <input class="details" id ="da"list="mat"name="prog" required  >

            <datalist  class="mater"   id="mat">
                <option value="حديد سداسي">
                <option value="حديد مربع">
                <option value= "حديد ملفوف">
                <option value="أصفر سداسي">
                <option value="أصفر مربع">
                <option value="أصفر ملفوف">
                <option value="أحمر سداسي">
                <option value="أحمر مربع">
                <option value="أحمر ملفوف">
                </datalist>
        </div> 
`;
const thicknessHtml = ` <div class="thickness"> 
<label for="id6"> Thickness Of Material </label>
    <input class="thick"  id ="id6" type="text" required>
</div> `;
const upateGui = function (place, html, type) {
  document.querySelector(`.${place}`).insertAdjacentHTML("afterend", html);
  mainPart.style.opacity = 100;
  progType.textContent = type;
};
// opertions
const pipeSize = function (dia, thick) {
  return dia * thick * 0.001 * 3.14;
};
const coilSize = function (dia) {
  return 3.14 * 0.001 * (dia / 2);
};
const hexaSize = function (dia) {
  const reduis = dia / 2;
  return 12 * 0.5 * 3.14 * 0.001 * reduis * (reduis / Math.sqrt(3));
};
const squareSize = function (tall) {
  return tall * tall * 4;
};
const calcWeight = function (size, density) {
  return size * density;
};
//
// output operations
const meterPrice = function (weight, price) {
  return weight * price;
};
const numUnitsMeter = function (unitTall) {
  return 967 / unitTall;
};
const unitPrice = function (metPrice, numUnits) {
  return metPrice / numUnits;
};
const numMetersOrder = function (numOrder, numUnits) {
  return numOrder / numUnits;
};
const weightOrder = function (metOrder, weight) {
  return metOrder * weight;
};
const unitWeightBeforOP = function (weight, numUnitsMeter) {
  return weight / numUnitsMeter;
};

//
// load app
// intial data
let load = 0;

const output = function (size, kPrice, len, order, density) {
  const weight = calcWeight(size, density);
  const metPrice = meterPrice(weight, kPrice);
  const unitsNumber = numUnitsMeter(len);
  const price = unitPrice(metPrice, unitsNumber);
  const meterOrder = numMetersOrder(order, unitsNumber);
  const weigOrder = weightOrder(meterOrder, weight);
  const unitWeightBefor = unitWeightBeforOP(weight, unitsNumber);
  out1.textContent = `weight of meter = ${weight} Kg`;
  out2.textContent = `price of meter = ${metPrice}`;
  out3.textContent = `number units meter = ${unitsNumber} `;
  out4.textContent = `unit cost = ${price} lE`;
  out5.textContent = `order meters = ${meterOrder} M`;
  out6.textContent = `order kiloes = ${weigOrder} Kg`;
  out7.textContent = `weight before operation = ${unitWeightBefor} Kg`;
};

const result = function () {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const diameter = document.querySelector(".diameter").value;
    const k_price = document.querySelector(".k_price").value;
    const lenght = document.querySelector(".mat_lenght").value;
    const nOrder = document.querySelector(".order").value;
    if (load === 1) {
      const data = document.querySelector(".details").value;
      /// ////
      if (data === "حديد مربع") {
        const size = squareSize(diameter);
        output(size, k_price, lenght, nOrder, 8);
      } else if (data === "حديد ملفوف") {
        const size = coilSize(diameter);
        output(size, k_price, lenght, nOrder, 8);
      } else if (data === "حديد سداسي") {
        const size = hexaSize(diameter);
        output(size, k_price, lenght, nOrder, 8);
      } else if (data === "أصفر مربع") {
        const size = squareSize(diameter);
        output(size, k_price, lenght, nOrder, 8.73);
      } else if (data === "أصفر ملفوف") {
        const size = coilSize(diameter);
        output(size, k_price, lenght, nOrder, 8.73);
      } else if (data === "أصفر سداسي") {
        const size = hexaSize(diameter);
        output(size, k_price, lenght, nOrder, 8.73);
      } else if (data === "أحمر مربع") {
        const size = squareSize(diameter);
        output(size, k_price, lenght, nOrder, 8.94);
      } else if (data === "أحمر ملفوف") {
        const size = coilSize(diameter);
        output(size, k_price, lenght, nOrder, 8.94);
      } else if (data === "أحمر سداسي") {
        const size = hexaSize(diameter);
        output(size, k_price, lenght, nOrder, 8.94);
      }
      //// /////
    }
    if (load === 2) {
      const thick = document.querySelector(".thick").value;
      const size = pipeSize(diameter, thick);
      console.log(size);
      output(size, k_price, lenght, nOrder, 8);
    }
  });
};
//Shape
document.querySelector(".btn1").addEventListener("click", function () {
  // load
  if (load !== 1) {
    upateGui("number", typesHtml, "Shape");
    if (load === 2) document.querySelector(".thickness").remove();
    load = 1;
    result();
  }
});
// Pipe
document.querySelector(".btn2").addEventListener("click", function (e) {
  e.preventDefault();
  if (load !== 2) {
    upateGui("dia", thicknessHtml, "Pipe");
    if (load === 1) document.querySelector(".data").remove();
    load = 2;
    result();
  }
});
