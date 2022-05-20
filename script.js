const responseCallBack = (response) => response.json();

const catchError = (error) => console.log(error);

const convertResultInArrayOfStudents = (result) => result.map(obj => Student.fromObj(obj));

const resultCallBack = (result) => displayStudents(convertResultInArrayOfStudents(result));

fetch('https://62860d21f0e8f0bb7c0f434d.mockapi.io/students')
    .then(responseCallBack)
    .then(resultCallBack)
    .catch(catchError);


    function displayStudents(arrayOfStudents) {
        const arrayContainer = document.createElement('div');
        arrayContainer.classList.add('conteiner')
        for (let i = 0; i < arrayOfStudents.length; i++) {
            const student = arrayOfStudents[i];
            const studentsContainer = document.createElement('div');
            studentsContainer.classList.add('student-card');
    
            const avatar = document.createElement("img");
            avatar.classList.add('avatar-student');
            avatar.src = student.avatarUrl;
            studentsContainer.appendChild(avatar);
    
            const span = document.createElement('span');
            span.classList.add('info-students');
            const text = document.createTextNode('name '  + student.name + '\r\n' +'cognome' + ' ' + student.surname + student.getDayToBirthday());
    
            span.appendChild(text);
            studentsContainer.appendChild(span);
            arrayContainer.appendChild(studentsContainer);
        } 
        document.body.appendChild(arrayContainer);
    }

// function responseCallBack(response) {
//     console.log(response);
//     return response.json(); /// stessa funzione di JSON.parse();
// }


// function catchError(error) {
//     console.log(error);
// }

// function resultCallBack(result) {
//     console.log(result);
//     // displayStudents(result);
//     const array = result.map(obj => Student.fromObj(obj));
//     displayStudents(array)
// }


// function convertResultInArrayOfStudents(result) {
//     const arrayOfStudents = result.map(obj => Student.fromObj(obj));
//     return arrayOfStudents;
//   }





// fetch('./student-data.json').then(responseCallBack).then(resultCallBack);
// fetch('./student-data.json').then((resp)=>resp.json()).then((res)=>console.log("risultato", res));

// fetch('./student_data.json').then(responseCallBack, manageError).then(resultCallback, manageError);

// fetch('./student-data.json').then(responseCallBack).then(resultCallback).catch(manageError);

// function responseCallBack(response){
//   console.log('response',response);
//   return response.text();
// }


// function resultCallback(result){
//   console.log('result', result);
// }

// function manageError(error){
//   console.log(error)
// }
// console.log('prima');

// fetch('./student-data.json').then((resp) => resp.json()).then((res) => console.log('risultato',res));

// setTimeout(logDopo, 0);

// setTimeout(logDopo, 10);

// setTimeout(logDopo, 100);

// setTimeout(logDopo, 1000)

// setTimeout(logDopo, 10000)




// function logDopo() {
//   console.log('dopo');
// }

// const ajax = new XMLHttpRequest()

// ajax.onreadystatechange = onreadystatechangeCallback

// ajax.open('get', './student-data.json');

// ajax.send()

// function onreadystatechangeCallback(){
//   if (this.readyState === 4) {
//     if(this.status === 200){
//       console.log(this.responseText)
//       const array = JSON.parse(this.responseText);
//       console.log(array);
//     } else {
//       console.log('server non raggiungibile')
//     }
//   }
// }