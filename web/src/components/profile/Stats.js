import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const PaperWrapper = styled(Paper)`
  display: flex;
  flex-direction: row;
  // flex: 1;
  margin: 8px 0;
  align-items: center;
`;

const Stat = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 0 16px;
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin: 16px 0;
`;

const Value = styled.span`
  font-size: 24px;
  color: #94702e;
`;

const Line = styled.div`
  border-right: 1px solid #ccc;
  height: 60px;
`;

class Stats extends React.Component {
  render () {
    const { attended = 0, points = 0, ranking = 0 } = this.props;
    return (
      <PaperWrapper>
        <Stat>
          <Title>HL Ranking</Title>
          <Value>{ranking}</Value>
        </Stat>
        <Line>
        </Line>
        <Stat>
          <Title>Total points</Title>
          <Value>{points}</Value>
        </Stat>
        <Line />
        <Stat>
          <Title>#CB attended</Title>
          <Value>{attended}</Value>
        </Stat>
      </PaperWrapper>
    )
  }
}

export default Stats