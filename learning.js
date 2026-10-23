function plainArr() {
  const a = [1, [2, [3, 4], 5]];
  const planArr = [];
  const b = a.forEach((a) => {
    if (!Array.isArray(a)) {
      planArr.push(a);
    }
    if (Array.isArray(a)) {
      a.forEach((b) => {
        if (!Array.isArray(b)) {
          planArr.push(b);
        }
        if (Array.isArray(b)) {
          b.forEach((c) => {
            planArr.push(c);
          });
        }
      });
    }
  });
  console.log(planArr);
}
plainArr();
