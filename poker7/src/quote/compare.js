module.exports = compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        return 1;
        // 比较出结果
        // alice 比较数组元素的大小
      } else if (arr1[i] < arr2[i]) {
        return 2;
      }
    }
    return 0;
  };
  