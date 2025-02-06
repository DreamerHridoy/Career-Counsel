🎯 Career Counsel
Career Counsel is a front-end web application designed to offer professional career guidance services. From personalized counseling sessions to skill development workshops, Career Counsel helps individuals explore their career options, enhance their skills, and prepare for future opportunities. 🚀

🌟 Features
💼 Career Counseling Sessions with certified professionals
📄 Resume Review to polish your job applications
👥 Group Workshops for collaborative learning
🎯 Interview Preparation with mock interviews
📊 Skill Development Training programs
⏱️ Time Management Workshops to boost productivity
🛠️ Tech Stack
Frontend: React, TailwindCSS, DaisyUI, Vite
Routing: React Router
Icons: React Icons
Notifications: React Toastify
Animations/Sliders: Swiper
Hosting: Firebase Hosting
📂 Project Structure
pgsql
Copy
Edit
career-counsel/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
├── dist/                   # Production build
├── firebase.json
├── package.json
└── README.md
⚡ Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/career-counsel.git
cd career-counsel
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Run the Development Server
bash
Copy
Edit
npm run dev
4️⃣ Build for Production
bash
Copy
Edit
npm run build
5️⃣ Preview Production Build
bash
Copy
Edit
npm run preview
🔑 Firebase Hosting Setup
Install Firebase CLI:

bash
Copy
Edit
npm install -g firebase-tools
Login to Firebase:

bash
Copy
Edit
firebase login
Initialize Firebase in your project:

bash
Copy
Edit
firebase init
Deploy the application:

bash
Copy
Edit
firebase deploy
📡 Services Offered
Service Name	Category	Price	Counselor	Rating ⭐	Date & Time
Career Counseling Sessions	Online	$50/session	Dr. Sarah Johnson	4.8	05-12-24 (5 PM - 6 PM)
Resume Review	Offline	$30/review	Mr. Alex Thompson	4.6	10-12-24 (3 PM - 4 PM)
Group Career Workshop	Group	$20/participant	Ms. Emily Carter	4.7	15-12-24 (2 PM - 4 PM)
Interview Preparation	Online	$40/session	Dr. David Lee	4.9	20-12-24 (11 AM - 12 PM)
Skill Development Training	Offline	$100/module	Prof. Megan Parker	4.5	25-12-24 (10 AM - 4 PM)
Time Management Workshop	Online	$35/session	Ms. Olivia Roberts	4.7	30-12-24 (2 PM - 3:30 PM)
🚀 Deployment
The app is deployed on Firebase Hosting with the following configuration in firebase.json:

json
Copy
Edit
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
📝 Contributing
Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature-branch)
Open a Pull Request
📜 License
This project is licensed under the MIT License.

