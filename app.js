// ********************************************************************
// App Controller
// ********************************************************************
const App = (function() {
  // Public methods
  return {
    init: function() {
      //   Check if first visit or returning
      if (localStorage.getItem('user') === null) {
        document.getElementById('new-user').style.display = 'block';
        document.getElementById('returning-user').style.display = 'none';
      } else {
        document.getElementById('new-user').style.display = 'none';
        document.getElementById('returning-user').style.display = 'block';
      }
    }
  };
})();

// ********************************************************************
// Initialize App
// ********************************************************************
App.init();

// TECH USED

// Vanilla Javascript

// Materialize css
