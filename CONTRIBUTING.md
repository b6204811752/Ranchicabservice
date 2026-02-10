# 🤝 Contributing to Ranchi Cab Service Website

Thank you for your interest in contributing to the Ranchi Cab Service website! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or pnpm
- Git
- Code editor (VS Code recommended)

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## 💻 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/booking-calendar`)
- `fix/` - Bug fixes (e.g., `fix/mobile-menu`)
- `refactor/` - Code refactoring (e.g., `refactor/form-validation`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)

### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```
feat(booking): add date picker to booking form

fix(mobile): resolve navigation menu overlay issue

docs(readme): update installation instructions
```

## 📝 Code Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use functional components with hooks

```typescript
// ✅ Good
interface VehicleProps {
  name: string;
  seats: number;
  rate: string;
}

export default function VehicleCard({ name, seats, rate }: VehicleProps) {
  return <div>...</div>;
}

// ❌ Bad
export default function VehicleCard(props: any) {
  return <div>...</div>;
}
```

### React Best Practices

- Use functional components
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper state management
- Implement error boundaries

```typescript
// ✅ Good - Small, focused component
export default function BookingButton({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="btn-primary">
      Book Now
    </button>
  );
}

// ❌ Bad - Component doing too much
export default function MegaComponent() {
  // 300 lines of code...
}
```

## 🎨 Component Guidelines

### File Structure

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx (if needed)
└── index.ts (export)
```

### Component Template

```typescript
import { useState } from 'react';
import { SomeIcon } from 'lucide-react';

interface ComponentNameProps {
  title: string;
  onAction?: () => void;
}

export default function ComponentName({ title, onAction }: ComponentNameProps) {
  const [state, setState] = useState<string>('');

  const handleClick = () => {
    // Logic here
    onAction?.();
  };

  return (
    <div className="container">
      <h2>{title}</h2>
      <button onClick={handleClick}>
        <SomeIcon className="w-5 h-5" />
        Action
      </button>
    </div>
  );
}
```

### Props Guidelines

- Always define prop types
- Use optional props with `?`
- Provide sensible defaults
- Document complex props

```typescript
interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Whether button is disabled */
  disabled?: boolean;
}
```

## 🎨 Styling Guidelines

### Tailwind CSS

- Use Tailwind utility classes
- Follow mobile-first approach
- Use consistent spacing scale
- Leverage Tailwind's design tokens

```typescript
// ✅ Good - Mobile-first, semantic classes
<div className="p-4 md:p-8 bg-blue-600 hover:bg-blue-700 transition-colors">
  <h1 className="text-2xl md:text-4xl font-bold">Title</h1>
</div>

// ❌ Bad - Arbitrary values, not responsive
<div style={{ padding: '37px', backgroundColor: '#1a73e8' }}>
  <h1 style={{ fontSize: '32px' }}>Title</h1>
</div>
```

### CSS Guidelines

- Avoid inline styles
- Use Tailwind utilities first
- Custom CSS only when necessary
- Keep styles scoped and specific

### Responsive Design

```typescript
// Mobile-first breakpoints
sm: '640px'   // Small devices
md: '768px'   // Tablets
lg: '1024px'  // Laptops
xl: '1280px'  // Desktops
2xl: '1536px' // Large screens
```

## 🧪 Testing

### Before Submitting

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Check responsive breakpoints
- [ ] Verify all links work
- [ ] Test form submissions
- [ ] Check accessibility (keyboard navigation)
- [ ] Run build: `npm run build`
- [ ] Check for console errors

### Manual Testing Checklist

**Navigation:**
- [ ] All menu items work
- [ ] Mobile menu opens/closes
- [ ] Active page highlighted

**Forms:**
- [ ] Required fields validated
- [ ] Success/error messages shown
- [ ] WhatsApp integration works

**Performance:**
- [ ] Pages load quickly
- [ ] Images optimized
- [ ] No console errors

## 🔄 Pull Request Process

### Before Creating PR

1. Update your branch with latest main
2. Test all changes thoroughly
3. Update documentation if needed
4. Ensure no console errors
5. Run build successfully

### PR Title Format

```
[Type] Brief description

Example:
[Feature] Add booking calendar
[Fix] Resolve mobile menu issue
[Docs] Update README
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Refactoring
- [ ] Documentation

## Changes Made
- Item 1
- Item 2
- Item 3

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows project standards
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Tested on multiple devices
```

## 📚 Additional Resources

### Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)

### Useful Tools

- [VS Code](https://code.visualstudio.com/)
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🎯 Feature Requests

Have an idea? Open an issue with:

1. **Title:** Clear, concise description
2. **Description:** Detailed explanation
3. **Use Case:** Why is this needed?
4. **Examples:** Similar features elsewhere
5. **Priority:** High/Medium/Low

## 🐛 Bug Reports

Found a bug? Report it with:

1. **Title:** Brief bug description
2. **Steps to Reproduce:** Detailed steps
3. **Expected Behavior:** What should happen
4. **Actual Behavior:** What actually happens
5. **Screenshots:** If applicable
6. **Environment:** Browser, OS, device
7. **Console Errors:** Any error messages

## 💬 Questions?

- Email: ranchicabservice2@gmail.com
- Phone: +91 7903629240

## 📄 License

By contributing, you agree that your contributions will be part of the Ranchi Cab Service project.

---

**Thank you for contributing! 🙏**
