//===============================================================//
const submit_btn = document.getElementById('submit_btn');
const result = document.getElementById('result');
const cardTitle = document.getElementById('card-title');
const form = document.getElementById('user_inf');

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();

  const fullName = document.getElementById('name').value;
  const password = document.getElementById('Password').value;
  const dateOfBirth = document.getElementById('birthday').value;
  const gender = document.getElementById('gender').value;
  const phoneNumber = document.getElementById('phone').value;

  let orderType = '';
  if (document.getElementById('shawerma').checked) {
    orderType = document.getElementById('shawerma').value;
  } else if (document.getElementById('zinger').checked) {
    orderType = document.getElementById('zinger').value;
  } else if (document.getElementById('burger').checked) {
    orderType = document.getElementById('burger').value;
  }
  let orderOption = '';
  if (document.getElementById('sandwich').checked) {
    orderOption += 'Sandwich ';
  }
  if (document.getElementById('combo').checked) {
    orderOption += 'Combo';
  }

  const newCustomer = new Customer(fullName, password, dateOfBirth, gender, phoneNumber, orderType, orderOption);

//========================local storge========================//
  let customers = JSON.parse(localStorage.getItem('customers')) || [];
  customers.push(newCustomer);
  localStorage.setItem('customers', JSON.stringify(customers));

  renderCustomerCard(newCustomer);
});

//===================================================================//
function Customer(fullName ,password, dateOfBirth , gender,phoneNumber , orderType  ,  orderOption , imageURL="blank-profile-picture-973460_640.webp" ){
        this.fullName = fullName;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.orderType = orderType;
        this.orderOption = orderOption;
        this.phoneNumber = phoneNumber;
        this.imageURL = imageURL;


     }
//============================FUNCTION===========================
function renderCustomerCard(customer) {
  
  //=================================card1=========================
  const card1 = document.createElement('div');
    card1.classList.add('card');
  
    const cardBody1 = document.createElement('div');
    cardBody1.classList.add('card-body');
  
    const passwordElement = document.createElement('p');
    passwordElement.textContent = `Password: ${customer.password}`;
  
    const genderElement = document.createElement('p');
    genderElement.textContent = `Gender: ${customer.gender}`;
  
    const orderTypeElement = document.createElement('p');
    orderTypeElement.textContent = `Order Type: ${customer.orderType}`;
  
    const orderOptionElement = document.createElement('p');
    orderOptionElement.textContent = `Order Option: ${customer.orderOption}`;
  
    cardBody1.appendChild(passwordElement);
    cardBody1.appendChild(genderElement);
    cardBody1.appendChild(orderTypeElement);
    cardBody1.appendChild(orderOptionElement);
    card1.appendChild(cardBody1);
  
    
  
  
  
  
  
  
  
  
    //======================card2==================================
    const card2 = document.createElement('div');
    card2.classList.add('card');
    
  
    const cardBody2 = document.createElement('div');
    cardBody2.classList.add('card-body');
  
    const nameElement = document.createElement('h5');
    nameElement.classList.add('card-title');
    nameElement.textContent = `Name: ${customer.fullName}`;
  
    const password = document.createElement('p');
    password.textContent = `Password: ${customer.password}`;
  
    const dateOfBirth = document.createElement('p');
    dateOfBirth.textContent = `Birthday: ${customer.dateOfBirth}`;
  
    // ===================== image================//
    const image = document.createElement('img');
    image.src = "blank-profile-picture-973460_640.webp";
    cardBody2.appendChild(nameElement);
    cardBody2.appendChild(password);
    cardBody2.appendChild(dateOfBirth);
    card2.appendChild(image);
    card2.appendChild(cardBody2);
    

    //======================container cards==============================
const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '20px'; 
    container.appendChild(card1);
    container.appendChild(card2);
  
    user_inf.appendChild(container);
}

  