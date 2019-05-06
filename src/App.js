import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as History from "history";
import configureStore from "./configureStore";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

const store = configureStore();

const RepoDetails = React.lazy(() => import("./containers/RepoDetails"));
const NotFound = React.lazy(() => import("./containers/NotFound"));
const RepoList = React.lazy(() => import("./containers/RepoList"));

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
              <Switch>
                <Route path="/" exact component={RepoList} />
                <Route path="/repo/:name" component={RepoDetails} />
                <Route path="*" component={NotFound} />
              </Switch>
            </React.Suspense>
          </BrowserRouter>
        </Main>
      </Provider>
    );
  }
  MailOutlined;
}

export default App;
