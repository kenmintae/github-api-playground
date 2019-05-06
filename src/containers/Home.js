import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { orgInfoActions } from "../actions/";

const RepoDetails = React.lazy(() => import("./RepoDetails"));
const NotFound = React.lazy(() => import("./NotFound"));
const RepoList = React.lazy(() => import("./RepoList"));
const Header = React.lazy(() => import("../components/Header"));

const Wrapper = styled.div`
  align-self: flex-start;
  margin: 16px 0;
  width: 100%;
`;

class Home extends React.PureComponent {
  componentDidMount() {
    const { org, getInfo } = this.props;
    getInfo(org);
  }
  render() {
    const { info } = this.props;
    return (
      <React.Suspense fallback={null}>
        <Wrapper>
          <Header {...info} />
        </Wrapper>
        <Wrapper>
          <Divider />
        </Wrapper>
        <Switch>
          <Route path="/" exact component={RepoList} />
          <Route path="/repo/:name" component={RepoDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getInfo: orgInfoActions
    },
    dispatch
  );
};

const mapStateToProps = ({ reposReducer, orgInfoReducer }) => {
  const { org } = reposReducer;
  const { info } = orgInfoReducer;
  return {
    org,
    info
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
