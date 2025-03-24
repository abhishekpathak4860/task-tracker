# task-tracker

## Overview

This is an advanced To-Do application built using React with Redux for state management and API integration to enhance functionality. The app allows users to add, delete, and prioritize tasks while also integrating external API data (such as weather data) for relevant task information.
This project follows best practices for React development, ensuring responsiveness, user authentication, and persistent storage.

## Features Implemented

⚫ **Add Task**:  Users can input and add tasks.  
⚫ **View Tasks**:  Tasks are displayed in a list format.  
⚫ **Delete Task**:Users can remove tasks using a delete button.  
⚫ **Task Prioritization**: Users can assign priorities (High, Medium, Low).  
⚫ **Persistent Storage**: Tasks are saved using Local Storage / Session Storage.  
⚫ **API Integration**: Fetch and display external data (e.g., weather details).  
⚫ **User Authentication**: Login/logout functionality using Redux (mock authentication).  
⚫ **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.  
⚫ **Error Handling**: Manages and displays errors gracefully.  

## Technologies Used  

⚫ **React.js**: Frontend framework  
⚫ **Redux / Redux Thunk**: State management  
⚫ **JavaScript (ES6+)**: Core logic  
⚫ **LocalStorage / SessionStorage**: Data persistence  
⚫ **Public API (Weather API)**: Data integration  

## Login Authentication (Mock) 

<img src="https://github.com/user-attachments/assets/f31dfdd4-67e7-4976-9f3e-5ee4b07b7fe9" width="100%" > 
This screen represents the login page for the To-Do application. We implemented Redux for state management, ensuring secure authentication. The authentication process is mocked, meaning it simulates login without a backend. The UI is designed with React and CSS, featuring a simple and clean layout.  

## Main Task Management Screen  

<img src="https://github.com/user-attachments/assets/016b084d-d4b0-497b-97ae-fde4de281bba" width="100%" > 

This is the main interface of the To-Do application, where users can add, categorize, and manage tasks. Users can input a task, select its priority and type, and add it to the list. The Redux state management handles task data, ensuring smooth updates. A Logout button is available to end the session. The UI is built using React and CSS for a clean and responsive experience.  

## Weather Data Integration 

<img src="https://github.com/user-attachments/assets/cd9548f9-818a-42e3-99be-7e8932a5e3bb" width="100%" >  

This section enables users to check real-time weather conditions before planning outdoor tasks. By entering a city name, users can fetch weather data using an API. This feature helps in making informed decisions based on weather conditions.

The implementation uses React for UI, Redux for state management, Axios for API requests, and Redux Thunk for handling asynchronous actions, ensuring smooth and efficient data fetching.  

## Installation and Setup  

### Prerequisites

#### Ensure you have Node.js and npm installed:

node -v && npm -v  

## Clone the Repository  

git clone https://github.com/yourusername/advanced-todo-app.git  
cd Todo-App  

## Install Dependencies  

npm install  

##  Start the Development Server  

npm run dev

## Project Structure  

/advanced-todo-app  
│── /src  
│   │── /components       # React Components    
│   │── /redux            # Redux store and actions  
│   │── App.js            # Main App component  
│   │── index.js          # Root React entry file  
│── package.json          # Dependencies & scripts  
│── README.md             # Project documentation  

## License  

This project is licensed under the MIT License.  
