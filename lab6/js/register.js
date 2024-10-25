function validatePhone() {
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phoneValue = phoneInput.value.trim();

  const phoneRegex = /^\+380\d{9}$/;

  phoneError.textContent = "";

  if (!phoneRegex.test(phoneValue)) {
    phoneError.textContent =
      "Неправильний формат номера телефону. Використовуйте +38(0__) -___-__-__.";
    return false;
  }

  return true;
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (!name) {
    nameError.textContent = "Ім'я є обов'язковим";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  const lastName = document.getElementById("lastName").value.trim();
  const lastNameError = document.getElementById("lastNameError");
  if (!lastName) {
    lastNameError.textContent = "Прізвище є обов'язковим";
    isValid = false;
  } else {
    lastNameError.textContent = "";
  }

  const middleName = document.getElementById("middleName").value.trim();
  const middleNameError = document.getElementById("middleNameError");
  if (!middleName) {
    middleNameError.textContent = "По батькові є обов'язковим";
    isValid = false;
  } else {
    middleNameError.textContent = "";
  }

  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Неправильний формат електронної пошти";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (!validatePhone()) {
    isValid = false;
  }

  const genderError = document.getElementById("genderError");
  if (!document.querySelector('input[name="gender"]:checked')) {
    genderError.textContent = "Будь ласка, виберіть стать";
    isValid = false;
  } else {
    genderError.textContent = "";
  }

  return isValid;
}

function submitForm(event) {
  event.preventDefault();
  if (!validateForm()) return;

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const middleName = document.getElementById("middleName").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const phone = document.getElementById("phone").value;

  addToTable(name, lastName, middleName, email, phone, gender);
}

function addToTable(name, lastName, middleName, email, phone, gender) {
  const tableBody = document.getElementById("userTable").querySelector("tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
        <td><input type="checkbox" class="rowCheckbox"></td>
        <td>${name}</td>
        <td>${lastName}</td>
        <td>${middleName}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${gender}</td>
        <td>
            <button onclick="duplicateRow(this)">Дублювати</button>
            <button onclick="deleteRow(this)">Видалити</button>
        </td>
    `;

  tableBody.appendChild(row);
}

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

function duplicateRow(button) {
  const row = button.parentElement.parentElement.cloneNode(true);
  document.getElementById("userTable").querySelector("tbody").appendChild(row);
}

function handleSelectedRows(action) {
  const checkboxes = document.querySelectorAll(".rowCheckbox:checked");
  checkboxes.forEach((checkbox) => {
    const row = checkbox.parentElement.parentElement;
    if (action === "delete") row.remove();
    else if (action === "duplicate")
      addToTable(
        ...Array.from(row.children)
          .slice(1, 4)
          .map((td) => td.textContent)
      );
  });
}
