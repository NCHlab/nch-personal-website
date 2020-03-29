import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#fffff7"
    }
  }
});

const Background = () => {
  return (
    <MuiThemeProvider theme={themeLight}>
      <CssBaseline />
    </MuiThemeProvider>
  );
};
export default Background;
