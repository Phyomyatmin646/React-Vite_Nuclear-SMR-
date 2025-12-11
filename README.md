# SNR Agriculture - Chin State, Myanmar

A React + Vite project showcasing Small Nuclear Reactor technology for agricultural development in Chin State, Myanmar.

## Features

- **Responsive Design**: Fully responsive using Tailwind CSS v4
- **Modern React**: Built with React 19 and React Router v7
- **Fast Development**: Powered by Vite 7
- **Clean Code**: ESLint configured for best practices

## Tech Stack

- React 19
- React Router DOM 7
- Tailwind CSS 4
- Vite 7

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd snr-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ImageSlider.jsx
│   └── LocationMap.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── locations/
│       ├── DataCenter.jsx
│       ├── Farms.jsx
│       └── Operators.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Key Fixes from Original Code

1. **Removed duplicate BrowserRouter** - Router was wrapped twice (in App.jsx and main.jsx)
2. **Fixed image sizing** - Slider images now properly fill the container
3. **Added responsive design** - All components are now mobile-friendly
4. **Added missing location pages** - DataCenter, Farms, and Operators pages
5. **Fixed emoji encoding** - Contact page now displays icons properly
6. **Converted CSS to Tailwind** - All custom CSS replaced with Tailwind utilities

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## License

MIT
