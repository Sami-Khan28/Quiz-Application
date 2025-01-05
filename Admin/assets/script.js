// admin panel javscript //
function userName() {
  const loginUser = JSON.parse(localStorage.getItem("userLogedIn"));

  let printUserName = document.getElementById("show-user-name");
  if (printUserName) {
    printUserName.innerHTML = loginUser.name;
  }
}

function LoggedInUserFirstLetter() {
  let loggedInUser = JSON.parse(localStorage.getItem("userLogedIn"));
  let currentUserName = document.getElementById("current-user-name");
  let currentUserEmail = document.getElementById("current-user-email");
  let userName = loggedInUser.name;
  // console.log(userName.charAt(0));
  document.getElementById("logedinuser-firstname").innerText = userName.charAt(0);
  currentUserName.innerText = loggedInUser.name;
  currentUserEmail.innerText = loggedInUser.email
}



function hideAndShowMenuBar() {
  let menuBar = document.getElementById("admin-page-menu").style;
  let content = document.getElementById("home-page");
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    content.style.marginLeft = "20px";
  }else 
  {
    menuBar.marginLeft = "0px";
    content.style.marginLeft = "220px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function quizeTableMarginLeft() {
  let menuBar = document.getElementById("admin-page-menu").style;
  let content = document.getElementById("Quize-page")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    content.style.marginLeft = "20px";
  }else 
  {
    menuBar.marginLeft = "0px";
    content.style.marginLeft = "220px"
  }
  // menuBar.classList.toggle("hide-menu");
}


function userTableMarginLeft(){
  let menuBar = document.getElementById("admin-page-menu").style;
  let usersContent = document.getElementById("users-page")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    usersContent.style.marginLeft = "20px";
  }else 
  {
    menuBar.marginLeft = "0px";
    usersContent.style.marginLeft = "220px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function addQuestionMarginLeft(){
  let menuBar = document.getElementById("admin-page-menu").style;
  let addQuizeContent = document.getElementById("add-quize-section")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    addQuizeContent.style.marginLeft = "20px";
  }else 
  {
    menuBar.marginLeft = "0px";
    addQuizeContent.style.marginLeft = "220px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function userQuizeDetail(){
  let menuBar = document.getElementById("admin-page-menu").style;
  let content = document.getElementById("quize-details")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    content.style.marginLeft = "20px";
  }else 
  {
    menuBar.marginLeft = "0px";
    content.style.marginLeft = "220px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function testViewMarginLeft(){
  let menuBar = document.getElementById("admin-page-menu").style;
  let content = document.getElementById("unique-test-section")
  // menuBar.marginLeft = "0px";
  if(menuBar.marginLeft === "0px" || menuBar.marginLeft === ""){
    menuBar.marginLeft = "-200px";
    content.style.marginLeft = "20px";
  }else 
  {
    menuBar.marginLeft = "0px";
    content.style.marginLeft = "220px"
  }
  // menuBar.classList.toggle("hide-menu");
}

function countingStudent() {
  let users = JSON.parse(localStorage.getItem("user"));
  console.log(users);
  let countingUsers = document.getElementById("student-counting");
  for (let i = 0; i < users.length; i++) {
    countingUsers.innerText = `${i + 1}`;
  }
}

function informationOfUsers() {
  const user = JSON.parse(localStorage.getItem("user"));

  for (let i = 0; i < user.length; i++) {

    let tableBody = document.getElementById("users-list");
    let tRow = document.createElement("tr");
    tableBody.append(tRow);

    let td1 = document.createElement("td");
    td1.innerText = `${i + 1}`;

    let td2 = document.createElement("td");
    td2.innerText = user[i].name;

    let td3 = document.createElement("td");
    td3.innerText = user[i].email;

    let td4 = document.createElement("td");
    td4.innerHTML = user[i].givenTestOfUser ? `<a href="given-test-of-users.html?name=${user[i].name}&email=${user[i].email}">${user[i].givenTestOfUser}</a>` : "Not Attemped";
  
    let td5 = document.createElement("td");
    td5.innerText = user[i].latestScore || "Not Attemped"
    console.log(td5);

    tRow.append(td1, td2, td3, td4, td5,);
  }
}

