# crud-op-backend

A RESTful CRUD API built with Node.js, Express, and MongoDB for managing member records.

---

## Features

- Create new members  
- Get all members  
- Get a member by ID  
- Update a member by ID  
- Delete a member by ID  

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- express-async-handler for error handling  

---

## API Endpoints

| Method | Endpoint               | Description           | Request Body                                      | Response                    |
|--------|------------------------|-----------------------|--------------------------------------------------|-----------------------------|
| POST   | `/member/createmember` | Create a new member   | JSON: Name, Age, Gender, Course, Contact, Address | Success message (201 Created) |
| GET    | `/member/getmembers`   | Get all members       | None                                             | Array of member objects     |
| GET    | `/member/:id`          | Get member by ID      | None                                             | Member object               |
| PUT    | `/member/:id`          | Update member by ID   | JSON with fields to update                        | Updated member object       |
| DELETE | `/member/:id`          | Delete member by ID   | None                                             | Deleted member object       |

---

## Sample Request Body (POST/PUT)

```json
{
  "Name": "John Doe",
  "Age": 25,
  "Gender": "male",
  "Course": "bca",
  "Contact": "1234567890",
  "Address": "123 Main Street"
}

Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/crud-op-backend.git
cd crud-op-backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory with the following variables:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy
Edit
npm start
The server will run at http://localhost:5000 (or the port you specified).

Notes
Uses express-async-handler for clean asynchronous error handling.

Mongoose manages data schema and database interaction.

Proper HTTP status codes and JSON responses for success and errors.

