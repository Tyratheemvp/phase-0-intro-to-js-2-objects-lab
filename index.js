// Initialize the employee Object with name and streetAddress keys
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with key and value non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee with key and value destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  