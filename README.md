# Flochat Wizard 🪄

**The Ultimate Visual Studio for Flochat Components.**

Flochat Wizard is a development environment designed to help developers visually configure, test, and export [Flochat](https://github.com/arewageek/flochat) components. It provides a real-time, interactive workshop for fine-tuning visual identity and social connectivity before deployment.

## 🚀 Key Features

- **Studio**: Intuitively manipulate scale, gradients, motion, and layouts.
- **Device Emulation**: Instantly toggle between desktop and mobile viewport simulations.
- **Live Preview**: See your changes synced in real-time with the production component engine.
- **Code Export**: Generate production-ready snippets for individual components or full-page layouts.
- **Adaptive Studio**: Full support for both light and dark mode architectures.

## 🛠️ The Tech Stack

Flochat Wizard is built with cutting-edge technologies for maximum speed and developer experience:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Runtime**: [Bun](https://bun.sh/)

## 📦 Local Development

To run the Flochat Wizard locally:

```bash
# Clone the repository
git clone https://github.com/arewageek/flochat-wizard

# Navigate to the project directory
cd flochat-wizard

# Install dependencies (Using Bun)
bun install

# Start development server (Using Bun)
bun run dev

# alternatively, you can use npm

# Install dependencies (Using Npm)
npm install

# Start development server (Using Npm)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component wizard.

## 🛠️ Component Props

```typescript
interface FlochatProps {
  size?: "sm" | "md" | "lg"; // Button size
  position?:
    | "bottom-right"
    | "bottom-left" // Screen position
    | "top-right"
    | "top-left";
  color?:
    | "accent"
    | "success" // Color theme
    | "warning"
    | "error";
  showBadge?: boolean; // Show notification badge
  badgeCount?: number; // Badge count (0-999)
  customMessage?: string; // Welcome message
  showPreview?: boolean; // Show hover preview
}
```

### Usage Example

```tsx
import { Flochat } from "@/components/flochat-button";

export default function MyPage() {
  return (
    <div>
      <Flochat
        size="md"
        position="bottom-right"
        color="accent"
        showBadge={true}
        badgeCount={3}
        customMessage="Hi! How can we help you today?"
        showPreview={true}
      />
    </div>
  );
}
```

## 🎯 Customization Options

### Sizes

- **Small (`sm`)**: 48x48px - Small Screen
- **Medium (`md`)**: 56x56px - Medium Screen
- **Large (`lg`)**: 64x64px - Large Screen
- **Large (`xl`)**: 72x72px - Extra Large Screen

### Positions

- **Bottom Right**: Classic placement
- **Bottom Left**: Alternative corner

## 🔧 Development

### Key Dependencies

- **Next.js 15**: React framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS
- **next-themes**: Theme management
- **Lucide React**: Beautiful icons

## 🎨 Design Philosophy

1. **Simplicity**: Clean, uncluttered interface
2. **Flexibility**: Highly customizable components

## 🚀 Deployment

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## 🤝 Contributing

Contributions are welcome on both the flochat component and flochat-wizard! Please feel free to submit a Pull Request.

---
