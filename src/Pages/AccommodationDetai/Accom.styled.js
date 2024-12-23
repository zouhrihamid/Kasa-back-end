import styled from 'styled-components';

const Container = styled.div`
      text-align: center;
      padding: 20px;
`;

const DetailsWrapper = styled.div`
      display: flex;
      flex-direction: row;
      margin: 20px 70px 0px 40px;
      justify-content: space-between;
`;

const EquipmentsList = styled.ul`
      list-style-type: none;
      padding: 0;
      margin: 15px 0px 0px 0px;
`;

const EquipmentItem = styled.li`
      padding: 1px;
`;

export { Container, DetailsWrapper, EquipmentsList, EquipmentItem };
