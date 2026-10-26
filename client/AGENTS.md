# Project Context: UBSP

UBSP is a lightweight AI-powered startup analysis application designed to help users explore startup-related insights and make more informed decisions.

The application currently has three core features:

1. **RAG Assistant** — allows users to ask questions and receive AI-generated answers using a retrieval-augmented generation system.
2. **Funding Analysis** — accepts startup-related inputs and helps users identify relevant investor types or potential investors.
3. **Success Prediction** — evaluates startup-related parameters and returns a predicted success percentage.

# Important Command
Never edit fastapi server
Changes should only be in client folder

A fourth feature, **Market Study**, is planned for the future. Its exact functionality and workflow are still under discussion, so do not make assumptions about its implementation.

## Expected Application Experience

UBSP should feel like a modern, polished SaaS application rather than a traditional marketing website or a complex analytics dashboard.

- Users should enter the application directly without a login, registration, or authentication flow.
- Use a persistent sidebar as the primary navigation, with a separate option for each feature.
- The home page should provide a brief introduction to UBSP and an overview of its available features.
- Each implemented feature should eventually have its own dedicated workspace.
- Market Study can appear as a disabled or "Coming soon" navigation item.
- The overall interface should be simple, intuitive, responsive, and focused on helping users complete their tasks.

## Design Direction

Aim for a professional, contemporary interface with excellent visual hierarchy, consistent spacing, clean typography, and subtle interactions.

Use shadcn/ui and Tailwind CSS for the UI foundation, with Motion for React for restrained animations where appropriate. Lucide icons may be used for navigation and feature identification.

The existing project already has its theme and font configured in the global CSS and layout. Preserve these settings and build around them rather than introducing a new design system.

## Scope of This Stage

At this stage, the goal is to understand the application, establish the overall layout and navigation, and prepare a reusable frontend foundation.

Do not decide the detailed forms, input parameters, output structures, API integration, or workflows for individual features yet. These will be discussed and implemented separately once the requirements are finalized.

Inspect the existing codebase before proposing or making changes. Follow its current Next.js structure and conventions, avoid unnecessary dependencies, and keep the implementation modular so that new features can be added easily.