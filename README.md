# Portfolio: React + Vite + Tailwind CSS v4

## Step 1: Install Node.js
Download the LTS version from https://nodejs.org, then check:

    node -v
    npm -v

## Step 2: Create the project

    npm create vite@latest portfolio -- --template react
    cd portfolio
    npm install

(If asked about "rolldown" or experimental options, choose No.)

## Step 3: Install Tailwind CSS

    npm install tailwindcss @tailwindcss/vite

That is the only extra package. No icon library, no router.

## Step 4: Copy these files into your project

Delete first:  src/App.css  and  src/assets/  (and the old src/index.css content)

Then copy from this folder, replacing files that already exist:

    index.html                      -> portfolio/index.html
    vite.config.js                  -> portfolio/vite.config.js
    src/main.jsx                    -> portfolio/src/main.jsx
    src/App.jsx                     -> portfolio/src/App.jsx
    src/index.css                   -> portfolio/src/index.css
    src/data.js                     -> portfolio/src/data.js
    src/components/*.jsx            -> portfolio/src/components/  (create the folder)

## Step 5: Run it

    npm run dev

Open http://localhost:5173

## Step 6: Make it yours
Open `src/data.js` and change: email, GitHub, LinkedIn, projects,
QA skills and the education/experience list. You do not need to edit
the components for text changes.

## Step 7: Build for deployment

    npm run build

Upload the `dist` folder to Netlify or Vercel, or connect your GitHub repo to either one
(build command: `npm run build`, output folder: `dist`).
