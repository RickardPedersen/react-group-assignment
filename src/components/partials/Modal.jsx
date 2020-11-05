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
                padding="xxl"
                background="rgba(0, 0, 0, 0.2)" 
                fullscreen
            >
                <Styled.Div 
                    background="gray1" 
                    flex 
                    flex-direction="column" 
                    justify="space-between"
                    max-height="100%"
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
