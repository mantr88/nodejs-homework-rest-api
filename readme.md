                      Node.js REST API for Phone Book

This project was created during the study of Node.js.
This API was created to ensure the operation of the contact book according to REST principles. Allows user authorization, and data validation before writing to the database. MongoDB is used as a database, it is a non-relational NoSQL database. With the help of the corresponding routes, the following functionality is implemented:
- /api/users/register - user registration in the application;
- /api/users/login - user login in the application;
- /api/users/current - viewing user credentials;
- /api/users/logout - user exit from the application;
- /api/users - editing user credentials;
- /api/users/avatars - edit user avatar;
- /api/users/verify - verification of the user's email by sending an email to the user with the verification code;
- /api/users/verify/:verificationToken - entering and sending verification of the user's email with appropriate validation;
- /api/contacts - receiving all user contacts;
- /api/contacts/:contactId - receiving contact data by ID;
- /api/contacts - adding a contact to the user's phone book;
- /api/contacts/:contactId/favorite - adding a contact to the user's selected contacts;
