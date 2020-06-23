import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
export const ContentInside = styled.View`
    padding: 50px 30px;
    flex: 1;
    background: #fff;
`;

export const Header = styled.View`
    /* flex: 1;
  padding: 64px; */
`;

export const ImageContainer = styled.Image`
    width: 100%;
    height: 185px;
    margin-top: 20px;
    background: #fff;
    border-radius: 8px;
`;


export const MiddleContent = styled.View`
    margin-top: 10px;

`;

export const Title = styled.Text`
    color: #3D3D4D;
    font-size: 30px;
`;
export const Adress = styled.View`
    margin: 20px 0 20px 0;
`;
export const AdressTitle = styled.Text`
    color: #183172;
    font-size: 12px;
    font-weight: bold;
`;
export const AdressInfo = styled.Text`
    color: #6C6C80;
    font-size: 15px;
    margin-top: 8px;
`;
export const Servic = styled.View``;

export const BottomContent = styled.View`
    
    

`;

export const Services = styled.View`
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-around;
`;
export const ServiceCard = styled.TouchableOpacity`

    width: 80px;
    height: 80px;
    border: 1px solid #F38E31;
`;
export const ServiceTitle = styled.Text`

`
;



export const ContentServices = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentType = styled.View`
     flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextTy = styled.Text`
    color: #183172;
    font-size: 15px;
`;