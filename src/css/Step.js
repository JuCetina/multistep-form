import styled from 'styled-components';

const activeText = "#022959";
const activeBackground = "#BEE2FD";

export const Step = styled.p`
    width: 33px;
    height: 33px;
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    line-height: 33px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    margin-right: 16px;
    &.isActive{
        color: ${activeText};
        background-color: ${activeBackground};
    }
    @media screen and (max-width: 768px){
        margin-right: 0;
    }
`;