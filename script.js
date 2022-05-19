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
    displayStudents(result);
}

function manageError(error) {
    console.log(error);
}

function displayStudents(arrayOfStudents) {
    const arrayContainer = document.createElement('div')
    for (let i = 0; i < arrayOfStudents.length; i++) {
        const student = arrayOfStudents[i];
        const studentsContainer = document.createElement('div');
        const span = document.createElement('span');
        const firstName = document.createTextNode(student.name + ' ' + student.surname);

        span.appendChild(firstName);
        studentsContainer.appendChild(span);
        arrayContainer.appendChild(studentsContainer);
    } 
    document.body.appendChild(arrayContainer);
}



// fetch('./student-data.json').then(responseCallBack).then(resultCallBack);
// fetch('./student-data.json').then((resp)=>resp.json()).then((res)=>console.log("risultato", res));
