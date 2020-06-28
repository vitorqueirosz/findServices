import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
    margin-top: 48px;
     display: flex;
     align-items: center;
    }

    span {
        color: #183172;
      font-size: 25px;
      
      font-weight: bold;
    }

    img {
        width: 85px;
        height: 60px;
    }


<<<<<<< HEAD
    button {
=======
    a {
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
        text-decoration: none;
        font-size: 15px;
        color: #183172;
        font-weight: bold;
        display: flex;
        align-items: center;
<<<<<<< HEAD
        border: 0;
        cursor: pointer;
=======
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
    }

    svg {
        color: #F2994A;
        margin-right: 10px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 80px auto;    
    background: #ffff;
  
    max-width: 730px;
    border-radius: 8px;
    margin-top: 48px;
    padding: 64px;

    h1 {
        width: 100%;
        max-width: 200px;
        color: #183172;
        
        margin-bottom: 30px;
    }
    h2 {
        color: #183172;
        width: 100%;
        max-width: 200px;
        
        
    }

`;
export const DataContent = styled.div`
    label {
        color: #6c6c80;
        font-size: 14px;
        
        
    }
    input {
        width: 100%;
        background: #F0F0F5;
        border: 0;
        height: 50px;
        border-radius: 8px;
        margin: 8px 0 15px 0;
        padding: 0 16px;
        font-size: 16px;
        color: #6C6C80;

    }
    h2 {
        margin-bottom: 30px;
    }
`;
    export const TopContent = styled.div``;

export const SelectContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    div {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    select {
        margin: 8px 0 32px 0;
        flex: 1;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        background: #F0F0F5;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        font-size: 16px;
        color: #6C6C80;
        
    }

    .rigthContent {
        margin-left: 24px;
    }
`;

export const BottomContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;

    input {
        width: 97%;
    }
    .rigthContent {
        margin-left: 16px;
    }
`;

export const AdressContent = styled.fieldset`
    min-inline-size: auto;
    margin-top: 64px;
    border: 0;

    label {
        color: #6c6c80;
        font-size: 14px;
        
        
    }
    legend {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        
        span {
            color: #6C6C80;
            font-size: 14px;
        }
    }


    .leaflet-container{
        width: 100%;
        height: 350px;
        border-radius: 8px;
        margin-bottom: 24px;
    }

`;

export const Services = styled.div`
    margin-top: 48px;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
        align-items: center;
        span {
            color: #6C6C80;
            font-size: 14px;
            
        }
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
        list-style: none;

    li {
        width: 192px;
        border-radius: 8px;
        height: 184px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFF2E5;

        cursor: pointer;

        img {
            width: 64px;
            height: 64px;
        }
        span {
            margin-top: 16px;
            color: #183172;
            
        }
    }

    .selected {
        border: 2px solid #FF9429; 
    }
}
`;


export const SubmitButton = styled.div`
        display: flex;
        justify-content: space-between;

     button {
        background: #F2994A;
        width: 260px;
        height: 56px;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
         font-size: 16px;

        border: 0;
        align-self: flex-end;
        margin-top: 40px;
        transition: background-color 0.2s;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #F8AF6F;
        }
     }
`;

export default styled;