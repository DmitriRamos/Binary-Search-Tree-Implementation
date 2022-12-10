export const bubbleSort = (items) => {
  for (let firstNumIndex = 0; firstNumIndex < items.length; firstNumIndex++) {
    let firstNumValue = items[firstNumIndex];

    for (
      let secondNumIndex = firstNumIndex + 1;
      secondNumIndex < items.length;
      secondNumIndex++
    ) {
      let secondNumValue = items[secondNumIndex];
      if (firstNumValue > secondNumValue) {
        items[secondNumIndex] = items[firstNumIndex];
        items[firstNumIndex] = secondNumValue;
      }

      firstNumValue = secondNumValue;
    }
  }

  return items;
};
