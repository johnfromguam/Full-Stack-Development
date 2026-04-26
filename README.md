<b>Travlr Getaways - Full Stack Web Application</b>

<b>Overview</b>

This project is a full stack web application that supports both customer-facing and adinistrative functionality. The wapplication allows users to view trip data, while administartors can securely log in to add, edit, and manage trips. The project integrates an Angular single-page application (SPA) frontend with an Express and MongoDB backend.

<b>Architecture</b>

The frontend developoment in this project used both traditional Express-rendered HTML and a modern single-page application (SPA) built with Angular. In the earlier stages, Express served static HTML pages that required full page reloads when navigating between views. In contrast, the Angular SPA allows for dynamic content updates without reloading the page, creating a smoother and more responsive user experience. Angular also introduces a component-based structure, makin gthe code more modular and easier to maintain.

The backend uses a NoSQL MongoDB database because it is flexible and works well with JSON-based data. Since the application stores trip data with varying fields, MongoDB allows for easy storage and retrieval without requiring a fixed schema like a relational database. This flexibility makes it easier to develop and update the application as new features are added.

<b>Functionality</b>

JSON differs from JavaScript in that JSON is a data format used to store and transfer data, while JavaScript is a programming language used to manipulate that data. In this project, JSON acts as the connection between the frontend and the backend. The backend sends trip data as JSON through API endpoints, and the Angular frontend receives and displays that data to the user.

One example of improving functionality was refactoring the trip display into reusable components. Instead of repeating code for each trip, the application uses Angular components too dynamically render trip cards. This improves efficiency, reduces duplication, and makes the code easier to update. Reusable UI components also help maintain consistency across the application and simplify debugging.

<b>Testing</b>

Testing in this project involved working with API endpoints using different HTTP methods such as GET, POST, and PUT. GET requests were used to retrieve trip data, POST requests were used to create new trips and handle login, and PUT requests were used to update existing trip data. These requests were tested using browser developer tools, specifically the Netwrok tab, to verify that data was being sent and received correctly.

Security added complexity to testing because authentication was required before accessing certain endpoints. This involved verifying that authentication tokens were generated, stored, and sent correctly with requests. Understanding endpoints and methods was important because each endpoint is responsible for a specific action, and ensuring they are secure helps protec tthe application from unauthorized access.

<b>Reflection</b>

This course helped me better understand how a full stack application works by connecting frontend and backend development. I learned how to build a dynamic user interface using Angular and how to connect it to a backend API using services and HTTP requests. I also gained experience working with MongoDB and handling data in JSON format. 

In addition, I developed skills in debugging, API testing, and implementing authentication, which are important for real-world applications. These skills make me more confident in building and maintaining web applications and help make me a stronger candidate for roles in software development.

