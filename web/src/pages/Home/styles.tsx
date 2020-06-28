import styled from 'styled-components';

export const Container = styled.div`
  
  /* padding: 30px 30px 50px 150px; */
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  
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
    margin: 40px 100px 0px 0;
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

    button {
        width: 100%;
        max-width: 360px;
        background: #183172;
        height: 72px;
        border-radius: 8px;
        border: 0;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        
        margin-top: 20px;
        overflow: hidden;

    &:hover {
        background: #28448C;
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
            font-size: 16px;
        }
    }
    aside {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 360px;
        a {
            background: none;
            color: #454545;
            font-size: 13px;
            margin-top: 15px;
            width: auto;
            height: 40px;
            /* font-weight: bold; */
            text-decoration: none;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        &:hover {
            background: none;
            
        }
        }
    }



`;
export const SideImage = styled.div`
    padding-top: 40px;
    /* position: relative; */
    /*img {
        width: 620px;
        height: 430px;
    } */
`;

export const Input = styled.div`
     input {
        width: 100%;
        max-width: 360px;
        background: #f0f0f5;
        height: 58px;
        border-radius: 8px;
        text-decoration: none;
        border: 0;
        padding: 16px;

        display: flex;
        align-items: center;
        overflow: hidden;

        :nth-child(1) {
            margin-top: 40px;
            margin-bottom: 10px;
        }
    }

`;

export default styled;
