import React from "react";
import styled from "styled-components";
import { Avatar, Typography, TableRow, TableCell } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { convertTimestampToDate, truncate } from "../helpers";
import { FlexRow } from "./Flex";

const AuthorName = styled(({ ...otherProps }) => (
  <Typography {...otherProps} />
))`
  && {
    font-weight: 700;
    padding-left: 16px;
  }
`;

const Cell = styled(({ ...otherProps }) => <TableCell {...otherProps} />)`
  && {
    padding: 16px 56px 16px 24px;
  }
`;

const Row = styled(({ ...otherProps }) => <TableRow {...otherProps} />)`
  && {
    &:nth-of-type(odd) {
      background: #f8f8f8;
    }

    &:first-of-type {
      border-top: 3px solid rgba(224, 224, 224, 1);
    }
  }
`;

const CommitCard = props => {
  const { commit, item } = props;
  return (
    <Row key={commit.node_id}>
      <Cell>
        <FlexRow>
          {commit.author ? (
            <Avatar src={commit.author.avatar_url} />
          ) : (
            <Avatar>
              <Image />
            </Avatar>
          )}
          <AuthorName variant="body1">{item.author.name}</AuthorName>
        </FlexRow>
      </Cell>
      <Cell>
        <Typography variant="body1">
          {truncate(item.message.trim(), 80)}
        </Typography>
      </Cell>
      <Cell>
        <Typography variant="body1">
          {convertTimestampToDate(item.author.date)}
        </Typography>
      </Cell>
    </Row>
  );
};

export default CommitCard;
