import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #EA8B33;
  padding: 42px 8px 16px 8px;
  
`;


export const Main = styled.View`
    flex: 1;
    justify-content: center;
`;

export const MainText = styled.Text`

    color: #183172;
    font-size: 32px;
    font-family: 'Ubuntu_700Bold';
    max-width: 280px;
    margin-top: 30px;

`;
export const Logo = styled.Image`
   /* width: 50px; */
   /* height: 30px; */
   margin-right: 4px;
`;


export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextImage = styled.Text`
    color: #fff;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
`;
export const MainDescription = styled.Text`
    color: #45454E;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 15px;
    font-family: 'Roboto_400Regular';
    max-width: 260px;
    line-height: 24px;

  
`;

export const ButtonNavigate = styled.TouchableHighlight`
    color: #fff;
    height: 56px;
    width: 310px;
    padding: 8px;
    background: #fff;
    border-radius: 6px;
    margin-top: 16px;
    
    justify-content: space-between;

    
`;

export const TextButton = styled.Text`
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content: center;
`;