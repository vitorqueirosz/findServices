import styled from 'styled-components';

export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
    margin-top: 48px;
     display: flex;
     align-items: center;
    }

    span {
        color: #FF8D24;
      font-size: 25px;
      
      font-weight: bold;
    }

    img {
        width: 85px;
        height: 60px;
    }
    aside {
        display: flex;
        flex-direction: column;
    }

    a {
        align-self: flex-end;
        text-decoration: none;
        color: #183172;
        font-weight: bold;
        display: flex;
        align-items: center;
        background: none;
        margin: 0;
        padding: 0;
        width: auto;
        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        &:hover {
            background: none;
        }
        svg {
        color: #F2994A;
        width: 40px;
    }
    }

    svg {
        color: #F2994A;
        
    }
`;


export default styled;