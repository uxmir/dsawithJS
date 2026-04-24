// task_1 reverse string
function reverseString(name) {
  const m = name.split("").reverse().join("");
  console.log(m);
}
reverseString("mirmoniruzzaman");

//task_2 vowel ber koro
function findVowel(text) {
  const a = text.split(" ");
  const totalVowel = [];
  const vowelArr = ["a", "e", "o", "i", "u"];
  a.forEach((t) => {
    const z = t.split("");
    const x = z.forEach((y) => {
      if (vowelArr.includes(y)) {
        totalVowel.push(y);
      }
    });
  });
  console.log(totalVowel?.length);
}

findVowel(
  "JavaScript is an amazing programming language. It allows developers to create interactive web applications with ease. Learning to code opens up a world of endless possibilities and innovation!",
);
