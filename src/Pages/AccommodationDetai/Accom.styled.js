import styled from 'styled-components';
const globalMargin = '1%';

const Container = styled.div`
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: ${globalMargin};
      @media screen and (max-width: 768px) {
            margin: 2%;
      }
`;

const DetailsWrapper = styled.div`
      display: flex;
      flex-direction: row;
      margin: 1% 5% 2% 3.7%;
      justify-content: space-between;

      @media screen and (max-width: 768px) {
            flex-direction: column;
            margin: 2% 4% 2% 4%;
            align-items: center;
      }
`;

const EquipmentsList = styled.ul`
      list-style-type: none;
      padding: 0;
      margin: 15px 0px 0px 0px;
`;

const EquipmentItem = styled.li`
      padding: 1px;
`;
const TitleHostWrapper = styled.div`
      display: flex;
      flex-direction: row;
      margin: 1% 0% 0% 5.9%;

      @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin: 2%;
      }
`;
export { Container, DetailsWrapper, TitleHostWrapper, EquipmentsList, EquipmentItem };
