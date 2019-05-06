import React from "react";
import styled from "styled-components";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Icon,
  IconButton
} from "@material-ui/core";
import { CallSplit, Grade, Visibility, Info } from "@material-ui/icons";
import { convertTimestampToDate } from "../helpers";

const StyledDivider = styled(({ ...otherProps }) => (
  <Divider {...otherProps} />
))`
  && {
    height: 28px;
    width: 1px;
    margin: 8px;
  }
`;

const StyledCard = styled(({ ...otherProps }) => <Card {...otherProps} />)`
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StatusWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  vertical-align: middle;
`;

const StyledIcon = styled(({ ...otherProps }) => <Icon {...otherProps} />)`
  && {
    margin-right: 8px;
  }
`;

const RepoList = props => {
  const { info: repo, handleOnClick } = props;
  const time = convertTimestampToDate(repo.updated_at);
  return (
    <StyledCard elevation={1}>
      <div>
        <CardHeader
          title={<Typography variant="title">{repo.name}</Typography>}
          subheader={<div>Updated on {time}</div>}
          action={
            <IconButton onClick={() => handleOnClick(repo)}>
              <Icon>
                <Info />
              </Icon>
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body1" noWrap>
            {repo.description
              ? repo.description
              : `This project has no description`}
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <StatusWrapper>
          <StyledIcon fontSize="small">
            <Grade fontSize="small" />
          </StyledIcon>
          <Typography variant="body2">{repo.stargazers_count}</Typography>
        </StatusWrapper>
        <StatusWrapper>
          <StyledDivider />
          <StyledIcon fontSize="small">
            <CallSplit fontSize="small" />
          </StyledIcon>
          <Typography variant="body2">{repo.forks_count}</Typography>
        </StatusWrapper>
        <StatusWrapper>
          <StyledDivider />
          <StyledIcon>
            <Visibility fontSize="small" />
          </StyledIcon>
          <Typography variant="body2">{repo.watchers}</Typography>
        </StatusWrapper>
      </CardActions>
    </StyledCard>
  );
};

export default RepoList;
