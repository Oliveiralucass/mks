import styled from 'styled-components'

export const FooterStyled = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 34px;
    background-color: var(--color-background-muted);
    padding: 12px 0;

    @media (max-width: 768px) {
        height: 52px;
    }
`