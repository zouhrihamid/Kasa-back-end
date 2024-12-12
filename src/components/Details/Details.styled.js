import styled from 'styled-components';

const DetailsWrapper = styled.div`
      display: flex;
      flex-direction: row; /* Changer en colonne pour empiler les Boxes */
      margin: 20px 0px 0px 0px;
      justify-content: space-between;
`;

const BoxTitle = styled.div`
      background-color: #ff6060;
      color: white;
      width: ${(props) => props.width || '100%'};
      height: ${(props) => props.height || '40px'};
      align-items: center; /* Centrer verticalement le contenu */
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      padding: 0px 10px 0px;
      margin: 0px;
      /* Pour espacer chaque box */
`;

const ContentBox = styled.div`
      display: flex;
      background-color: ;
      border-radius: 5px;
      width: 100%;
      height: 150px;
      margin-top: 0px;
`;

const BaseDetail = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
`;
const ShowDetailDescription = styled(BaseDetail)`
      margin: 0px 10px 0px 75px;
`;
const ShowDetailEquipement = styled(BaseDetail)`
      margin: 0px 100px 0px 75px;
`;

export { BoxTitle, ShowDetailEquipement, ShowDetailDescription, ContentBox, DetailsWrapper };
