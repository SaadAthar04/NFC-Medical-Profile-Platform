# NFC Medical Profile Platform (MedGuard)

A modern, secure web-based subscription service where users create emergency medical profiles linked to NFC bracelets. In emergencies, responders tap the bracelet with their phone to access critical medical information instantly.

## 🚀 Features

### Phase 1 - MVP (Current Implementation)

#### User Features
- **User Authentication**: Secure sign up, login, and password recovery
- **Medical Profile Management**: Comprehensive profile creation with:
  - Basic information (blood type, height, weight, organ donor status, DNR)
  - Allergies with severity levels and reactions
  - Current medications with dosage and frequency
  - Medical conditions tracking
  - Emergency contacts with multiple contact methods
  - Additional medical notes
  
- **NFC Bracelet Management**:
  - Link/unlink NFC bracelets to your profile
  - Test bracelet functionality
  - View bracelet access history
  - QR code alternative access

- **Subscription Management**:
  - Monthly and yearly subscription plans
  - Secure payment processing (Stripe integration ready)
  - Billing history and invoice downloads
  - Easy plan upgrades and cancellations

- **Audit Logs**:
  - Complete access history
  - Location and device tracking
  - Security alerts for suspicious activity
  - Export audit logs for compliance

#### Responder Features
- **Emergency Access Page**: When NFC bracelet is tapped:
  - Instant access to critical medical information
  - Clear display of allergies (highlighted)
  - Current medications and conditions
  - Emergency contact information with one-tap calling
  - DNR and organ donor status
  - All access automatically logged

#### Admin Features
- **User Management Dashboard**:
  - View all users and their status
  - Search and filter functionality
  - User statistics and analytics
  - Suspend or delete accounts
  - Revenue tracking and reporting

### Security & Compliance
- **PIPEDA Compliant**: Designed for Canadian privacy regulations
- **Data Encryption**: All sensitive data encrypted at rest and in transit
- **Audit Logging**: Every access tracked with timestamp, IP, and location
- **User Consent**: Users control what information is public
- **Data Rights**: Easy data export and account deletion

## 🎨 UI/UX Features

- **Outstanding Design**: Modern, clean interface with professional aesthetics
- **Green Primary Color**: Calming medical-themed color scheme
- **Smooth Animations**: Framer Motion animations throughout
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with semantic HTML
- **Dark Mode Ready**: Color system designed for dark mode implementation

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icon library

### Backend (Ready for Integration)
- **Node.js/NestJS**: Backend API (structure in place)
- **PostgreSQL**: Database (schema ready)
- **Stripe**: Payment processing
- **AWS Canada**: Cloud infrastructure

### Development
- **ESLint**: Code linting
- **TypeScript**: Type checking
- **Git**: Version control

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NFC-Medical-Profile-Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🗂️ Project Structure

```
NFC-Medical-Profile-Platform/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgot-password/
│   ├── dashboard/                # User dashboard
│   │   ├── profile/              # Medical profile management
│   │   ├── bracelet/             # NFC bracelet management
│   │   ├── subscription/         # Subscription & billing
│   │   ├── audit-logs/           # Access history
│   │   └── settings/             # User settings
│   ├── emergency/[braceletId]/   # Emergency responder view
│   ├── admin/                    # Admin panel
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   └── Badge.tsx
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── dashboard/                # Dashboard specific
│       └── DashboardNav.tsx
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies

```

## 🎯 Key Pages

### Public Pages
- **Landing Page** (`/`): Hero section, features, how it works, pricing, CTA
- **Login** (`/auth/login`): User authentication
- **Sign Up** (`/auth/signup`): New user registration
- **Forgot Password** (`/auth/forgot-password`): Password recovery

### User Dashboard
- **Overview** (`/dashboard`): Stats, quick actions, recent activity
- **Medical Profile** (`/dashboard/profile`): Comprehensive medical information management
- **NFC Bracelet** (`/dashboard/bracelet`): Bracelet linking and management
- **Subscription** (`/dashboard/subscription`): Plan management and billing
- **Audit Logs** (`/dashboard/audit-logs`): Access history tracking
- **Settings** (`/dashboard/settings`): Account preferences

### Emergency Access
- **Emergency Profile** (`/emergency/[braceletId]`): Public emergency medical information view

### Admin
- **Admin Dashboard** (`/admin`): User management and platform analytics

## 🔐 Security Features

1. **Encryption**: All sensitive data encrypted using industry standards
2. **HTTPS Only**: Forced secure connections
3. **Audit Logging**: Complete access trail
4. **Session Management**: Secure session handling
5. **Input Validation**: Protected against injection attacks
6. **Rate Limiting**: API protection (ready for implementation)
7. **CSRF Protection**: Cross-site request forgery prevention

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

### Primary (Green)
- 50: #f0fdf4
- 100: #dcfce7
- 200: #bbf7d0
- 300: #86efac
- 400: #4ade80
- 500: #22c55e (Primary)
- 600: #16a34a
- 700: #15803d
- 800: #166534
- 900: #14532d

### Medical Theme
- Red: #ef4444 (Allergies/Critical)
- Blue: #3b82f6 (Medications)
- Yellow: #f59e0b (Warnings)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Docker
```bash
docker build -t medguard .
docker run -p 3000:3000 medguard
```

## 📈 Future Enhancements (Phase 2)

- Healthcare Worker Credentials verification
- Employer Portal for credential checking
- Veramo SSI integration (Decentralized Identifiers)
- Regulatory body integrations
- B2B billing system
- Mobile app development

## 🤝 Contributing

This is a proprietary project. For contributions, please contact the development team.

## 📄 License

Proprietary - All rights reserved

## 📞 Support

- Email: support@medguard.com
- Phone: +1 (555) 123-4567
- Website: https://medguard.com

## 🙏 Acknowledgments

- Design inspiration from leading healthcare platforms
- PIPEDA compliance guidelines
- Canadian healthcare standards

---

**Built with ❤️ for emergency medical professionals and patients**

