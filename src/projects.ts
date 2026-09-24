export const projects = [
  {
    id: "shopnest",
    number: "01",
    name: "ShopNest",
    category: "FULL-STACK E-COMMERCE",
    year: "2026",
    summary: "An online store, built from the storefront to the database.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    intro:
      "A MERN e-commerce project that brings customer shopping and admin workflows into one application.",
    challenge:
      "Connect product discovery, cart state, authentication, and order management across a React frontend and an Express backend.",
    built: [
      "Customer pages for browsing products, managing a cart, checkout, and order history.",
      "Admin pages for products, users, order updates, and summary information.",
      "REST APIs organized into routes, middleware, controllers, and Mongoose models.",
      "Redux Toolkit for the cart, Context API for login state, bcrypt for password hashing, and JWT-protected routes.",
    ],
    lesson:
      "The most useful lesson was learning to debug the contract between frontend and backend: field names, request payloads, route paths, and allowed status values all need to agree.",
    status:
      "An ongoing personal project. Backend OTP verification, email notifications, Cloudinary uploads, and Razorpay integration code are present; the frontend OTP and checkout flows are still being refined.",
    role: "Frontend & backend development",
  },
  {
    id: "tasks",
    number: "02",
    name: "Task Manager",
    category: "MERN APPLICATION",
    year: "2026",
    summary: "Everyday tasks. A complete frontend-to-backend learning journey.",
    tags: ["React", "Express", "MongoDB", "REST APIs"],
    intro:
      "A task management application built to practice the complete path from a user action to a database operation.",
    challenge:
      "Build authenticated task CRUD and connect the frontend to a real backend and MongoDB Atlas database.",
    built: [
      "Registration and login APIs with JWT verification middleware.",
      "Create, fetch, update, and delete task endpoints.",
      "MongoDB Atlas integration for persistent application data.",
      "Frontend-to-backend integration with Express, CORS, and environment configuration.",
    ],
    lesson:
      "Testing registration, login, the current-user endpoint, and task creation in sequence made the request lifecycle much easier to understand and debug.",
    status:
      "A personal learning project. Registration, login, current-user retrieval, and task creation and fetching have been tested during development.",
    role: "Full-stack development",
  },
  {
    id: "school",
    number: "03",
    name: "School CRM",
    category: "REACT ADMIN INTERFACE",
    year: "2026",
    summary: "Bringing structure and clarity to an admin workspace.",
    tags: ["React", "JavaScript", "CSS", "UI Development"],
    intro:
      "A React dashboard exploration focused on organizing a school administration interface.",
    challenge:
      "Turn a dense admin workspace into reusable, understandable interface sections.",
    built: [
      "A React-based admin layout with reusable interface components.",
      "Dashboard composition and structured navigation.",
      "Practice translating application requirements into a clear frontend layout.",
    ],
    lesson:
      "Good component boundaries make a busy dashboard easier to build and maintain. The layout should help people find their next action.",
    status:
      "A frontend practice project. The visual preview in this portfolio is a presentation concept, not a connected school system.",
    role: "Frontend development",
  },
];

export type Project = (typeof projects)[number];
