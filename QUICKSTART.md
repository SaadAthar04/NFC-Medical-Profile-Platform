# Quick Start Guide

Get your NFC Medical Profile Platform up and running in minutes!

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables (Optional for Development)

Copy the `env.template` file to `.env.local`:

```bash
cp env.template .env.local
```

Edit `.env.local` with your configuration values (optional for demo purposes).

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Demo Credentials

For demo purposes, you can use any credentials to "log in" (authentication is simulated):

- Email: any valid email format
- Password: any password with 8+ characters

## Project Navigation

### Public Pages
- **Home**: [http://localhost:3000](http://localhost:3000)
- **Login**: [http://localhost:3000/auth/login](http://localhost:3000/auth/login)
- **Sign Up**: [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup)

### User Dashboard (After Login)
- **Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Medical Profile**: [http://localhost:3000/dashboard/profile](http://localhost:3000/dashboard/profile)
- **NFC Bracelet**: [http://localhost:3000/dashboard/bracelet](http://localhost:3000/dashboard/bracelet)
- **Subscription**: [http://localhost:3000/dashboard/subscription](http://localhost:3000/dashboard/subscription)
- **Audit Logs**: [http://localhost:3000/dashboard/audit-logs](http://localhost:3000/dashboard/audit-logs)
- **Settings**: [http://localhost:3000/dashboard/settings](http://localhost:3000/dashboard/settings)

### Emergency Access (NFC Tap Simulation)
- **Emergency Profile**: [http://localhost:3000/emergency/NFC-123456789](http://localhost:3000/emergency/NFC-123456789)

### Admin Panel
- **Admin Dashboard**: [http://localhost:3000/admin](http://localhost:3000/admin)

## Key Features to Test

### 1. Landing Page
- Smooth animations on scroll
- Responsive navigation
- Feature showcase
- Pricing comparison
- Call-to-action buttons

### 2. Authentication
- Sign up with validation
- Login with remember me
- Password recovery flow
- Mobile responsive forms

### 3. Medical Profile Management
- Tabbed interface for different sections
- Dynamic form fields (add/remove allergies, medications, contacts)
- Real-time validation
- Save functionality

### 4. NFC Bracelet Management
- Link/unlink bracelet simulation
- Status indicators
- Security features display
- Test bracelet functionality

### 5. Subscription Management
- Plan comparison
- Billing history
- Upgrade/downgrade options
- Cancel subscription flow

### 6. Emergency Access
- Critical information display
- Color-coded sections (red for allergies)
- One-tap emergency contacts
- Access logging notification

### 7. Admin Panel
- User statistics
- User management table
- Search and filter
- Bulk actions

## Customization

### Colors

Primary color (green) can be adjusted in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Adjust these values
    500: '#22c55e',
    600: '#16a34a',
    // ...
  }
}
```

### Branding

Update the brand name in:
- `app/layout.tsx` - metadata
- `components/layout/Navbar.tsx` - logo and name
- `components/layout/Footer.tsx` - company info

## Responsive Testing

The application is fully responsive. Test on:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

Use browser DevTools to simulate different screen sizes.

## Animation Features

All animations are powered by Framer Motion:
- Page transitions
- Hover effects
- Scroll animations
- Modal animations
- Loading states

## Next Steps

1. **Connect Backend API**: Implement actual authentication and data persistence
2. **Stripe Integration**: Set up payment processing
3. **Database Setup**: Configure PostgreSQL and migrations
4. **Email Service**: Connect email provider for notifications
5. **Deploy**: Deploy to Vercel or your preferred hosting

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check Node.js version:
```bash
node --version  # Should be 18+
```

## Support

For questions or issues:
- Check the main [README.md](README.md)
- Review the code documentation
- Contact: support@medguard.com

## Development Tips

1. **Hot Reload**: The dev server automatically reloads on file changes
2. **TypeScript**: Leverage type checking for better development experience
3. **Component Library**: Reuse components from `components/ui/`
4. **Tailwind**: Use Tailwind classes for consistent styling
5. **Mobile First**: Design for mobile, then enhance for desktop

---

**Happy Coding! 🚀**