// redirect function for add question
function redirectAddQuestion(){
  location.href="add-questions.html"
}
function displayAllQuizes() {
  const allQuizes = JSON.parse(localStorage.getItem("Quizes"));
  //   console.log(allQuizes.option[0])
  for (let i = 0; i < allQuizes.length; i++) {
    let tableBody = document.getElementById("Quizes-list");
    
    let tRow = document.createElement("tr");
    tRow.setAttribute("data-qi", i);
    tableBody.append(tRow);

    let td1 = document.createElement("td");
    td1.style.textAlign = "center";
    td1.style.width = "10%"
    td1.innerText = `${i + 1}`;

    let td2 = document.createElement("td");
    td2.innerHTML = `<p id="display-quize">${allQuizes[i].question}</p>`;

    let td3 = document.createElement("td");
    td3.style.textAlign = "center";
    td3.style.width = "20%";
    td3.innerHTML = `<i class="fa-solid fa-pencil" id="edit-icon" onclick="editQuize(${i})"></i> <i class="fa-solid fa-trash-can" id="delete-quize" onclick="showConfirmBox(${i})"></i> <i class="fa-solid fa-eye" id="view-icon" onclick="questionDetail(${i})"></i>`;
    
    tRow.append(td1, td2, td3);
  }
}

// delete quize
let deleteIndex;
function deleteQuize(){
  let confirmPopUp = document.getElementById("confirm-section");
  const allQuize = JSON.parse(localStorage.getItem("Quizes"));
  console.log(deleteIndex, allQuize)
  allQuize.splice(deleteIndex,1);
  localStorage.setItem("Quizes", JSON.stringify(allQuize));
  confirmPopUp.style.display = "none"
  window.location.reload()
}

function showConfirmBox(index){
  const viewQuizeContainer = document.getElementById("view-quize-wrapper");
  deleteIndex=index;
  console.log("hiii",deleteIndex)
  let confirmPopUp = document.getElementById("confirm-section");
  let editQuize = document.getElementById("edit-quize-wrapper");
  if(confirmPopUp.style.display === "none"){
    confirmPopUp.style.display = "flex"
  }else{
    confirmPopUp.style.display = "flex"
  }

  // if(confirmPopUp.style.display === "flex"){
  //   viewQuizeContainer.style.display = "none"
  // }

  // if(confirmPopUp.style.display === "flex"){
  //   editQuize.style.display = "none"
  // }
}

function hideConfirmBox(){
  let confirmPopUp = document.getElementById("confirm-section");
  if(confirmPopUp.style.display === "flex"){
    confirmPopUp.style.display = "none"
  }
}

let countAttempt = 1;

function testGivenOfUser(){
  const numberOfUserTest = JSON.parse(localStorage.getItem("userTest"));
  console.log(numberOfUserTest[0].date)
  const param = new URLSearchParams(window.location.search);
  const email = param.get("email")
  
  for(let i=0; i < numberOfUserTest.length; i++){

    if(email === numberOfUserTest[i].email){
    let tableBody = document.getElementById("quize-body");
    let tRow = document.createElement("tr");
    tableBody.append(tRow);

    let td1 = document.createElement("td");
    td1.style.textAlign = "center";
    td1.innerText = `Attemp ${countAttempt++}`;

    let td2 = document.createElement("td");
    td2.innerText = numberOfUserTest[i].score || "Not Attempt";

    let td3 = document.createElement("td");
    td3.style.textAlign = "center";
    td3.innerHTML = numberOfUserTest[i].date || "Not Attempt";
    console.log(td3);

    let td4 = document.createElement("td");
    td4.style.textAlign = "center";
    td4.innerHTML = numberOfUserTest[i].time || "Not Attempt";;

    let td5 = document.createElement("td");
    td5.style.textAlign = "center";
    td5.innerHTML = `<a href="user-unique-test.html?name=${numberOfUserTest[i].name}&email=${numberOfUserTest[i].email}&index=${i}&countTestAttempt=${countAttempt-1}">View Test</a>`

    tRow.append(td1,td2,td3,td4,td5);
  }
}
}

