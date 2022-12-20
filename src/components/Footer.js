import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  footerBox: {
    backgroundColor: "#ddd",
    width: "80vw",
    height: "30px",
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 30px 0 30px",
    boxSizing: "border-box",
    "& a": { textDecoration: "none !important", color: "#000" },
  },
});

const Footer = () => {
  const { footerBox } = useStyles();

  return (
    <Box className={footerBox}>
      <Typography
        component="a"
        target="_blank"
        href="https://github.com/ejswebs?tab=repositories"
      >
        GitHub Repository
      </Typography>
      <Typography>© Enzo Steier - Asesoramiento y Servicios</Typography>
    </Box>
  );
};

export default Footer;
