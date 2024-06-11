import styled from 'styled-components';

export const SalesContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  p {
    align-items: start;
    display: flex;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 18px;
`;

export const InfoIcon = styled.div`
  background:#a5a5a5;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  strong{
    margin: 0 5px ;
  }
  @media (max-width: 386px) {
    font-size: 14px;
  }
`;

export const StatContainer = styled.div`
  display: flex;
`;

export const Stat = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 50%;
  box-shadow: 0 1px 0 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 22px;

  p{
    color: #a5a5a5;
  }

  &:first-child {
    border-bottom-left-radius: 8px;
    margin-right: 1px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
    margin-left: 1px;
  }
`;

export const Percentage = styled.h3`
  color: #28a745;
  font-size: 35px;
  margin: 0;
`;