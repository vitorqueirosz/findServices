import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1350px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    

    h1 {
        margin-top: 20px;
        color: #183172;
        
    }

    button {
        background: #183172;
        color: #fff;
        border: 0;
        height: 72px;
        width: 310px;
        border-radius: 8px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            background: #243E80;
        }
        

        svg {
            width: 70px;
            
        }
        span {
            
            background: rgba(0, 0, 0, 0.1);
            width: 70px;
            height: 70px; 
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px 0 0 8px;
            
        }
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex: 1;
            font-size: 15px;
            font-weight: bold;
        }
    }
`;


export const Content  = styled.div`

    display: flex;
    background: #fff;
    border-radius: 8px;
    width: 100%;
    height: 600px;
    margin-top: 30px;
    /* padding: 10px 40px 40px 40px; */

`;

export const SideContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        max-width: 500px;
    }
    
`;


export const MainContent = styled.div`

    display: flex;
    background: #FFA24D;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        width: 100%;
        margin-bottom: 30px;
        /* max-width: 350px; */
    }
    form {
      display: flex;
      flex-direction: column;
      display: flex;
        justify-content: center;
        
    }

    input {
      border: 0;
      width: 304px;
      height: 59px;
      border-radius: 8px;
      padding: 16px;
      background: #fff;
    }

    div {
      display: flex;
      flex-direction: column;

        margin-bottom: 8px;
        color: #fff;
      }
    
`;


export default styled;