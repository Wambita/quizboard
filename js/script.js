const questions = document.getElementById('quiz')
const results = document.getElementById('result')
const submit = document.getElementById('submit')
var questions=[
{
    Question1:
    "What method is used to change strings to numbers?",
    choices: {
        A: "parseInt()",
        B: "toString()",
        C: "toNumber()",
    },
    answer: "B"
},
{
    Question2:
    "which built in method removes the last element from an array and returns that element?",
    choices: {
    A: "last()",
    B: "get()",
    C: "pop()",
    },
    answer: "C"
},
{    Question3:
    "which built in method reverses the order of the elements of an array?",
    choices:{
        A: "changeOrder(order)",
        B: "reverse()",
        c:"sort(order)",
    },
    answer: "B"
},
{
    Question4:
    "which of the following function of an array object calls a function for each element in the array?",
    choices:{
        A: "concat()",
        B:"every()",
        C:"forEach()",
    },
    answer:"C"
},
{
    Question5:"among the following keywords, which one is not  a statement?",
    choices:{
        A:"debugger",
        B:"use strict",
        C:"if",
    },
    answer: "B"
}


]