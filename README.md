# Aavyn

A modern, feature-rich web application built with React, TypeScript, and shadcn/ui. This project showcases a beautiful landing page with testimonials, pricing sections, and a responsive navigation system.

## 🚀 Features

- **Modern Landing Page**
  - Responsive navigation with mobile menu
  - Testimonials section with carousel
  - Pricing plans with comparison
  - Logo carousel for partners/clients
  - Footer with social links and navigation

- **Technical Features**
  - React 18 with TypeScript
  - Vite for lightning-fast development
  - React Router for navigation
  - React Query for data fetching
  - Tailwind CSS for styling
  - shadcn/ui components
  - Toast notifications (Sonner)
  - Tooltips and UI feedback
  - Responsive design

## 🛠️ Tech Stack

- **Core**
  - [React](https://reactjs.org/) - UI Library
  - [TypeScript](https://www.typescriptlang.org/) - Type Safety
  - [Vite](https://vitejs.dev/) - Build Tool
  - [React Router](https://reactrouter.com/) - Routing
  - [React Query](https://tanstack.com/query/latest) - Data Fetching

- **Styling & UI**
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
  - [shadcn/ui](https://ui.shadcn.com/) - UI Components
  - [Radix UI](https://www.radix-ui.com/) - Headless Components
  - [Lucide Icons](https://lucide.dev/) - Icon Set

- **Development**
  - [ESLint](https://eslint.org/) - Code Linting
  - [TypeScript](https://www.typescriptlang.org/) - Type Checking
  - [PostCSS](https://postcss.org/) - CSS Processing

## 📦 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── features/       # Feature-specific components
│   └── pricing/        # Pricing-related components
├── pages/              # Page components
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
├── config/             # Configuration files
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AavynLabs/aavyn.git
   cd aavyn
   ```

2. **Install dependencies**

   Using npm (recommended):
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   # First, ensure you have the latest yarn version
   yarn set version 4.9.1
   # Then install dependencies
   yarn install
   ```

   Using pnpm:
   ```bash
   pnpm install
   ```

   Using bun:
   ```bash
   bun install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

The application will be available at `http://localhost:5173`.

### Troubleshooting

If you encounter any issues during installation:

1. **Clear package manager cache:**
   ```bash
   # For npm
   npm cache clean --force

   # For yarn
   yarn cache clean

   # For pnpm
   pnpm store prune
   ```

2. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules
   rm package-lock.json # or yarn.lock, or pnpm-lock.yaml
   npm install # or yarn install, or pnpm install
   ```

3. **Ensure correct Node.js version:**
   ```bash
   node -v # Should be v18 or higher
   ```

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 UI Components

The project uses a combination of custom components and shadcn/ui components:

- Navigation bar with mobile menu
- Testimonials carousel
- Pricing cards
- Logo carousel
- Footer with social links
- Toast notifications
- Tooltips
- And more...

## 📝 Code Quality

- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting
- Husky for git hooks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
