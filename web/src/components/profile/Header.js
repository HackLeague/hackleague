import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import profileHeader from '../../assets/images/logo-HL-gold-1000.jpg'

const PaperWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 8px;
  flex: 2;
`;

const ImageContainer = styled.img`
  max-width: 100px;
  border-radius: 100%;
`;

const Username = styled.div`
  margin: 24px 0 0;
`;

function ProfileHeader(props) {
  return (
    <PaperWrapper>
      <ImageContainer src={profileHeader} />
      <Username>{props.name}</Username>
    </PaperWrapper>
  );
}

export default ProfileHeader;
