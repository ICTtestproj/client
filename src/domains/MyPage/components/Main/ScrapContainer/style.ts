import styled from 'styled-components';

export const ScrapListContainer = styled.div`
    margin-top: 46px;
`;    

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ScrapList = styled.div`
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
`;

export const ScrapListItem = styled.div`
  width: 150px;
  height: 220px;
  display: inline-block;
  margin-right: 15px;
  padding: 20px 15px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: rgba(255, 255, 255, 0.25);
`;