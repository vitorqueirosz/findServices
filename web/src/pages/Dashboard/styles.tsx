import styled from 'styled-components';



export const Container = styled.div`
    
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    h1 {
        margin-top: 20px;
        color: #183172;
        
    }

    button {
        background: #FC9639;
        color: #fff;
        border: 0;
        height: 72px;
        width: 310px;
        border-radius: 8px;
        margin-top: 30px;
        align-self: flex-end;
        display: flex;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 20px;

        &:hover {
            background: #FFA959;
        }
        

        svg {
            width: 70px;
            
        }
        span {
            
            background: rgba(0, 0, 0, 0.2);
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
        color: #F58824;
      font-size: 25px;
      
      font-weight: bold;
    }

    img {
        width: 85px;
        height: 60px;
    }


    button {
        text-decoration: none;
        font-size: 16px;
        color: #183172;
        font-weight: bold;
        display: flex;
        align-items: center;
        border: 0;
        cursor: pointer;
        background: none;
        width: auto;
        
    }

    svg {
        color: #F2994A;
        /* margin-right: 10px; */
    }
`;

export const Content  = styled.div`

    background: #fff;
    border-radius: 8px;
    margin-top: 30px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    
    header {
        padding: 16px 0 16px 40px;
        background: #F4A55D;
        margin-bottom: 40px;
        border-radius: 8px 8px 0 0;
    }
    h1 {
        margin-top: 0px;
    }


`;


export const MainContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 40px;
    
   
    ul {
        list-style: none;
        background: #E7E7F5;
        width: 100%;
        max-width: 310px;
        border-radius: 8px;
        margin-bottom: 40px;
        
    }

    li {
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
            height: 180px;
            border-radius: 8px 8px 0 0;
        }
        span {
            font-size: 23px;
            color: #183172;
            display: flex;
            justify-content: center;
            font-weight: bold;
            margin-top: 5px;
            padding: 5px;
        }

        div {
            margin-top: 20px;
            padding-left: 16px;
        }

        h4 {
            color: #183172;
            margin-bottom: 2px;
        }
        p {
            margin-bottom: 12px;
            color: #6C6C80;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }

        aside {
            padding: 0 16px 24px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            button {
                width: 120px;
                background: #FF6F6F;
                display: flex;
                height: 50px;
                justify-content: center;
                margin-top: 8px;
                border: 0;
                border-radius: 8px;
                color: #fff;
                cursor: pointer;
                font-weight: bold;

        &:hover {
            background: #FF8080;
        }

        :nth-child(1) {
            background: #FFA959;

        &:hover {
            background: #FAB97D;
        }
            }
        }


        }
    }

`;


export default styled;