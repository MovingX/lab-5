<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="center">Лабораторная работа №5</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p align="right">Выполнил: Морошкин Максим Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>
<br>
<br>
<br>
<br>
<br>
<br>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Основы языка JavaScript</p>

<h2>Цели и задачи</h2>

1.Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";

4. У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

6. Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

7. Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл

8. Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?

9. Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.


  10. На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

11. Удалить в массиве все числа, которые повторяются более двух раз. 

12.Введите одномерный целочисленный массив. Найдите наибольший нечетный элемент. Далее трижды осуществите циклический сдвиг влево элементов, стоящих справа от найденного максимума, и один раз сдвиг элементов вправо, стоящих слева от найденного максимума.

13. Найдите сумму отрицательных элементов массива.

14. Найдите произведение элементов массива с нечетными номерами.

15. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в массиве, то выведите ноль.

16. Найдите наибольший элемент массива.

17. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент. 

18. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.

19. Найдите сумму номеров минимального и максимального элементов. 

 20. Найдите минимальный по модулю элемент массива.

21. Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.

22. Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.

<h2>Решение задач</h2>

```js
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

```

<h2>Запуска веб-страницы с использованием Node.js и фреймворка Express</h2>
1.Установить node.js<br>
2.Создать папку проекта, и выполнить команду npm install express, для создания package.json<br>
3.Создать файл server.js и прописать в нём минимальный сервер для запуска страницы по адресу http://localhost:3000 и дальнейшее выполнее всех файлов в корне проекта(например index.html и script.js)<br>

```js
const express = require('express');
const app = express();
const port = 3000;

//обслуживать все файлы из корня проекта, включая index.html, server.js и другие статические файлы.
app.use(express.static(__dirname)); 

// Запуск сервера
//app.listen(port, callback) - метод используется для запуска HTTP-сервера на указанном порту
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

```

<h2>Веб-приложение с API</h2>

```js

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

// Настройка папки для шаблонов (views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Обработчик главной страницы
app.get('/', (req, res) => {
    res.render('index.html');
});

// Обработчик для предсказания возраста, пола и национальности
app.get('/predict-info', async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ error: 'Отсутствует параметр "name".' });
        }
        
        // Запрос к Agify API для предсказания возраста
        const agifyResponse = await axios.get(`https://api.agify.io?name=${encodeURIComponent(name)}`);
        const agifyResult = agifyResponse.data;

        // Запрос к Genderize API для предсказания пола
        const genderizeResponse = await axios.get(`https://api.genderize.io?name=${encodeURIComponent(name)}`);
        const genderizeResult = genderizeResponse.data;

        // Отправка ответа с полученными данными
        res.json({
            name,
            age: agifyResult.age,
            gender: genderizeResult.gender,
            probability: genderizeResult.probability,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});

```

```php
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Прогноз возраста, пола и национальностей</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        input {
            padding: 8px;
            margin-right: 8px;
        }
        button {
            padding: 8px;
        }
        p {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Прогноз возраста, пола и национальностей</h1>
    <form id="infoForm">
        <!-- Поле ввода имени -->
        <label for="nameInput">Введите имя:</label>
        <input type="text" id="nameInput" required>

        <!-- Кнопка для запуска предсказания -->
        <button type="button" onclick="predictInfo()">Предсказать</button>
    </form>

    <!-- Результат предсказания будет отображаться здесь -->
    <p id="result"></p>

    <script>
        // Функция для отправки запроса на сервер
        async function predictInfo() {
            // Получение имени из поля ввода
            const name = document.getElementById('nameInput').value;
            // Получение элемента для вывода результата
            const resultElement = document.getElementById('result');

            try {
                // Отправка запроса на сервер для предсказания возраста, пола
                const response = await fetch(`/predict-info?name=${encodeURIComponent(name)}`);
                const result = await response.json();

                
                // Отображение результата
                resultElement.textContent = `
                    Предсказанная информация для ${name}:
                    Возраст: ${result.age}
                    Пол: ${result.gender} (${(result.probability * 100).toFixed(2)}%)                
                `;
            } catch (error) {
                // Обработка ошибок
                console.error(error);
                resultElement.textContent = 'Произошла ошибка. Пожалуйста, повторите попытку.';
            }
        }
    </script>
</body>
</html>

```

<h2>Вывод</h2>
Я научился создавать веб-сервер с помощью Node.js и Express, изучил возможности функции, класса, циклов, операторов, встроенных функций, операторов прерывания и условий в языке JS, сделал веб приложение api