function uniqueTestOfUser(){
  const numberOfUserTest = JSON.parse(localStorage.getItem("userTest"));
  // console.log(numberOfUserTest[0].questions[1].question)
  const param = new URLSearchParams(window.location.search);
  const email = param.get("email")
  const countTest = param.get("countTestAttempt")
  const index = param.get("index")
  let showTestCount = document.getElementById("show-test-attempt-count")
  let showTestScore= document.getElementById("show-test-score")
  let showTestDate = document.getElementById("show-test-date")
  let showTestTime = document.getElementById("show-test-time-taken")
  let questionIndex = 1
  for(let i=0; i < numberOfUserTest.length; i++){

    if(i == index){

    showTestCount.innerText = `Attemp ${countTest}`;
    showTestScore.innerText = numberOfUserTest[i].score;
    showTestDate.innerText = numberOfUserTest[i].date;
    showTestTime.innerText = numberOfUserTest[i].time;

      let question = numberOfUserTest[i].questions
      for(let j=0; j < question.length; j++){
    let testQuestionDetail = document.getElementById("unique-test-quize");
    let mainDiv = document.createElement("div");
    testQuestionDetail.append(mainDiv);

    let innerDivOfMainDiv = document.createElement("div")
     
    let innerDiv = document.createElement("div");
    let p1 = document.createElement("p")
    p1.innerText = `Question ${questionIndex ++}`;

    let p2 = document.createElement("p");
    p2.innerText = question[j].question;
    innerDiv.append(p1,p2)
     
    let innerDiv1 = document.createElement("div");
    let p3 = document.createElement("p")
    p3.innerText = "Option1";

    let p4 = document.createElement("p");
    p4.innerText = question[j].options[0];
    if(question[j].options[0] == question[j].choosedAnswer){
      if(question[j].choosedAnswer == question[j].answer){
        p4.style.backgroundColor = "#90EE90"
    } 
    else{
      p4.style.backgroundColor = "#90EE90"
    }
  }else if(question[j].options[0] == question[j].answer){
    p4.style.backgroundColor = "#F75D59"
  }else{
    p4.style.backgroundColor = "transparent"
  }
  innerDiv1.append(p3,p4)
    
    let innerDiv2 = document.createElement("div");
    let p5 = document.createElement("p")
    p5.innerText = "Option2";

    let p6 = document.createElement("p");
    p6.innerHTML = question[j].options[1];
    if(question[j].options[1] == question[j].choosedAnswer){
      if(question[j].choosedAnswer == question[j].answer){
        p6.style.backgroundColor = "#90EE90"
    } 
    else{
      p6.style.backgroundColor = "#90EE90"
    }
  }else if(question[j].options[1] == question[j].answer){
    p6.style.backgroundColor = "#F75D59"
  }else{
    p6.style.backgroundColor = "transparent"
  }
    innerDiv2.append(p5,p6)
     
    let innerDiv3 = document.createElement("div");
    let p7 = document.createElement("p")
    p7.innerText = "Option3";
  
    let p8 = document.createElement("p");
    p8.innerHTML = question[j].options[2];
    if(question[j].options[2] == question[j].choosedAnswer){
      if(question[j].choosedAnswer == question[j].answer){
        p8.style.backgroundColor = "#90EE90"
    } 
    else{
      p8.style.backgroundColor = "#90EE90"
    }
  }else if(question[j].options[2] == question[j].answer){
    p8.style.backgroundColor = "#F75D59"
  }else{
    p8.style.backgroundColor = "transparent"
  }
    innerDiv3.append(p7,p8)
    
    let innerDiv4 = document.createElement("div");
    let p9 = document.createElement("p")
    p9.innerText = "Option4";

    let p10 = document.createElement("p");
    p10.innerHTML = question[j].options[3];
    if(question[j].options[3] == question[j].choosedAnswer){
      if(question[j].choosedAnswer == question[j].answer){
        p10.style.backgroundColor = "#90EE90"
    } 
    else{
      p10.style.backgroundColor = "#90EE90"
    }
  }else if(question[j].options[3] == question[j].answer){
    p10.style.backgroundColor = "#F75D59"
  }else{
    p10.style.backgroundColor = "transparent"
  }
    innerDiv4.append(p9,p10)

    // let innerDiv5 = document.createElement("div");
    // let p13 = document.createElement("p")
    // p13.innerText = "Choosed Answer";

    // let p14 = document.createElement("p");
    // p14.innerHTML = question[j].choosedAnswer;
    // if(question[j].choosedAnswer == question[j].answer){
    //   p14.style.backgroundColor = "#90EE90"
    // }else{
    //   p14.style.backgroundColor = "#F75D59"
    // }
    // innerDiv5.append(p13,p14)

    // let innerDiv6 = document.createElement("div");
    // let p11 = document.createElement("p")
    // p11.innerText = "Correct Answer";

    // let p12 = document.createElement("p");
    // p12.innerHTML = question[j].answer;
    // p12.style.backgroundColor = "#90EE90"
    // innerDiv6.append(p11,p12)


    innerDivOfMainDiv.append(innerDiv,innerDiv1,innerDiv2,innerDiv3,innerDiv4);
    mainDiv.append(innerDivOfMainDiv)
    }
  }
}
}

