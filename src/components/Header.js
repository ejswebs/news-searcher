import { AppBar, makeStyles } from "@material-ui/core";

import logo from "../assets/logo.png";
import Searcher from "./Searcher";

const useStyles = makeStyles({
  navBar: {
    width: "80vw",
    backgroundColor: "#ddd",
    height: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoStyle: { /*  height: "150px" */ width: "250px" },
});

const Header = ({
  count,
  home,
  setArticles,
  setLoading,
  setError,
  setCount,
  search,
  setSearch,
}) => {
  const { navBar, logoStyle } = useStyles({ home });

  return (
    <AppBar position="static" className={navBar}>
      <a href="/">
        <img className={logoStyle} src={logo} alt="news-searcher logo" />
      </a>
      {count && (
        <Searcher
          setArticles={setArticles}
          setLoading={setLoading}
          setError={setError}
          setCount={setCount}
          search={search}
          setSearch={setSearch}
        />
      )}
      {/* <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Material-UI
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar> */}
    </AppBar>
  );
};

export default Header;
