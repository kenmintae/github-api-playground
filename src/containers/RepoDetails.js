import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import Header from "../components/Header";
import CommitCard from "../components/CommitCard";

const Wrapper = styled.div`
  align-self: flex-start;
  margin: 16px 0;
  width: 100%;
`;

class RepoDetails extends React.PureComponent {
  render() {
    const { items, info, repo } = this.props;
    if (items.length === 0) {
      return <Typography variant="title">Loading</Typography>;
    }
    return (
      <>
        <Header {...info} />
        <Wrapper>
          <Divider />
        </Wrapper>
        <Wrapper>
          <Typography variant="h5" gutterbottom>
            {repo}/ Commits History
          </Typography>
        </Wrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="overline">Author</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Message</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="overline">Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(commit => {
              const { commit: item } = commit;
              return <CommitCard item={item} commit={commit} />;
            })}
          </TableBody>
        </Table>
      </>
    );
  }
}

const mapStateToProps = ({ commitsReducer, orgInfoReducer }) => {
  const { commits: items, repo } = commitsReducer;
  const { info } = orgInfoReducer;
  return {
    info,
    items,
    repo
  };
};

export default connect(
  mapStateToProps,
  null
)(RepoDetails);
