# 🚀 Modern Multilingual Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A high-performance, fully responsive, and bilingual (English/French) personal portfolio built with Next.js App Router. This project is engineered with a strict separation of concerns, allowing developers to fully customize the portfolio without touching the core React components.

**🔴 Live Demo:** [https://yahya-portfolio-mu.vercel.app/](https://yahya-portfolio-mu.vercel.app/)

---

## ✨ Key Features

* **100% Content-Driven (Markdown & JSON):** The architecture separates the UI from the data. You can completely rewrite the portfolio by simply editing the Markdown (`.md`) files for long-form content and JSON dictionaries for UI elements.
* **Built-in Internationalization (i18n):** Native URL-based routing for multiple languages (currently `en` and `fr`) with seamless toggling.
* **Security & Performance:** By leveraging Server Components and static Markdown parsing (`next-mdx-remote`), the site is inherently secure against database injection attacks and incredibly fast (zero database latency).
* **Native Dark/Light Mode:** Utilizes Tailwind CSS v4 and standard CSS variables for seamless, pure-CSS theme transitions that respect system preferences without relying on heavy client-side JavaScript.
* **Developer Experience:** Strictly typed with TypeScript, styled with Tailwind Typography for beautiful Markdown rendering, and optimized for SEO.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS v4 + `@tailwindcss/typography`
* **Content Parsing:** `gray-matter` & `next-mdx-remote`
* **Language:** TypeScript
* **Deployment:** Vercel

---

## ♻️ How to Reuse This Template

This project is designed to be highly reusable. If you want to use this for your own portfolio, you **do not need to rewrite the React code**. 

### 1. Clone the repository
```bash
git clone https://github.com/your-username/yahya-portfolio.git
cd yahya-portfolio
npm install
```

### 2. Update the Content (No coding required!)
All data is stored in the `src/content/` and `src/dictionaries/` folders.
* **Profile/Bio:** Edit `src/content/profile/bio-en.md` and `bio-fr.md`.
* **Projects:** Add new Markdown files inside `src/content/projects/` following the existing frontmatter structure:
    ```markdown
    ---
    title: "Your Project Name"
    tech: "React, Node.js"
    type: "Full-stack"
    ---
    Your project description goes here...
    ```
* **Translations & UI Text:** Update `src/dictionaries/en.json` and `fr.json` to change the Navbar links, Contact info, and Hobbies layout.
* **Images:** Replace `public/profile.jpg` with your own photo.

---

## 💻 Local Development

To run the project locally and watch your Markdown changes render in real-time:

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. The application will automatically redirect you to the default locale (e.g., `http://localhost:3000/en`).

---

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). 

1. Push your code to a GitHub repository.
2. Go to Vercel and select **"Add New Project"**.
3. Import your GitHub repository.
4. Leave all build settings as default (Vercel automatically detects Next.js).
5. Click **Deploy**.

Every subsequent push to the `main` branch will automatically trigger a new build, instantly updating your live portfolio.

---
*Architected and built by [Yahya Zini](https://github.com/0ZEUS01), Freelance State Software Engineer.*
