function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [];

  // Tulis code-mu disini
  do {
    swapped = false;
    for (let i = 0; i < cars.length - 1; i++) {
      if (cars[i].year < cars[i + 1].year) {
        let temp = cars[i];
        cars[i] = cars[i + 1];
        cars[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  for (let j = 0; j < cars.length; j++) {
    result.push(cars[j]);
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
