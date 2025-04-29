const codes = [
    {
        code: "function add(a, b) {\n  return a +b\n}",
        correctLine: 2,
        correctDescription: "Отсутствует пробел после +"
    },
    {
        code: "function subtract(a, b) {\n  return a -b;\n}",
        correctLine: 2,
        correctDescription: "Отсутствует пробел после -"
    },
    {
        code: "function multiply(a, b) {\n  retun a * b;\n}",
        correctLine: 2,
        correctDescription: "Опечатка в слове return"
    },
    {
        code: "function divide(a, b) {\n  if (b = 0) {\n    return null;\n  }\n  return a / b;\n}",
        correctLine: 2,
        correctDescription: "Использовано присваивание вместо сравнения"
    },
    {
        code: "function square(a) {\n  return a* a;\n}",
        correctLine: 2,
        correctDescription: "Отсутствует пробел после *"
    },
    {
        code: "function power(a, b) {\n  result = 1;\n  for (let i = 0; i <= b; i++) {\n    result *= a;\n  }\n  return result;\n}",
        correctLine: 3,
        correctDescription: "Неправильное условие цикла (i <= b)"
    }
];

if (typeof window !== 'undefined') {
    window.codes = codes; 
}

module.exports = codes; 