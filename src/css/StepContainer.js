import styled from 'styled-components';

export const StepContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 32px;
    margin-bottom: 37px;
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
        display: inline-block;
        justify-content: center;
        padding: 0;
        margin: 0;
    }
`;

export const Wrapper = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        width: 180px;
        margin: 0 auto;
    }
`;