/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend:{
      colors: {
        primary: '#4F7942',
        secondary: '#61C60F',
        grayD:'#333333',        
        lightGray100:'#F6F6F6',
        lightGray200:'#F2F2F2'      
        
      },
    }
    
  },
  plugins: [],
}
