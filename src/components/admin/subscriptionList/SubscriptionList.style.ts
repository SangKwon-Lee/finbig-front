import styled from "@emotion/styled";
export const SubscriptionListWrapper = styled.div`
  min-height: 1200px;
  background-color: #f2f2f2;
  display: flex;
  min-width: 1920px;

  height: 100vh;
`;
export const SubscriptionListBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 85px;
  background-color: #f2f2f2;
  width: 100%;
  max-width: 1920px;
`;

export const SubscriptionListTitle = styled.div`
  font-family: SpoqaHanSans-Bold;
  font-size: 32px;
  margin-bottom: 16px;
`;

export const SubscriptionTableWrapper = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
`;

export const SubscriptionTableHeader = styled.div`
  display: flex;
  height: 56px;
`;

export const SubscriptionTableTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-right: 1px solid #cccccc;
  text-align: center;
`;

export const SubscriptionCancelBtn = styled.button`
  width: 88px;
  height: 36px;
  color: white;
  background-color: #262246;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
`;
