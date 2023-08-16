import styled from "styled-components";

const backgroundAside = "#483EFF";

export const StepsContainer = styled.div`
    width: 274px;
    height: 568px;
    border-radius: 10px;
    background: ${backgroundAside};
    position: relative;
    overflow: hidden;
    padding-top: 40px;
    @media (max-width: 768px) {
        width: 100%;
        height: 160px;
        border-radius: 0;
    }
`;