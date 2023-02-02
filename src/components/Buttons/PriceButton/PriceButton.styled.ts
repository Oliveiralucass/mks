import styled from 'styled-components'
interface IPriceButton {
    size: number
}

export const PriceButtonStyled = styled.div<IPriceButton>`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size/ 2.5}px`};
    background-color: var(--color-dark);
    color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 6px;

    p{
        font-size: ${(props) => `${props.size / 4}px`};
        font-weight: 700;
    }
`