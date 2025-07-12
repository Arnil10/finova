# 💰 Finova: Smart Finance Tracker

<table>
<tr>
<td>
<img src="public/logo.png" alt="Finova Logo" width="200%" height="200%">
</td>
<td>
<b><i>Finova is a modern, AI-enhanced financial tracking web app that helps users manage their money smartly. With powerful features like Google Sign-In, AI receipt scanning, budget tracking, email alerts, and monthly AI-driven insights, Finova brings intelligence and simplicity to your personal finance management.</i></b>
</td>
</tr>
</table>

---

## ✨ Key New Features

- **🤖 AI Receipt Scanning**  
  Upload a receipt and let Gemini AI auto-fill your transaction form — no more manual entry.

- **📬 Monthly Financial Email Reports**  
  Automatically receive detailed monthly summaries and AI-generated financial tips in your inbox.

- **📈 Budget Usage Alerts**  
  Get email alerts when your budget usage crosses thresholds like 90%, keeping you financially aware.

- **♻️ Recurring Transaction Monitoring**  
  Automatically detects and tracks recurring transactions such as subscriptions or salaries.

---

## 📦 Features

- 🔐 **Google Sign-In** for fast and secure access  
- 💳 **Multi-Account Management** (e.g., Savings, Personal, etc.)  
- 📊 **Dashboard Insights** with category-wise spending charts  
- 📁 **Create & Manage Transactions** with pagination, search, and filtering  
- 📝 **Edit & Bulk Delete Transactions** easily  
- 🧮 **Set Monthly Budgets** and visualize usage  
- 📤 **AI-Powered Receipt Upload** using Gemini AI  
- 🔄 **Recurring Transactions Auto-Tracking**  
- 📧 **Email Alerts + Monthly AI Reports** via cron jobs  

---

## 🔧 Technologies Behind Finova

### 💰 Financial Engine:
| Name        | Link |
|-------------|------|
| Prisma ORM  | [![Prisma](https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/) |
| Gemini AI   | AI for parsing receipts and generating insights |

### 🌐 Web Development:
| Name        | Link |
|-------------|------|
| Next.js 14 | [![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) |
| TailwindCSS | [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com) |
| shadcn/ui | UI components |
| React Hook Form | [![React Hook Form](https://img.shields.io/badge/-ReactHookForm-EC5990?style=for-the-badge)](https://react-hook-form.com) |
| Zod | [![Zod](https://img.shields.io/badge/zod-262626?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/) |

### 📫 Emails & Jobs:
| Name        | Link |
|-------------|------|
| Nodemailer | Email sending |
| Cron Jobs | Monthly task scheduling |

### 🛠️ Miscellaneous:
| Name        | Link |
|-------------|------|
| ESLint      | [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org) |
| GitHub      | [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com) |
| Vercel      | [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com) |
| npm         | [![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com) |

---

## ▶️ How to Use Finova

### 1. Sign In
Log in securely using your Google account.

### 2. Create an Account
Easily create financial accounts like “Personal” or “Savings” with an initial balance.

### 3. Track Your Finances
View transactions, filter by category, and analyze income vs. expenses.

### 4. Scan Receipts with AI
Upload a receipt, let Gemini AI fill out the transaction form for you.

### 5. Set a Monthly Budget
Define your budget and monitor usage with visual indicators and alert emails.

### 6. Get Monthly Reports
Receive an automated monthly email with charts, summaries, and personalized financial tips.

---

## ⚙️ Setup Finova Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/finova.git
cd finova

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

