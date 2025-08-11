# 🎨 Chat Button Builder - Component Library

A beautiful, customizable floating chat button component library built with Next.js, Tailwind CSS, and Framer Motion. Features a professional 60-30-10 color scheme with pink accents and full light/dark mode support.

## ✨ Features

- **🎨 60-30-10 Color Rule**: Professional color scheme with pink accents
- **🌙 Light/Dark Mode**: Seamless theme switching with smooth transitions
- **🎭 Beautiful Animations**: Powered by Framer Motion for smooth interactions
- **⚙️ Live Customization**: Real-time component wizard with instant preview
- **📱 Responsive Design**: Works perfectly on all device sizes
- **🎯 Multiple Configurations**: Size, position, color, and behavior options
- **💬 Interactive Chat Window**: Fully functional chat interface
- **🔔 Notification Badge**: Optional badge with custom count
- **👀 Hover Preview**: Optional message preview on hover
- **📋 Code Generation**: Instant code export for easy integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Next.js 15+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd twotap

# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the component wizard.

## 🎨 Color Scheme

Our design follows the professional 60-30-10 color rule:

### Light Mode

- **60% Primary**: Clean whites and light grays (`#fafafa`, `#ffffff`)
- **30% Secondary**: Balanced grays for text and borders (`#6b7280`, `#e5e7eb`)
- **10% Accent**: Beautiful pink tones (`#ec4899`, `#f472b6`, `#be185d`)

### Dark Mode

- **60% Primary**: Rich dark backgrounds (`#0f0f0f`, `#1a1a1a`)
- **30% Secondary**: Subtle grays for contrast (`#a3a3a3`, `#404040`)
- **10% Accent**: Vibrant pink accents (`#f472b6`, `#f9a8d4`, `#ec4899`)

## 🛠️ Component API

### FloatingChatButton Props

```typescript
interface FloatingChatButtonProps {
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
import { FloatingChatButton } from "@/components/floating-chat-button";

export default function MyPage() {
  return (
    <div>
      <FloatingChatButton
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

- **Small (`sm`)**: 48x48px - Subtle presence
- **Medium (`md`)**: 56x56px - Balanced visibility
- **Large (`lg`)**: 64x64px - Maximum impact

### Positions

- **Bottom Right**: Classic placement
- **Bottom Left**: Alternative corner
- **Top Right**: Header area
- **Top Left**: Navigation area

### Color Themes

- **Accent**: Pink theme (default)
- **Success**: Green theme
- **Warning**: Orange theme
- **Error**: Red theme

### Behaviors

- **Badge**: Show notification count
- **Preview**: Display message on hover
- **Custom Message**: Personalized welcome text

## 🎭 Animations

All animations are powered by Framer Motion:

- **Hover Effects**: Subtle scale and color transitions
- **Click Feedback**: Satisfying tap animations
- **Theme Toggle**: Smooth icon transitions
- **Chat Window**: Spring-based open/close
- **Pulse Effect**: Attention-grabbing animation
- **Ripple Effect**: Interactive button feedback

## 🌙 Theme System

The theme system uses CSS custom properties with `next-themes`:

```css
/* Light mode variables */
:root {
  --accent: #ec4899;
  --background: #fafafa;
  --foreground: #111827;
}

/* Dark mode variables */
[data-theme="dark"] {
  --accent: #f472b6;
  --background: #0f0f0f;
  --foreground: #f5f5f5;
}
```

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly interactions
- Optimized for all screen sizes
- Accessible keyboard navigation

## 🔧 Development

### Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Main page with wizard
├── components/
│   ├── component-wizard.tsx      # Main wizard interface
│   ├── floating-chat-button.tsx  # Chat button component
│   ├── theme-provider.tsx        # Theme context provider
│   └── theme-toggle.tsx          # Theme switch button
```

### Key Dependencies

- **Next.js 15**: React framework
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS
- **next-themes**: Theme management
- **Lucide React**: Beautiful icons

## 🎨 Design Philosophy

1. **Simplicity**: Clean, uncluttered interface
2. **Accessibility**: WCAG compliant design
3. **Performance**: Optimized animations and rendering
4. **Consistency**: Unified design language
5. **Flexibility**: Highly customizable components

## 🚀 Deployment

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