//  add questions and options
function addNewQuizes(){
  const quize =JSON.parse(localStorage.getItem("Quizes")) || [];
  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;
  const answer = document.getElementById("option-list").value;
  console.log(question,option1,option2,option3,option4,answer);

  if(question && option1 && option2 && option3 && option4 && answer){

  const addNewQuize = {
    question : question,
    options : [option1, option2, option3, option4],
    answer: answer
  }

  quize.push(addNewQuize);

  localStorage.setItem("Quizes" , JSON.stringify(quize));

  alert("quize is add")

  document.getElementById("question").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
  document.getElementById("option4").value = "";
  document.getElementById("option-list").selectedIndex = 0;

}else{
  alert("please fill all the fields")
}
}
// admin logout function
function adminLogOut() {
  let logOut = document.getElementById("admin-logout-container");
  if (logOut.style.display === "block") {
    logOut.style.display = "none";
  } else {
    logOut.style.display = "block";
  }
}

function editQuizeExitButton(){
  let editQuize = document.getElementById("edit-quize-wrapper")
  if(editQuize.style.display == "flex"){
    editQuize.style.display = "none"
  }
}  

function editQuize(index){
    const allQuize = JSON.parse(localStorage.getItem("Quizes"));
    let confirmPopUp = document.getElementById("confirm-section");
    const viewQuizeContainer = document.getElementById("view-quize-wrapper");
    console.log("hiiiiii",index)
    adminIndex=index;
    console.log(allQuize[index].question)
    let editQuize = document.getElementById("edit-quize-wrapper");
    if(editQuize.style.display === "none"){
      editQuize.style.display = "flex"
      console.log("after if", editQuize)
      
    }else{
      editQuize.style.display = "flex"
    }
  //   if(editQuize.style.display === "flex"){
  //      viewQuizeContainer.style.display = "none"
  //   }

  //   if(editQuize.style.display === "flex"){
  //     confirmPopUp.style.display = "none"
  //  }

    document.getElementById("edit-question").value = allQuize[index].question;
    document.getElementById("option1").value = allQuize[index].options[0];
    document.getElementById("option2").value = allQuize[index].options[1];
    document.getElementById("option3").value = allQuize[index].options[2];
    document.getElementById("option4").value = allQuize[index].options[3];

    document.getElementById("select-option1").innerText = allQuize[index].options[0];
    document.getElementById("select-option2").innerText = allQuize[index].options[1];
    document.getElementById("select-option3").innerText = allQuize[index].options[2];
    document.getElementById("select-option4").innerText = allQuize[index].options[3];

    document.getElementById("select-option1").value = allQuize[index].options[0];
    document.getElementById("select-option2").value = allQuize[index].options[1];
    document.getElementById("select-option3").value = allQuize[index].options[2];
    document.getElementById("select-option4").value = allQuize[index].options[3];

  } 

  function addEditQuize(){
    const allQuize = JSON.parse(localStorage.getItem("Quizes"));
    let editQuize = document.getElementById("edit-quize");
    
    let question = document.getElementById("edit-question").value 
    let option1 = document.getElementById("option1").value 
    let option2 = document.getElementById("option2").value 
    let option3 = document.getElementById("option3").value 
    let option4 = document.getElementById("option4").value 

    allQuize[adminIndex].question = question;
    allQuize[adminIndex].options[0] = option1;
    allQuize[adminIndex].options[1] = option2;
    allQuize[adminIndex].options[2] = option3;
    allQuize[adminIndex].options[3] = option4;


    localStorage.setItem("Quizes" , JSON.stringify(allQuize))

    alert("Add edit quize successfully")
    editQuize.style.display = "none"
    window.location.reload()
  }


  function selectOption(){
    const option1 = document.getElementById("option1").value;
    const option2 = document.getElementById("option2").value;
    const option3 = document.getElementById("option3").value;
    const option4 = document.getElementById("option4").value;

    document.getElementById("select-option1").innerText = option1;
    document.getElementById("select-option2").innerText = option2;
    document.getElementById("select-option3").innerText = option3;
    document.getElementById("select-option4").innerText = option4;

    document.getElementById("select-option1").value = option1;
    document.getElementById("select-option2").value = option2;
    document.getElementById("select-option3").value = option3;
    document.getElementById("select-option4").value = option4;
  }


