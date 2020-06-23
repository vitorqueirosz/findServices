import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: 1px dashed #F38E31;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF2E5;
    border-radius: 10px;
    outline: 0;
    margin-bottom: 22px;

    img {
        width: 101%;
        height: 101%; 
        object-fit: cover;
        /* border-radius: 8px; */
    }

    svg {
        color: #F38E31;
        width: 24px;
        height: 24px;
        margin-bottom: 8px;
        display: flex;
        
    }

    p {

        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #183172;
        font-size: 16px;
    }
`;


export default styled;
