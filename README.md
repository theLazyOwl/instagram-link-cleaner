# 📷 Instagram Link Cleaner

A simple, modern web tool to clean messy Instagram links by removing personal tracking identifiers — especially `?igshid` and other unwanted query parameters. Built with privacy and simplicity in mind.

---

## ✨ Features

- ✅ Cleans Instagram links shared with personal tracking data (`?igshid=...`)
- ✅ Displays the cleaned link
- ✅ Copy cleaned link to clipboard
- ✅ Open cleaned link in a new tab
- ✅ Keeps a short history of recent cleaned links (stored locally)
- ✅ Dark mode / Light mode toggle with emoji indicator
- ✅ Modern UI with responsive, Material-style buttons

---

## 💻 Live Demo

Try it live:  
🔗 [https://theLazyOwl.github.io/instagram-link-cleaner](https://theLazyOwl.github.io/instagram-link-cleaner)


---

## 🧠 How It Works

When you paste a shared Instagram URL (usually one that includes `?igshid=...`), the app will:

1. Validate the URL format
2. Remove any unnecessary query parameters like `?igshid`
3. Reconstruct a clean URL of the form:  
   `https://www.instagram.com/{type}/{id}/`
4. Display the cleaned link and store it in recent history

---

## 📋 Example

**Original link:**
https://www.instagram.com/p/CeK4zW9xyzAB/?igshid=MzRlODBiNWFlZA==


**Cleaned link:**
https://www.instagram.com/p/CeK4zW9xyzAB/


---

## 🧑‍💻 How to Use

1. Paste a messy Instagram link into the input field
2. Click **Clean Link**
3. View the cleaned URL
4. Use:
   - **📋 Copy** to copy it to your clipboard
   - **🔗 Open** to view the cleaned post in a new tab
5. Toggle between 🌙 Dark Mode and ☀️ Light Mode

---

## 📦 Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/instagram-link-cleaner.git
cd instagram-link-cleaner

# Open index.html in your browser
No build tools or dependencies needed — pure HTML, CSS, and JS.

📂 Project Structure

📁 instagram-link-cleaner/
├── index.html       # Main web app
├── styles.css       # Optional external styles
├── script.js        # All logic
└── README.md        # This file

🔒 Privacy
This app runs entirely in your browser.
No data is collected, stored remotely, or sent to any server.
Your link history is saved locally using localStorage.

🛠️ Credits & Technologies
HTML5 / CSS3 / JavaScript
Material-inspired styling
Designed and built by -Kingmafusa

📬 Contributions
Pull requests, feedback, and improvements are always welcome.
Feel free to open an issue or fork the project!

📄 License
MIT License — free to use, modify, and share.

