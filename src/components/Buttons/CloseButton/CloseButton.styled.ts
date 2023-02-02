import styled from 'styled-components'
interface ICloseButton {
    size: number
}

export const CloseButtonStyled = styled.button<ICloseButton>`
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    background-color: #000000;
    color: #FFFFFF;
    border-radius: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    
    p{
        text-align: center;
        font-size: ${(props) => `${(props.size) / 1.5}px`}
    }
`