function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';  // Clear any previous content
  
    for (let i = 1; i <= numFields; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'field' + i;
      input.placeholder = 'Field ' + i;
      inputContainer.appendChild(input);
    }
  }
  
  function validateForm(event) {
    event.preventDefault();  // Prevent form submission
  
    const inputContainer = document.getElementById('inputContainer');
    const inputs = inputContainer.getElementsByTagName('input');
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
    }
  
    alert('Form submitted successfully!');
  }
  
  document.getElementById('numFields').addEventListener('change', function () {
    const selectedValue = parseInt(this.value, 10);
    generateInputFields(selectedValue);
  });
  
  document.getElementById('dynamicForm').addEventListener('submit', validateForm);
  