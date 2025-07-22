# Pathgenix - An AI-Powered Career Guidance Platform**

https://github.com/user-attachments/assets/567cb2a3-ef65-40ca-b6b4-5918b196b0ce

**🔗 Project Link →** [https://pathgenix.vercel.app](https://pathgenix.vercel.app)

---
## 📘 Project Description

**Pathgenix** is a full-fledged AI-powered career guidance platform designed to help students aspiring to enter the IT industry. It offers a seamless experience from account creation to intelligent career assistance powered by **Gemini AI**.

The platform provides:

* Personalized AI-generated practice questions.
* Resume and cover letter generation powered by AI.
* Real-time industry data analytics and visualizations.
* Profile management and persistent user data handling.
* A modern, responsive, and intuitive UI built with ShadCN and TailwindCSS.

In this documentation, we will walk through the technical structure of the application, including its architecture, tech stack, and opportunities for future growth.

---

## 🏛 System Architecture

Pathgenix follows a **modular monorepo architecture** built on top of the **Next.js App Router**. It includes:

* **Frontend** with client-side rendering, server-side rendering, and dynamic routes.
* **Backend API routes** using Next.js Edge & Server Functions.
* **Workflow orchestration** using Inngest for background tasks.
* **Database layer** with Prisma ORM connected to **Neon**, a serverless PostgreSQL provider.
* **Authentication** managed by Clerk.

---

## 🎨 Front-End

### Description

The front-end is developed using **Next.js (App Router)** for dynamic and scalable routing. It integrates **TailwindCSS** and **ShadCN UI** for styling and accessibility, along with **Radix UI** components.

### Key Features

* Mobile-responsive design.
* Theme switching (dark/light mode) using `next-themes`.
* Rich UI/UX experience for resume editing with markdown support.
* Real-time dashboard updates using client + server rendering.

### Libraries & Tools

* **TailwindCSS** — Utility-first styling.
* **ShadCN UI + Radix UI** — Modern UI components.
* **Recharts** — For visualizing real-time industry trends.
* **React Hook Form + Zod** — Powerful form validation system.
* **Lucide React** — Icon library.

---

## 🧠 Back-End

### Description

The backend is powered by **Next.js API routes**, with business logic split into modular server actions. Complex workflows such as resume generation, markdown previewing, and PDF exports are powered by **Inngest**.

### Features

* **Gemini AI Integration**: Used to generate:

  * Practice questions based on the user’s chosen tech stack.
  * AI-enhanced resumes and cover letters.
* **Clerk Authentication**:

  * Signup/Login with OAuth.
  * Profile management (username, photo, etc.).
  * Session handling and protected routes.
* **Database Integration**:

  * **Neon + Prisma** for scalable and efficient data persistence.
  * Auto-generated types, migrations, and schema control via Prisma.

### Libraries & Tools

* **Prisma** — Type-safe ORM.
* **Inngest** — Event-driven job orchestration.
* **Clerk** — Auth & user management.
* **html2pdf.js**, `@react-pdf/renderer` — Resume export tools.
* **markdown-it**, `@uiw/react-md-editor` — Markdown support.

---

## 🌐 API Design

The application utilizes **RESTful APIs** built into Next.js for:

* Creating & updating user profiles.
* Saving and fetching markdown-based resumes.
* Submitting prompts to Gemini AI for dynamic content generation.
* Retrieving real-time data for dashboards.

**Note:** Routes are protected with Clerk middleware, ensuring only authenticated users can access certain features.

---

## 🚀 Deployment

The deployment architecture is entirely **serverless**, ensuring scalability, fast load times, and cost efficiency.

| Layer            | Service                |
| ---------------- | ---------------------- |
| Frontend         | Vercel                 |
| Backend APIs     | Vercel (Edge/ISR)      |
| Database         | Neon.tech (PostgreSQL) |
| Auth             | Clerk.dev              |
| Background Tasks | Inngest                |

---

## ✅ Testing (Future Scope)

Currently under manual testing. For future iterations:

* **Unit & Integration Tests**: Using Jest + Testing Library.
* **End-to-End Testing**: Playwright or Cypress.
* **Linting**: ESLint & Prettier for static checks.

---

## 🌟 Future Enhancements

| Feature                  | Description                                        | Priority |
| ------------------------ | -------------------------------------------------- | -------- |
| 🧑‍🏫 Mock Interviews    | Simulate technical/HR interviews using Gemini AI      | High     |
| 📅 Mentorship Scheduling | Connect students with industry mentors             | Medium   |
| 📈 AI Progress Analytics | Personalized dashboards with recommendations       | High     |
| 🔔 Notifications         | Email + push alerts for job tips, resume reminders | Medium   |
| 🌐 Localization          | Support for multiple languages (Hindi, etc.)       | Medium   |
| 🧩 Gamification          | Add points, streaks, and badges for engagement     | Low      |
| 📲 Mobile App            | Cross-platform access via PWA or React Native      | Medium   |

---

## 🧾 Conclusion

**Pathgenix** offers a modern, AI-driven solution for IT students navigating their career journey. Its real-time intelligence, personalized content, and polished UI make it a standout among career platforms. With future enhancements like mock interviews and mentorship, it aims to be a complete launchpad for every aspiring tech professional.

---

**Built with ❤️ using Next.js, Prisma, Gemini AI, Tailwind, ShadCN, and more.**
