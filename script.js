// Задача 1
function task1() {
  let user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
  //преобразует значение JavaScript в строку JSON, при необходимости заменяя значения
  alert(JSON.stringify(user));
}

// Задача 2
function isEmpty(obj) {
  //Этот метод возвращает массив из ключей объекта, и затем мы проверяем длину этого массива
  return Object.keys(obj).length === 0;
}

function task2() {
  let schedule = {};
  alert(isEmpty(schedule)); // true
  schedule["8:30"] = "get up";
  alert(isEmpty(schedule)); // false
}

// Задача 3
function task3() {
  const user = {
    name: "John"
  };
  // Да, т.к. const ограничивает присваивание переменной, а не изменение свойств объекта.
  user.name = "Pete";
  alert(JSON.stringify(user));
}

// Задача 4
function task4() {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  alert(sum);
}
// Задача 5
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

function task5() {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu);
  alert(JSON.stringify(menu));
}

// Задача 6
function task6() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];
  let shoppingCart = fruits;
  shoppingCart.push("Банан");
  alert(fruits.length); // 4
}

// Задача 7
function task7() {
  let styles = ["Джаз", "Блюз"];
  styles.push("Рок-н-ролл");
  styles[Math.floor((styles.length - 1) / 2)] = "Классика";
  alert(styles.shift());
  styles.unshift("Рэп", "Регги");
  alert(styles);
}

// Задача 8
function task8() {
  let arr = ["a", "b"];
  arr.push(function () {
    alert(this);
  });
  arr[2](); // Выведет ["a", "b", function () { alert(this); }]
  // this внутри функции указывает на объект, 
  //в контексте которого эта функция была вызвана. Поэтому она вызывается в контексте массива arr, поэтому this будет равно arr

}

// Задача 9
function task9() { //sumInput()
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", "");
    if (value === null || value === "" || isNaN(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  alert("Сумма: " + sum);
}

// Задача 10
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  alert(maxSum);
}

function task10() {
  getMaxSubSum([-1, 2, 3, -9]) //= 5(сумма выделенных)
  getMaxSubSum([2, -1, 2, 3, -9]) //= 6
  getMaxSubSum([-1, 2, 3, -9, 11]) //= 11
  getMaxSubSum([-2, -1, 1, 2]) //= 3
  getMaxSubSum([100, -9, 2, -3, 5]) //= 100
  getMaxSubSum([1, 2, 3]) //= 6(берём все)
  getMaxSubSum([-1, -2, -3]) //= 0
}

// Задача 11
function removeArrDuplicates(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;

    if (counts[arr[i]] > 2) {
      arr.splice(i, 1);
      i--; // уменьшаем индекс, чтобы не пропустить следующий элемент после удаления
    }
  }
  alert(arr);
}

function task11() {
  removeArrDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]) //
}

// Задача 12
function shiftArray(arr) {
  let maxOdd = -1;
  let maxOddIndex = -1;

  // Находим наибольший нечетный элемент и его индекс
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i] > maxOdd) {
      maxOdd = arr[i];
      maxOddIndex = i;
    }
  }

  if (maxOddIndex === -1) {
    console.log("В массиве нет нечетных элементов.");
    return;
  }

  console.log("Наибольший нечетный элемент:", maxOdd);

  // Циклический сдвиг влево элементов справа от максимума трижды
  for (let j = 0; j < 3; j++) {
    for (let i = maxOddIndex + 1; i < arr.length - 1; i++) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  // Циклический сдвиг вправо элементов слева от максимума один раз
  for (let i = maxOddIndex; i > 0; i--) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
  }

  alert("Массив после сдвигов: " + arr);
}

function task12() {
  shiftArray([2, 7, 1, 4, 9, 6, 3, 8, 5]) //
}

// Задача 13
function sumOtric(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}

function task13() {
  alert("Сумма отрицательных элементов в массиве: " + sumOtric([2, -7, 1, 4, -9, 6, -3, 8, -5])) //
}

// Задача 14
function productARRAY(arr) {
  let product = 1;
  for (let i = 1; i < arr.length; i += 2) {
    product *= arr[i];
  }
  return product;
}

