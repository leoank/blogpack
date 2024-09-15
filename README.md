# Blogpack

## Development

#### Step 0: Requirements

Make sure you have the following tools installed on your machine:
- [Node.js](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads)
- [pnpm](https://pnpm.io/installation)

#### Step 1: Clone the repository

To clone this repository, run the following command in your terminal:

```bash
git clone https://github.com/leoank/blogpack
```

#### Step 2: Install dependencies

Change directory to `blogpack` and install all required packages using pnpm:

```bash
cd blogpack

pnpm install
```

#### Step 3: Run the development server

To start the development server, run the following command:

```bash
# Navigate to `www` directory.
cd packages/www

# Start the development server.
pnpm dev
```

This will start a local development server at `http://localhost:3000`.