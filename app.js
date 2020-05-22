// ********************************************************************
// Storage Controller
// ********************************************************************
const StorageControl = (function() {
  // Public Methods
  return {
    getUserFromStorage: function() {
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
// User Controller
// ********************************************************************
const UserControl = (function() {
  // User Constructor
  const User = function(name) {
    this.name = name;
  };

  const data = {
    name: StorageControl.getUserFromStorage()
  };

  //   Public Methods
  return {
    getUser: function() {
      return data;
    }
  };
})();

// ********************************************************************
// Item Controller
// ********************************************************************

// ********************************************************************
// UI Controller
// ********************************************************************
const UIControl = (function() {
  const UISelectors = {
    userNameInput: '#user-name',
    userAddBtn: '.user-add-btn'
  };

  //   Public Methods
  return {
    getSelectors: function() {
      return UISelectors;
    }
  };
})();

// ********************************************************************
// App Controller
// ********************************************************************
const App = (function(UserControl, StorageControl, UIControl) {
  // Load Event Listeners
  const loadEventListeners = function() {
    //   Get UI Selectors
    const UISelectors = UIControl.getSelectors();

    // Add User Event
    document
      .querySelector(UISelectors.userAddBtn)
      .addEventListener('click', userAddSubmit);
  };

  //   Add User Sbmit
  const userAddSubmit = function(e) {
    console.log('User Added');
    e.preventDefault();
  };

  // Public methods
  return {
    init: function() {
      //   Check if first visit or returning
      const items = UserControl.getUser();

      //   Load Event Listeners
      loadEventListeners();
    }
  };
})(UserControl, StorageControl, UIControl);

// ********************************************************************
// Initialize App
// ********************************************************************
App.init();

// TECH USED

// Vanilla Javascript

// Materialize css
