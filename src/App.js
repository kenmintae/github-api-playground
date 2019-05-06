import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import * as History from "history";
import configureStore from "./configureStore";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

const store = configureStore();

const Home = React.lazy(() => import("./containers/Home"));

class App extends React.Component {
  render() {
    const history = History.createBrowserHistory();
    return (
      <Provider store={store}>
        <Main>
          <BrowserRouter history={history}>
            <React.Suspense
              fallback={<Typography variant="title">Loading</Typography>}
            >
              <Home />
            </React.Suspense>
          </BrowserRouter>
        </Main>
      </Provider>
    );
  }
}

export default App;
