class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    const button = document.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdown-content');
    // this.content = new TabItem(content);
   
    
    // Add a click handler to the button reference and call the toggleContent method.
    button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.element.classList.toggle('.dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));