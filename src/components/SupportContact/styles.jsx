import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.span`
  padding: 8px 0 0 10px;
  color: #a5a5a5;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 640px) {
    padding: 10px 0 0 0;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;

  @media (max-width: 640px) {
    padding: 10px 0 0 0;
  }
`;

export const Avatar = styled.div`
  background-color: #ffcc00;
  border-radius: 25%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;

  @media (max-width: 413px) {
    flex-direction: column;
    gap: 0;
    display: flex;
    align-items: flex-start;
  }
`;

export const ContactNameEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
