import styled from 'styled-components';

export const MainWrapper = styled.div`
    padding: 10px 100px 10px 10px;
    background-color: white;
    display: flex;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
        display: block;
        padding: 0;
        background-color: #EFF5FF;
    }
`;