🚀 Feedback Portal Application

A clean, modern, and responsive web application that collects and manages user feedback. This project is built using React, Material-UI, and Tailwind CSS.

✨ Features 

Responsive Layout: Desktop par permanent sidebar aur mobile par navigation drawer ke saath.

Feedback Form: Users name, email, aur message ke saath feedback submit kar sakte hain (MUI components ka use karke).

Email Notifications: Naya feedback submit hone par EmailJS ka use karke admin ko ek email notification jaata hai.

View Feedback: Saare feedback entries ek clean list (MUI Cards) mein display hote hain.

Live Search: Keyword daalkar feedback ko real-time mein search kar sakte hain (name, email, ya message se).

Date Filter: Feedback ko submit ki gayi date se filter kar sakte hain (MUI Date Picker).

Delete with Confirmation: Feedback delete karne se pehle ek confirmation modal (popup) aata hai.

Persistent Storage: Saara feedback user ke browser mein (localStorage) save hota hai, taaki refresh karne par data delete na ho.

💻 Tech Stack 

Frontend: React (v18+)

UI Components: Material-UI (MUI) v5

Styling: Tailwind CSS v3 (MUI ke saath integrate kiya gaya)

Icons: MUI Icons

Email: EmailJS Browser

Date Handling: @mui/x-date-pickers & date-fns

Unique IDs: uuid

📁 File Structure 

Project assignment ke best practices ko follow karta hai:

src/
├── components/       # Reusable UI components (FeedbackForm, FeedbackList, etc.)
├── pages/            # Page-level views (HomePage, FeedbackPage, etc.)
├── services/         # Data handling logic (FeedbackService.js)
├── utils/            # Helper functions (formatDate.js)
├── App.jsx           # Main layout (Header, Drawer, Content)
└── index.js          # Entry point


🛠️ Installation & Setup 

Is project ko local machine par run karne ke liye yeh steps follow karein:

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. Install all dependencies:
Aapko saari libraries install karni hongi.

npm install


...aur agar Tailwind setup nahi hai:

npm install -D tailwindcss postcss autoprefixer


3. Configure EmailJS (Important!)
Project ko email bhejne ke liye, aapko EmailJS setup karna hoga:

EmailJS.com par free account banayein.

Ek Email Service add karein (e.g., Gmail).

Ek Email Template banayein. Is template mein {{name}}, {{email}}, aur {{message}} variables zaroor daalein.

Apni Service ID, Template ID, aur Public Key ko copy karein.

4. Add Your Keys (Environment Variables Recommended):

API keys ko directly source code mein hardcode karna secure nahi hai. Isliye, ek `.env` file banayein project root mein aur yeh variables add karein (Vite projects mein `VITE_` prefix zaroori hai):

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

**Note:** Vite projects mein environment variables ko `VITE_` prefix ke saath define karna zaroori hai.

Ab aap apne `FeedbackForm.jsx` file mein in variables ko aise access kar sakte hain:


5. Run the application:

npm run dev


Ab app http://localhost:5173 (similar port) par live ho jayega.

👤 Author

Designed and Developed by Aayush Bhatia
