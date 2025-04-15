# Todo App with Next.js and JSONPlaceholder API

This is a simple Todo application built using Next.js, React Hooks, Redux Toolkit for state management, and Tailwind CSS for styling. It fetches, adds, and deletes todos from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

## Technologies Used

- **Next.js:** A React framework for building server-rendered and statically generated web applications.
- **React Hooks:** For managing state and side effects in functional components (`useState`, `useEffect`).
- **Redux Toolkit:** A set of utilities to simplify Redux development, including state management and asynchronous actions.
- **React Redux:** Official React bindings for Redux.
- **React Toastify:** For displaying notification messages.
- **Clsx:** A utility for conditionally joining class names.
- **React Hook Form:** For handling form submissions.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Tailwind Merge:** A utility to merge Tailwind CSS classes.
- **Prettier:** An opinionated code formatter.
- **Eslint:** A static code analysis tool for identifying problematic patterns in JavaScript/TypeScript code.
- **Eslint Plugin Prettier:** Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- **Prettier Plugin TailwindCSS:** Automatically sorts Tailwind CSS class names.
- **TypeScript:** A superset of JavaScript that adds static typing.

## API Endpoints

- **Get Todos:** `GET https://jsonplaceholder.typicode.com/todos?_limit=10`
- **Create Todo:** `POST https://jsonplaceholder.typicode.com/todos`
- **Delete Todo:** `DELETE https://jsonplaceholder.typicode.com/todos/{id}`

## Getting Started

### 1. Check Node.js and npm Installation

Before running the project, ensure that Node.js and npm (Node Package Manager) are installed on your system.

- **Open your terminal or command prompt:**

    - **Windows:** Press `Win + R`, type `cmd`, and press Enter.
    - **macOS:** Open the "Terminal" application (located in `/Applications/Utilities/`).
    - **Linux:** Open your system's standard terminal.

- **Check Node.js version:**

    ```bash
    node -v
    ```

    If Node.js is installed, you will see its version number (e.g., `v18.17.1`). If not, you'll get an error.

- **Check npm version:**
    ```bash
    npm -v
    ```
    npm is usually installed with Node.js. You should see its version number (e.g., `9.7.2`). If not, or if Node.js itself is missing, proceed to the next step.

### 2. Install Node.js and npm (if not installed)

If Node.js or npm are not installed, follow these steps:

- **Go to the official Node.js website:** Open your web browser and navigate to [https://nodejs.org/](https://nodejs.org/).

- **Download the appropriate installer:**

    - **Recommended For Most Users (LTS - Long-Term Support):** This version is generally more stable.
    - **Current:** This version has the latest features but might be less stable.
      Choose the installer for your operating system (Windows, macOS, Linux) and download it.

- **Run the installer:**

    - **Windows:** Execute the `.msi` file and follow the installation wizard. Make sure the "Add to PATH" option is selected.
    - **macOS:** Open the `.pkg` file and follow the installation instructions.
    - **Linux:** The installation process varies by distribution. Refer to the instructions on the Node.js website for your specific distribution (e.g., using `apt` for Debian/Ubuntu, `yum` or `dnf` for Fedora/CentOS/RHEL).

- **Restart your terminal:** After installation, close your current terminal and open a new one to ensure the system environment variables are updated.

- **Verify the installation again:** Run `node -v` and `npm -v` in the new terminal. You should now see the installed versions.

### 3. Clone the Repository

```bash
git clone <repository_url>
cd <repository_name>
```

### 4. Install Dependencies

    npm install

# or

    yarn install

# or

    pnpm install

### 5. Install Dependencies

    npm run dev

# or

    yarn dev

# or

    pnpm dev

Open your browser and navigate to http://localhost:3000 1 to see the application.

### Project Structure

├── public
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
├── src
│ ├── app
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── StoreProvider.tsx
│ ├── components
│ │ ├── create-todo-form
│ │ │ ├── create-todo-form.props.ts
│ │ │ └── index.tsx
│ │ ├── todo-item
│ │ │ ├── index.tsx
│ │ │ └── todo-item.props.ts
│ │ └── todo-list
│ │ ├── index.tsx
│ │ └── todo-list.props.ts
│ ├── constants
│ │ └── index.ts
│ ├── lib
│ │ └── utils
│ │ └── index.ts
│ ├── hooks
│ │ └── index.ts
│ ├── store
│ │ ├── api
│ │ │ └── index.ts
│ │ ├── index.ts
│ │ └── utils
│ │ └── index.ts
│ └── types
│ └── index.ts
├── .gitignore
├── .prettierrc
├── .eslintrc.config.mjs
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
