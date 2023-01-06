import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex:1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;