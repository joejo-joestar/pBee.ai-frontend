import { FC } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100vh;
  position: absolute;
`;

const ProfileBox = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 1050px;
  height: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileHeading = styled.h2`
  align-self: flex-start;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #e8e6f5;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ProfilePage: FC = () => {
  return (
    <ProfileContainer>
      <ProfileBox>
        <ProfileHeading>Account Settings</ProfileHeading>
        <DetailsContainer>Username</DetailsContainer>
      </ProfileBox>
    </ProfileContainer>
  );
};

export default ProfilePage;
