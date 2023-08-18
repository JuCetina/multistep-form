import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        height: initial;
        padding: 0;
        flex-direction: column;
        align-items: initial;
    }
`;