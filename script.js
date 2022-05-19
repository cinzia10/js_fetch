fetch('https://62860d21f0e8f0bb7c0f434d.mockapi.io/students')
    .then(responseCallBack)
    .then(resultCallBack)
    .catch(manageError);

function responseCallBack(response) {
    console.log(response);
    return response.json(); /// stessa funzione di JSON.parse();
}


function resultCallBack(result) {
    console.log(result);
    // displayStudents(result);
    const array = result.map(obj => Student.fromObj(obj));
    displayStudents(array)
}

function manageError(error) {
    console.log(error);
}

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



// fetch('./student-data.json').then(responseCallBack).then(resultCallBack);
// fetch('./student-data.json').then((resp)=>resp.json()).then((res)=>console.log("risultato", res));
