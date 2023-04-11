module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#262626',
        secondary: '#F7FAFC',
        gray: {
          light: '#D3DEE9',
          medium: '#EDF2F7',
          650: '#718096'
        },
        blue: '#1E21FF'
      },
      padding: {
        md: 50
      },
      borderRadius: {
        lg: 20,
        md: 10
      }
    },
  },
  plugins: [],
}