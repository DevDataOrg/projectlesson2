// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

//     movie.as
//     movie[as]

// Проверить, чтобы все работало без ошибок в консоли */


// /* Задание на урок:
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //+ унарный плюс в число

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},  // пустой обьект
//     actors: {},  //пустой обьект
//     genres: [],  //пустой массив
//     privat: false // булево значение
// };

// // const a = prompt ('Один из последних просмотренных фильмов?', ''),
// //     b = prompt ('На сколько оцените его?', ''),
// //     c = prompt ('Один из последних просмотренных фильмов?', ''),
// //     d = prompt ('На сколько оцените его?', '');

// //     personalMovieDB.movies[a] = b;
// //     personalMovieDB.movies[c] = d;


// //2-е ЗАДАНИЕ
//     for (let i = 0; i < 2; i++) {
//         const a = prompt ('Один из последних просмотренных фильмов?', ''),
//               b = prompt ('На сколько оцените его?', '');
//               if (a != null && b !=null && a != '' && b != '' && a.length < 50 ) { //проверка на нажатие отмена
//                 personalMovieDB.movies[a] = b;  //записываем ответы в базу
//                 console.log('done');
//               } else {
//                 console.log('error!!!');
//                 i--; //возврат цикла на одну итерацию назад и еще раз задаем вопросы пользователю
//               }
                
              
//     }
// //ЗАДАНИЕ 3-и 
// if (personalMovieDB.count < 10) {
//     console.log("просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// }else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }
//     console.log(personalMovieDB);


// // *
// // **
// // ***
// // ****
// // *****
// // ******
//     let result = '';
//     const lenght = 7;
//     for (let i = 1; i < lenght; i++) {

//         for (let j = 0; j < i; j++) {
//             result += "*";
//         }
//         result += '\n';
//     }

//     console.log(result);


    /* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

let numberOfFilms1;

function start () {
    numberOfFilms1 = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms1 == '' || numberOfFilms1 == null || isNaN (numberOfFilms1)) {
        numberOfFilms1 = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB1 = {
    count: numberOfFilms1,
    movies: {},  // пустой обьект
    actors: {},  //пустой обьект
    genres: [],  //пустой массив
    privat: false // булево значение
};

start ();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(), //trim обрезает пробелы вначале и конце
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB1.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB1.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB1.count >= 10 && personalMovieDB1.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB1.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();


//задание 2
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB1);
    }
}

showMyDB(personalMovieDB1.privat);

//задание 3
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {

        personalMovieDB1.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); //задает вопрос 3и раза
        //const genre  = prompt(`Ваш любимый жанр под номером ${i}`);
        //personalMovieDB1.genres[i - 1] = genre;
    }
}

writeYourGenres();