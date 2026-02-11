// //ber kora price and discount
function getPrice(price, discount) {
  if (price <= 0) throw new Error("the number is negative");

  if (price && discount >= 50) {
    console.log("price is to high");
  } else {
    const discountPrice = (discount / 100) * price;
    console.log(`this is percentage result:${discountPrice}`);
    const total_result = price - discountPrice;
    console.log(total_result);
  }
}
getPrice(400, 40);

// //finding s in names
const names = ["Abir", "Sabbir", "Sharmin", "Sujon", "Roni"];
const filteredName = names.filter((val) => val.charAt(0) === "S");
console.log(filteredName);

//number finding
const student = [
  {
    name: "mir",
    age: 24,
    marks: [40, 50, 60],
  },
  {
    name: "hamim",
    age: 20,
    marks: [10, 0, 10],
  },
  {
    name: "shafi",
    age: 18,
    marks: [60, 70, 80],
  },
];

function getResult() {
  student.forEach((s) => {
    const allName = `Name is: ${s.name}`;
    const allAge = `Age is: ${s.age}`;
    const initialVal = 0;
    const result = s.marks.reduce((r, s) => r + s, initialVal);
    const avarage = result / 3;
    console.log(allName, allAge, "avarage is " + avarage);

    if (avarage < 40) {
      console.log(s.name + "failed");
    } else {
      console.log(s.name + "Passed");
    }
  });
}

getResult();
