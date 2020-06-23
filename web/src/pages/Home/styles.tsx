import styled from 'styled-components';

export const Container = styled.div`
  
  /* padding: 30px 30px 50px 150px; */
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  height: 100vh;
 background: #FFA24D;


header {
    margin: 48px 0 0;
    display: flex;
    align-items: center;
  span {
      color: #183172;
      font-size: 25px;
      font-weight: bold;

  }
  img {
      width: 85px;
      height: 60px;
  }
}
`;
  

export const Content = styled.div`
    padding: 0 30px;
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

   
`;
export const CenterContent = styled.div`
    display: flex;
    
`;
export const SideContent = styled.div`
    display: flex;
    margin: 150px 100px 0px 0;
    justify-content: center;
    flex-direction: column;
    

    h1 {
        color: #183172;
        font-size: 54px;
        margin-bottom: 30px;
        width: 430px;
    }
    span {
        font-size: 22px;
        color: #45454E;
        width: 100px;
        margin-bottom: 80px;
        
    }

    a {
        width: 100%;
        max-width: 360px;
        background: #183172;
        height: 72px;
        border-radius: 8px;
        text-decoration: none;

        display: flex;
        align-items: center;
        
        margin-top: 40px;
        overflow: hidden;

    &:hover {
        background: #F2F2F2;
;
    }
        span {
            background: rgba(0, 0, 0, 0.1);
            width: 72px;
            height: 72px;
            color: #F2F2F2;
            font-size: 15px;

            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;
            
             margin: 0;
           
        }
        strong {
            text-align: center;
            flex: 1;
            color: #F2F2F2;
            
        }
    }

`;
export const SideImage = styled.div`
    padding: 60px 0 0 0;
    /* position: relative; */
    /*img {
        width: 620px;
        height: 430px;
    } */
`;


export default styled;
