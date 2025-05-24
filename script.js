 let display = document.getElementById('display');

    const press=(val) =>{
     return  display.value += val;
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    function clearDisplay() {
      display.value = "";
    }
