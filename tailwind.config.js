module.exports = {
  // mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-background': "url('/resources/images/banner.webp'), linear-gradient(90deg, rgba(0,88,255,0.84) 0%, rgba(78,9,121,0.84) 50%, rgba(0,88,255,0.84) 100%)",
     },
     
    }
  },
}
