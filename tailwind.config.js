
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"var(--primary-color)",
        "secondary":"var(--secondary-color)"
      },
      backgroundColor:{
        "primary":"var(--background-primary)"
      },
      keyframes:{
        "appearToTop":{
          "0%":{transform:"translateY(-100%)"},
          "100%":{transform:"translateY(0px)"}
        },
        "disappearTop":{
          "0%":{transform:"translateY(0px)"},
          "100%":{transform:"translateY(-100%)"}
        },
        "appearComponent":{
          "0%":{
            "opacity":0,
            "transform":"translateY(30px)"
          },
          "100%":{
            "opacity":1,
            "transform":"translateY(0px)"
          }
        },
        "background-nav-background":{
          "0%":{
            "background":"transparent"
          },
          "100%":{
            "background":"var(--background-primary)"
          }
        },
        "background-nav-background-reverse":{
          "0%":{
            "background":"var(--background-primary)"
          },
          "1000%":{
            "background":"transparent"
          }
        },
        "opactity":{
          "0%":{
            "opacity":0,
          },
          "100%":{
            "opacity":1,
          }
        }
      },
      animation:{
        "appearToTop": "appearToTop 250ms ease-in-out forwards",
        "disappearTop":"disappearTop 250ms ease-in-out forwards",
        "appearComponent":"appearComponent 800ms ease-in-out forwards",
        "background-nav-background": "background-nav-background 300ms ease-in-out forwards",
        "background-nav-background-reverse": "background-nav-background-reverse 300ms ease-in-out forwards",
        "opacity-background-swiper":"opacity 1000ms ease-in-out forwards"
      }
    },
  },
  plugins: [],
};
