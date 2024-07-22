import { FC } from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 250px; /* Adjust to the width of your sidebar */
  width: calc(100% - 250px);
  height: 100vh;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000; /* Ensure it sits above other content */
`;

const CloseButton = styled.button`
  background-color: #786ebb;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #5a36c7;
  }
`;

interface AccountDashboardProps {
  onClose: () => void;
}

const AccountDashboard: FC<AccountDashboardProps> = ({ onClose }) => {
  return (
    <DashboardContainer>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <h1>Account Dashboard</h1>
      {/* Add more dashboard content here */}
    </DashboardContainer>
  );
};

export default AccountDashboard;