function task14() {
  alert("Произведение элементов массива с нечетными номерами " + productARRAY([2, -7, 1, 4, -9, 6, -3, 8, -5])) //
}

// Задача 15
function sumBetweenZeros(arr) {
  let firstZeroIndex = arr.indexOf(0);
  if (firstZeroIndex === -1) {
    console.log("В массиве нет нулей.");
    return 0;
  }

  let secondZeroIndex = arr.indexOf(0, firstZeroIndex + 1);
  if (secondZeroIndex === -1) {
    console.log("В массиве только один ноль.");
    return 0;
  }

  let sum = 0;
  for (let i = firstZeroIndex + 1; i < secondZeroIndex; i++) {
    sum += arr[i];
  }

  return sum;
}

function task15() {
  alert("Сумма элементов между двумя первыми нулями: " + sumBetweenZeros([1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9])) //
}

// Задача 16
function findMax(arr) {
  return Math.max(...arr);
}

function task16() {
  alert("Максимальное значение массива: " + findMax([2, -7, 1, 4, -9, 6, -3, 8, -5])) //
}

// Задача 17
function findMinElement(arr) {
  let minEven = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] < minEven) {
      minEven = arr[i];
    }
  }
  if (minEven === Infinity) {
    alert("В массиве нет четных элементов.");
    return arr[0];
  }
  return minEven;
}

function task17() {
  alert("Наименьший четный элемент массива: " + findMinElement([-7, 1, 4, -9, 6, -3, 8, -5])) //
}

// Задача 18
function moveZero(arr) {
  let zeros = arr.filter(element => element === 0);
  let nonZeros = arr.filter(element => element !== 0);

  return zeros.concat(nonZeros);
}

function task18() {
  alert("Преоразованный массив, где сначало идут 0: " + moveZero([3, 0, 7, 0, 1, 4, 9, 6, 0, 3, 8, 5])) //
}

// Задача 19
function sumOfMinMaxIndexes(arr) {
  let minIndex = arr.indexOf(Math.min(...arr));
  let maxIndex = arr.indexOf(Math.max(...arr));
  return minIndex + maxIndex;
}

function task19() {
  alert("Сумма номеров минимального и максимального элемента: " + sumOfMinMaxIndexes([-7, 1, 4, -9, 6, -3, 8, -5])) //
}

// Задача 20
function findMinAbsoluteValue(arr) {
  if (arr.length === 0) {
    console.log("Массив пуст.");
    return;
  }

  let minAbsoluteValue = Math.abs(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let absoluteValue = Math.abs(arr[i]);
    if (absoluteValue < minAbsoluteValue) {
      minAbsoluteValue = absoluteValue;
    }
  }

  return minAbsoluteValue;
}

function task20() {
  alert("Минимальный по модулю элемент массива: " + findMinAbsoluteValue([-7, 4, -9, 6, -3, 8, -1, -5])) //
}

// Задача 21
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomInt(-10, 10));
  }
  return randomArray;
}

function task21() {
  // Создание массива из 10 случайных чисел
  let myArray = generateRandomArray(10);
  alert("Исходный массив: " + myArray);
  // Реверс для первой половины массива
  let firstHalfReversed = myArray.slice(0, myArray.length / 2).reverse();
  // Реверс для второй половины массива
  let secondHalfReversed = myArray.slice(myArray.length / 2).reverse();
  // Объединение результатов
  let reversedArray = firstHalfReversed.concat(secondHalfReversed);
  alert("Массив после реверса отдельно для первой и второй половин:" + reversedArray);
}

// Задача 22
function rightRotate(arr, k) {
  for (let i = 0; i < k; i++) {
      let lastElement = arr.pop();
      arr.unshift(lastElement);
  }
}

function task22() {
  // Создание массива из 10 случайных чисел
  let myArray = generateRandomArray(12);
  alert("Исходный массив: " + myArray);

  rightRotate(myArray,4);
  alert("Массив после циклического сдвига вправо на 4 элемента:" +  myArray);
}
