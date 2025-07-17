# MAJOR_PROJECT_MERN_1

A MERN (MongoDB, Express.js, React, Node.js) stack-based project for a travel destinations platform. Users can register, log in, browse listings, and perform CRUD operations. The application uses MongoDB for database operations, Express and Node for backend APIs, and EJS for templating on the frontend.

## 🌐 Live Demo
[View Deployed Project](https://major-project-mern-1.onrender.com/listings) -- Replace with your actual deployment link

## 📁 Project Structure
```
MAJOR_PROJECT_MERN_1/
├── models/
├── public/
├── routes/
├── views/
├── .env
├── app.js
├── package.json
└── README.md
```

## 🛠️ Tech Stack
- Frontend: EJS, HTML, CSS, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB (via Mongoose)
- Authentication: Passport.js, bcrypt
- Image Uploads: Cloudinary, Multer
- Deployment: Render

## 🚀 Features
- User Registration & Login
- Flash Messages for Feedback
- Add, Update, Delete Listings
- MongoDB Image Storage with Cloudinary
- Error Handling with Custom Middleware

## 📦 Installation
```bash
git clone https://github.com/kartikydv120/MAJOR_PROJECT_MERN_1.git
cd MAJOR_PROJECT_MERN_1
npm install
```

## ⚙️ Environment Variables
Create a `.env` file in the root directory and add the following:

```env
DB_URL=your_mongodb_atlas_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
SECRET=your_session_secret
```

Also create a `.env.example` file to share structure without secrets:

```env
DB_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
SECRET=
```

-- Reminder about env files
> 🔐 Never commit your `.env` file. It contains sensitive information.

## 🖼️ Screenshots

### 🏠 Home Page  
![Home](screenshots/home.png)

### 📃 Listing Page  
![Listing](screenshots/listing.png)

### ➕ New Listing Form  
![New Listing](screenshots/new-listing.png)

-- Testing Note
## 🧪 Testing
Basic manual testing is implemented. You can use tools like Postman for API testing or write test cases using Mocha/Chai.

-- License
## 🧾 License
This project is licensed under the [MIT License](LICENSE).

-- Author Info
## 🧑‍💻 Author
- Kartik Yadav  
GitHub: [@kartikydv120](https://github.com/kartikydv120)

Feel free to raise an issue or contribute to the project!

-- Contribution Guide
## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

-- Contact Info
## 📬 Contact
If you want to reach out for any reason, you can find me on [LinkedIn](https://www.linkedin.com/in/kartikydv120)  
or email me at `your-email@example.com`.
