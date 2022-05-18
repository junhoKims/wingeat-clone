const size = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px',
};

const theme = {
  size: {
    mobile: `(max-width:${size.mobile})`,
    tablet: `(max-width:${size.tablet})`,
    desktop: `(max-width:${size.desktop})`,
  },
  color: {
    mainColor: '#f95e5e',
    backgroundColor: '#fff',
  },

  container: {
    marginMobile: '0 10vw',
    marginPC: '0 8vw',
  },
};
export default theme;
