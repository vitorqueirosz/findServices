import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px;
  background: #f0f0f5;
`;


export const Header = styled.View`
    
    padding: 4px 32px;
    
`;

export const HeaderText = styled.Text`
    color: #183172;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Ubuntu_700Bold';
    align-items: center;
    margin-top: 24px;

`;

export const SubText = styled.Text`
    color: #6C6C80;
    font-size: 15px;
    font-family: 'Roboto_400Regular';
`;

export const Main = styled.View`
    flex: 1;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 16px;
    padding: 0 16px;
`;
export const MarkerContainer = styled.View`
    width: 90px;
    height: 80px;
    background: #F38E31;
    border-radius: 8px;
    align-items: center;
    overflow: hidden;
    
`;

export const ImageMarker = styled.Image`
    width: 90px;
    height: 45px;
`;

export const MarkerImageText = styled.Text`
    font-size: 11px;
    line-height: 12px;
    color: #fff;
    /* text-align: center; */
    padding: 2px 0 2px 4px;
    
`;

export const ServicesContainer = styled.View`
    flex: 1;
    /* margin-top: 20px; */
    flex-direction: row;
    
`;
export const ServiceButton = styled.TouchableOpacity`
    align-items: center;
    padding: 20px 16px 16px 16px;
    height: 120px;
    border-width: 2px;
    border-color: #eee;
    width: 130px;
    margin-right: 8px;
    /* margin-bottom: 16px; */
    border-radius: 8px;
    background: #fff;
    justify-content: center;
`;
export const ServiceText = styled.Text`
    margin-top: 8px;
    font-size: 13px;
    text-align: center;
    font-family: 'Roboto_400Regular'
`;


  export const MidlleContent = styled.View`
    flex-direction: column;
    margin-top: 20px;
    padding: 16px;
  `;
  export const SelectTypes = styled.TextInput``;
  export const SelectActuatio = styled.TextInput``;