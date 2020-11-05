import * as Styled from './GeneralStyles'
import React from 'react'

export default function Modal(props) {
    const { open, children, width } = props;
    return (
        <>
        {open && 
            <Styled.Div 
                position="fixed" 
                flex
                flex-direciton="column"
                justify="center"
                align="center"
                padding="xxl"
                background="rgba(0, 0, 0, 0.5)" 
                fullscreen
            >
                <Styled.Div 
                    background="gray1" 
                    flex 
                    flex-direction="column" 
                    justify="space-between"
                    maxHeight="100%"
                    height="auto"
                    width={width || '800px'}
                    borderRadius="borderRadius"
                >
                    {children}
                </Styled.Div>
            </Styled.Div>     
        }        
        </>
    )
}
