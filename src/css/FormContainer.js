import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 16px;
    @media screen and (max-width: 768px){
        padding: 0;
        flex-direction: column;
    }
`;