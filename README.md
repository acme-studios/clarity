# Clarity: A Minimalist Blog Platform

[cloudflarebutton]

Clarity is a visually serene, content-focused blog platform designed with a minimalist aesthetic. It prioritizes readability and a calm, uncluttered user experience. The application features a stunning landing page that showcases blog posts in a clean grid, and a dedicated, focused reading view for individual articles. The entire experience is built to be lightning-fast, running on Cloudflare's edge network.

For initial deployment, blog content is managed through a simple, developer-friendly mock data file, allowing for easy updates by modifying a single source file and redeploying.

## Key Features

- **Minimalist Design:** A clean, uncluttered interface that puts the focus squarely on your content.
- **Content-Focused:** Optimized for readability with beautiful typography and generous white space.
- **Blazing Fast:** Built with modern tools and deployed to Cloudflare's global edge network for incredible performance.
- **Responsive Perfection:** A flawless reading experience across all devices, from mobile phones to desktops.
- **Simple Content Management:** Easily update blog posts by editing a single TypeScript file and redeploying.
- **Interactive Polish:** Subtle animations and hover effects provide a delightful user experience.

## Technology Stack

- **Frontend:** React, Vite, React Router
- **Backend:** Hono on Cloudflare Workers
- **Styling:** Tailwind CSS, shadcn/ui
- **Animation:** Framer Motion
- **Typescript:** End-to-end type safety

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- A [Cloudflare account](https://dash.cloudflare.com/sign-up).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/clarity-blog.git
    cd clarity-blog
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

### Running in Development Mode

To start the local development server, which includes both the Vite frontend and the Hono backend worker, run:

```sh
bun dev
```

The application will be available at `http://localhost:3000`. The frontend will automatically proxy API requests to the local worker instance.

## How to Use

### Managing Content

All blog content is managed within the `shared/mock-data.ts` file. To add, remove, or edit a blog post:

1.  Open `shared/mock-data.ts`.
2.  Modify the `MOCK_POSTS` array. Each object in the array represents a blog post.
3.  Save the file. The development server will hot-reload, and your changes will be visible immediately.

The `Post` interface is defined in `shared/types.ts`.

## Deployment

This project is designed for seamless deployment to Cloudflare Pages.

1.  **Login to Wrangler:**
    ```sh
    bun wrangler login
    ```

2.  **Deploy the application:**
    ```sh
    bun deploy
    ```

This command will build the Vite application, bundle the worker, and deploy everything to your Cloudflare account. Wrangler will provide you with the final URL.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[cloudflarebutton]

## Project Structure

-   `src/`: Contains the React frontend application source code.
    -   `pages/`: Page components for different routes.
    -   `components/`: Reusable React components.
    -   `lib/`: Utility functions and API client.
-   `worker/`: Contains the Hono backend application that runs on Cloudflare Workers.
    -   `user-routes.ts`: API route definitions.
    -   `entities.ts`: Data models and logic.
-   `shared/`: TypeScript types and mock data shared between the frontend and backend.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.