function questionDetail(index){
  let confirmPopUp = document.getElementById("confirm-section");
  const allQuize = JSON.parse(localStorage.getItem("Quizes")); 
  const viewQuizeContainer = document.getElementById("view-quize-wrapper");
  let editQuize = document.getElementById("edit-quize");
  let question = document.getElementById("question")
  let option1 = document.getElementById("option-1")
  let option2 = document.getElementById("option-2")
  let option3 = document.getElementById("option-3")
  let option4 = document.getElementById("option-4")
  let correctAnswer = document.getElementById("correct-option")
  // let viewQuizeOptions = document.querySelectorAll("view-quize-data");

  if(viewQuizeContainer.style.display === "none"){
    viewQuizeContainer.style.display = "flex"
  }else{
    viewQuizeContainer.style.display = "flex"
  }

  question.innerText = allQuize[index].question;
  option1.innerText = allQuize[index].options[0];
  option2.innerText = allQuize[index].options[1];
  option3.innerText = allQuize[index].options[2];
  option4.innerText = allQuize[index].options[3];

  correctAnswer.innerText = allQuize[index].answer;
}

function viewQuizeExitButton(){
  const viewQuizeContainer = document.getElementById("view-quize-wrapper");
  if(viewQuizeContainer.style.display == "flex"){
    viewQuizeContainer.style.display = "none"
  }
} 

function showUserNameEmail(){
  const param = new URLSearchParams(window.location.search);
  let name = document.getElementById("user-name");
  let email = document.getElementById("user-email");

  name.innerText = param.get("name");
  email.innerText = param.get("email");
  
}