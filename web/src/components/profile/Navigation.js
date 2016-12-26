import React from 'react'
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const PaperWrapper = styled(Paper)`
  flex: 2;
  margin: 8px 0 0;
  display: flex;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  flex: 1;
  align-items: center;
  display: flex;
`;
const ListText = styled.div`
  flex: 1;
  padding: 0 0 0 16px;
`;

const Arrow = styled.div`
  width: 24px;
`;

class Navigation extends React.Component {
  render () {
    return (
      <PaperWrapper>
        <List>
          <ListItem style={{ borderBottom: '1px solid #DDD' }}>
            <ListText>Account & profile </ListText>
            <Arrow>></Arrow>
          </ListItem>
          <ListItem style={{ borderBottom: '1px solid #DDD' }}>
            <ListText>Job </ListText>
            <Arrow>></Arrow>
          </ListItem>
          <ListItem>
            <ListText>Invite friends </ListText>
            <Arrow>></Arrow>
          </ListItem>
        </List>
      </PaperWrapper>
    )
  }
}

export default Navigation;
