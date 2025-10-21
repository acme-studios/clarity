import type { Post } from './types';
export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    slug: 'journey-into-the-cloud',
    title: 'My Journey Into The Cloud',
    excerpt: 'Discover the challenges and triumphs of migrating a monolithic application to a modern, cloud-native architecture on Cloudflare.',
    content: `
      <h2>The Decision to Migrate</h2>
      <p>Our monolithic application had served us well for years, but it was becoming a bottleneck. Deployments were slow, scaling was a nightmare, and every small change required a full system rebuild. We knew we needed a change. The cloud was the obvious answer, but which cloud? After extensive research, we chose Cloudflare for its global network, serverless capabilities, and robust security features.</p>
      <h2>First Steps: Deconstruction</h2>
      <p>The first step was to break down the monolith. We identified bounded contexts and started carving out microservices. This was a painstaking process, full of hidden dependencies and unexpected challenges. We adopted a strangler fig pattern, gradually routing traffic to new services as they came online.</p>
      <img src="https://picsum.photos/seed/journey/800/400" alt="Cloud architecture diagram" />
      <h2>Embracing Serverless</h2>
      <p>Cloudflare Workers became the backbone of our new architecture. The ability to run code at the edge, close to our users, was a game-changer. We wrote workers for authentication, API gateways, and even some core business logic. The performance gains were immediate and significant.</p>
      <blockquote>"The move to serverless wasn't just a technical shift; it was a mindset shift. We started thinking in terms of functions, events, and ephemeral compute."</blockquote>
      <h2>The Outcome</h2>
      <p>The migration was a long and arduous journey, but the results speak for themselves. Our application is now more resilient, scalable, and performant than ever before. Deployments that used to take hours now take minutes. We can innovate faster and respond to customer needs more effectively. The journey into the cloud was tough, but it was worth it.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/journey/600/400',
    publishedAt: '2024-07-15T10:00:00Z',
  },
  {
    id: '2',
    slug: 'minimalist-design-philosophy',
    title: 'The Philosophy of Minimalist Design',
    excerpt: 'Less is more. An exploration of how minimalist principles can lead to more effective, user-friendly, and beautiful digital products.',
    content: `
      <h2>What is Minimalism?</h2>
      <p>Minimalism, in the context of design, is not about removing everything until nothing is left. It's about removing everything that isn't essential. It's a philosophy of intentionality. Every element on the page should have a purpose. If it doesn't, it's just noise.</p>
      <img src="https://picsum.photos/seed/minimalism/800/400" alt="Clean, minimalist workspace" />
      <h2>The Core Principles</h2>
      <ul>
        <li><strong>Clarity:</strong> The design should be easy to understand and navigate.</li>
        <li><strong>Whitespace:</strong> Ample negative space gives content room to breathe and directs the user's focus.</li>
        <li><strong>Limited Color Palette:</strong> A few carefully chosen colors create a cohesive and calming experience.</li>
        <li><strong>Strong Typography:</strong> When you have fewer elements, the ones that remain must be strong. Typography becomes a key design element.</li>
      </ul>
      <h2>Minimalism in Practice</h2>
      <p>Look at the most successful apps and websites today. Many of them embrace minimalist principles. They prioritize content, reduce clutter, and provide a seamless user experience. This blog itself is an exercise in minimalist design. The focus is on the words and images, with a clean, unobtrusive interface.</p>
      <p>By embracing minimalism, we can create digital experiences that are not only beautiful but also more effective and enjoyable to use.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/minimalism/600/400',
    publishedAt: '2024-07-10T14:30:00Z',
  },
  {
    id: '3',
    slug: 'the-power-of-the-edge',
    title: 'Unlocking the Power of the Edge',
    excerpt: 'How edge computing is revolutionizing the way we build and deliver applications, bringing computation closer to the user than ever before.',
    content: `
      <h2>From Centralized to Decentralized</h2>
      <p>For decades, the model was simple: a centralized server (or cluster of servers) would handle all requests. But as the internet grew, this model started to show its cracks. Latency became a major issue for a global user base. The solution? Move the computation closer to the user. This is the core idea behind edge computing.</p>
      <h2>What is "The Edge"?</h2>
      <p>The "edge" refers to the edge of the network, as close to the end-user as possible. Instead of a request traveling thousands of miles to a central data center, it's handled by a server in a nearby city. This dramatically reduces latency and improves performance.</p>
      <img src="https://picsum.photos/seed/edge/800/400" alt="Global network map" />
      <h2>Use Cases for Edge Computing</h2>
      <p>The possibilities are vast:</p>
      <ul>
        <li><strong>Real-time Applications:</strong> Online gaming, video streaming, and IoT devices all benefit from low-latency processing.</li>
        <li><strong>Personalization:</strong> A/B testing, content localization, and personalized recommendations can be handled at the edge.</li>
        <li><strong>Security:</strong> Web Application Firewalls (WAFs) and DDoS mitigation are more effective when deployed at the edge.</li>
      </ul>
      <h2>The Future is Edgy</h2>
      <p>Edge computing is not just a trend; it's a fundamental shift in how we think about application architecture. As more devices come online and user expectations for speed and performance continue to rise, the power of the edge will only become more critical.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/edge/600/400',
    publishedAt: '2024-07-05T09:00:00Z',
  },
  {
    id: '4',
    slug: 'a-guide-to-structured-logging',
    title: 'A Practical Guide to Structured Logging',
    excerpt: 'Move beyond simple print statements. Learn how structured logging can make your applications more observable, debuggable, and reliable.',
    content: `
      <h2>The Problem with Unstructured Logs</h2>
      <p><code>console.log("User logged in")</code>. We've all written logs like this. They're fine for simple debugging, but in a production environment, they're a nightmare. They're hard to parse, impossible to query, and lack crucial context. When something goes wrong, you're left sifting through a sea of unstructured text.</p>
      <h2>Enter Structured Logging</h2>
      <p>Structured logging is the practice of writing logs in a consistent, machine-readable format, typically JSON. Instead of a simple string, a log entry becomes an object with key-value pairs.</p>
      <pre><code>{
  "timestamp": "2024-07-18T12:34:56Z",
  "level": "info",
  "message": "User logged in successfully",
  "userId": "user-123",
  "sourceIp": "192.168.1.1"
}</code></pre>
      <h2>Benefits of Structure</h2>
      <ul>
        <li><strong>Searchable:</strong> You can easily query your logs for specific events, like all logins for a particular user.</li>
        <li><strong>Analyzable:</strong> You can aggregate data, create dashboards, and set up alerts based on log properties.</li>
        <li><strong>Context-Rich:</strong> You can include as much context as you need, making it easier to understand what was happening when an error occurred.</li>
      </ul>
      <img src="https://picsum.photos/seed/logging/800/400" alt="Dashboard with log data" />
      <h2>Getting Started</h2>
      <p>Most modern languages have excellent libraries for structured logging (like Pino for Node.js or Serilog for .NET). The key is to establish a consistent schema for your logs and ensure your entire team adheres to it. The initial effort pays off tenfold when you're trying to diagnose a production issue at 3 AM.</p>
    `,
    imageUrl: 'https://picsum.photos/seed/logging/600/400',
    publishedAt: '2024-06-28T16:45:00Z',
  },
];