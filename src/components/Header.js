import React from "react";
import styled from "styled-components";
import { Avatar, Grid, Typography } from "@material-ui/core";

const Wrapper = styled.div`
  align-self: flex-start;
  width: 100%;
`;
const StyledAvatar = styled(({ ...otherProps }) => <Avatar {...otherProps} />)`
  && {
    width: 120px;
    height: 120px;
  }
`;

const Header = props => (
  <Wrapper>
    <Grid container spacing={24} alignItems="center">
      <Grid item>
        <StyledAvatar src={props.avatar_url} />
      </Grid>
      <Grid item>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="caption">{props.location}</Typography>
      </Grid>
    </Grid>
  </Wrapper>
);

export default Header;
