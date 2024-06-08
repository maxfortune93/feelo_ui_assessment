import styled from 'styled-components';

export const AccountOverviewContainer = styled.div`
 max-width: 1024px;
  margin: auto;
`;

export const OverviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  gap: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;