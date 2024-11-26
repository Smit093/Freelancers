# Freelancer Website - README

## Project Overview
**Freelancer Website** is a full-stack application designed to connect freelancers with clients seeking various services. Built using **React** for the frontend and **Django** for the backend, this platform allows users to create profiles, showcase their skills, and find job opportunities. The application uses **SQLite** for data storage.

![Screenshot](https://github.com/user-attachments/assets/23d60138-14c1-4d9c-b7fc-04ccd3834062)

![Screenshot](https://github.com/user-attachments/assets/2b72edcd-296d-4eaa-889c-fe24dfcbd2bf)

## Features
- **User Profiles:** Freelancers can create and manage their profiles to showcase their skills, experience, and portfolio.
- **Job Listings:** Clients can post job opportunities that freelancers can browse and apply for.
- **Search Functionality:** Users can search for freelancers or job listings based on specific criteria.
- **Messaging System:** Built-in messaging feature for communication between freelancers and clients.
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.

## Tech Stack
- **Frontend:** React
- **Backend:** Django
- **Database:** SQLite

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Python 3.x
- Django
- SQLite (comes pre-installed with Django)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/freelancer-website.git
   cd freelancer-website
   ```

2. **Set up the Backend:**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Create a virtual environment (optional but recommended):
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install required packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Run migrations to set up the database:
     ```bash
     python manage.py migrate
     ```
   - Start the Django server:
     ```bash
     python manage.py runserver
     ```

3. **Set up the Frontend:**
   - Open a new terminal window and navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React application:
     ```bash
     npm start
     ```

### Usage
Once both the backend and frontend are running, you can access the application at `http://localhost:3000`. Users can register, log in, browse job listings, and communicate through the messaging system.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please submit a pull request or open an issue.

---
