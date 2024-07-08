# Getting Started with Create React App
open Terminal->
apple@Pragatis-MacBook-Pro ~ % cd Desktop
apple@Pragatis-MacBook-Pro Desktop % npx create-react-app netflix-gpt

# tp setup Tailwindcss.com--->get started-->framework-->select 'create-react-app'-->follow the steps

npm install -D tailwindcss
npx tailwindcss init


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;

npm run start

# Feature
--header
-Login/Sign Up page
    --SignIn/SignUp form 
    --redirect to browse Page
-Browse(After Authentication)
    -Header
    -Main Movie
            --Trailer in background
            --Title & Description
            --MovieSuggestion
                   --MovieList * N
-NetflixGPT
    --Search Bar
    --Movie Suggestions

# After creating component ->create Routing
  npm i -D react-router-dom

  Note-> className="absolute" to overlap one pic to another