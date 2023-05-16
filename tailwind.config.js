/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#FF9900",
        
"secondary": "#E4911591",
        
"accent": "#1C2B35",
        
"neutral": "#181821",
        
"base-100": "#FDFCFD",
        
"info": "#AFCAE4",
        
"success": "#31D3AB",
        
"warning": "#FCE15A",
        
"error": "#FF3030",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

