# Genius

Welcome to Genius! Genius is an AI SaaS platform that offers five powerful AI tools to enhance your productivity and creativity. These tools include conversation AI, code generation AI, image generation AI, music generation AI, and video generation AI. With seamless integration of Stripe for payments, Crisp for error handling and customer support, and Clerk for authentication, Genius provides a comprehensive and efficient user experience.

## Key Features

- **Conversation AI (Open AI)**: Enhance your communication with intelligent conversational responses.
- **Code Generation AI (Open AI)**: Streamline your coding process with AI-powered code generation.
- **Image Generation AI (Open AI)**: Create stunning images with the help of advanced AI algorithms.
- **Music Generation AI (Replicate AI)**: Compose unique music tracks effortlessly.
- **Video Generation AI (Replicate AI)**: Produce engaging videos with AI-driven video generation.
- **Usage Limits**: Users can use each tool up to 5 times. For unlimited access, users can upgrade to the pro version.
- **Payment Integration (Stripe)**: Secure and efficient payment processing for upgrading to the pro version.
- **Error Handling & Customer Support (Crisp)**: Ensure smooth operation and immediate support for users.
- **Authentication (Clerk)**: Secure and easy authentication process for all users.
- **Landing Page**: An engaging landing page for users before they sign in to Genius.

## Tech Stack

- **Next.js 14**: React framework for building server-side rendered web applications.
- **React**: JavaScript library for building user interfaces.
- **MySQL**: Relational database management system for storing and retrieving data.
- **Prisma**: Modern database toolkit for TypeScript and Node.js.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.

## Third-party Libraries

- **shadcn-ui**: Component library for building responsive user interfaces.
- **clerk**: Authentication library for secure user authentication.
- **crisp-sdk-web**: Library for integrating Crisp for customer support and error handling.
- **lucide-react & react-icons**: Icon libraries for visual enhancements.
- **react-hook-form**: Form handling library for efficient form management.
- **react-hot-toast**: Notification library for displaying alerts and messages.
- **react-markdown**: Library for rendering Markdown in React components.
- **replicate**: Library for integrating Replicate AI models.
- **stripe**: Library for integrating Stripe for payment processing.
- **tailwind-merge**: Utility to merge Tailwind CSS classes efficiently.
- **typewriter-effect**: Library for creating typewriter animations in React.
- **zod**: TypeScript-first schema validation library for type-safe data handling.
- **zustand**: State management library for managing application state.
- **axios**: HTTP client for making API calls.

## Environment Variables

Ensure to set up the following environment variables in your `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
OPENAI_API_KEY=
REPLICATE_API_TOKEN=
DATABASE_URL=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
```


## Getting Started

To get started with the Genius project, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/genius.git`
2. Install dependencies: `npm install` or `yarn install`
3. Set up environment variables in `.env` file based on the provided template.
4. Set up prisma to sync with your db: `prisma generate` then `npx prisma db push`.
4. Run the development server: `npm run dev` or `yarn dev`
5. Open your browser and navigate to the specified URL to access the application.

## Contribution

Contributions to the Genius project are welcome! Whether you're fixing a bug, implementing a new feature, or improving documentation, your contributions help enhance the platform for everyone.

## License

This project is not licensed.
