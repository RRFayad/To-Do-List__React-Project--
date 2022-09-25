# To Do List - React App

## How to use it

1. Visit [Fayad's To Dos](https://personal-to-do-list-4ef11.web.app/);
2. Sign Up (or Login) - You can switch the options by clicking on "Create new account" or "I have an account";
   - The validation is quite simple, the password must only have at least 06 characters;
3. After you are logged in, you just add your to do in the input field, and click on Add To Do. This will create a list for your tasks;
4. You can click on the task to set is as Done, and click on the trash can to delete it;
5. In the menu (on top for big devices, and a sandwich menu for mobile devices) you can navigate through:
   - To Do List (the app you are already seeing after you logged in);
   - Profile Page;
   - Logout;
6. In the Profile Page you can change your password;
7. After you Logout, you can Login in other devices and keep tracking the same tasks.

## How it was made

- This app was created using React and React Router, and the data is stored in Firebase. The next topics will cover and detail the main parts of the App Structure.

### Login Form

- Using React Hooks (useState and useRef), event listeners (onClick, onFocus, onBlur) and Conditional Rendering a logic was created to do basic validation and return the user some feedback;
- It also works with useContext to intereact with the authentication logic;

### To Do List Logic and Storage

- The To Do list Logic was created via Context API (check Store folder), in order to organize the code and make everything more readable;
- The main functionalities are:
  - Fetch Data (from firebase);
  - Add To Do;
  - Remove To Do;
  - Toggle Status (done and undone);

### Authentication Logic

- The Authentication Logic was created via Context API (check Store folder) and consumes the Firebase Auth Rest Api, allowing the user to:
  - Create a New Account,
  - Login,
  - Logout,
  - Change the Password.

### Navigation Logic

- The navigation was done via React DOM package, with the logic created in the App.jsx file.

### Styling

- The project was styled using CSS Modules;

- Responsiveness:

  - For tablets and desktops The Navigation Menu works as a navigation bar o the top of the screen, with the links and logic.
  - For small devices (smartphones) the Navigation Menu work as a Sandwich Menu, which opens a Modal and backdrop (The Modal and Backdrop are rendered as portals).

## Next Steps to Improve the Logic

1. Improve the Backend

   - The focus of this project is showing my personal skills working with React. As the backend logic was not the focus, it has to be improved in order to make this application really useful.

2. Implement Authentication Features

   - As it was not the focus, there are also common authentication features that were not implemented, such as Recover password, Change E-mail and update idToken.

## Conclusion and Results of the Project

- As the main goal of this project was to test my skills on Developing React Applications, it succeeded, as it's an application that contains the main React Hooks and React Features, such as:
  - useState, useContext, useRef, useEffect, useCallback, useMemo;
  - Portals;
  - React.lazy();
  - Suspense;
  - Http Requests;
  - Conditional Rendering;
  - UI / UX:
    - Loading Spinner;
    - Form Validation and Styling;
  - Routing;
  - JWT Authentication.
