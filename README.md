
# 📝 Feedback Collection System with Email Notifications

A full-stack web application to collect, manage, and monitor user feedback with a focus on security, real-time submission, and admin tools.

## 🚀 Features

- ✅ Customizable and responsive feedback forms
- 📧 Email notifications on feedback submission (via Nodemailer)
- 🔒 Secure data handling with environment variables and encrypted MongoDB storage
- 📊 Admin dashboard with feedback history, moderation tools, and analytics
- 🔁 Export and integration support with third-party APIs
- 🔐 Environment-based configuration via `.env` file
- 🌐 Fully accessible across desktop, tablet, and mobile devices

---


## 🔗 Live Demo
[Click here to open the app on Render](https://feedbackcollectionsystem-9mh8.onrender.com)


## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Language | JavaScript (Node.js) |
| Backend Framework | Express.js |
| Frontend Template Engine | EJS |
| Database | MongoDB (via Mongoose) |
| Email | Nodemailer |
| Environment Management | dotenv |
| IDE / Tools | VS Code, MongoDB Compass |

---

## 📁 Project Structure

```
├── models/
│   └── Feedback.js
├── routes/
│   └── feedback.js
├── utils/
│   ├── db.js
│   └── emailService.js
├── views/
│   └── index.ejs
│   └── admin.ejs
├── public/
│   └── styles.css
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/manohar-jha/FeedbackCollectionSystem.git
cd FeedbackCollectionSystem
```

### 2. Install Dependencies
```bash
npm install
```


## 📬 Feedback Notification via Email

When a user submits feedback, the system sends an email to the admin using **Nodemailer**. Make sure to configure `EMAIL_USER` and `EMAIL_PASS` correctly in `.env`.

---

## 📈 Admin Dashboard

The `/admin` route provides access to:
- Feedback history
- Search/sort feedback
- Moderation tools
- Analytics (optional or in-progress)

---

## 🧪 Testing (Manual)

To test:
- Submit feedback from the form
- Check email notification (to configured address)
- View feedback entries on admin dashboard

---

## 📄 License

This project is licensed under the **ISC License**. Feel free to fork and use for educational purposes.

---

## 🙋‍♂️ Author

Made by [Manohar Kumar Jha] — feel free to connect!

- GitHub: [@manohar-jha](https://github.com/manohar-jha)
- LinkedIn: [Manohar Kumar Jha](www.linkedin.com/in/manohar-kumar-jha-174129261)


