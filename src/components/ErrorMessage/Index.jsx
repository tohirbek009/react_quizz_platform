import React from 'react'

const Index = ({ children }) => {
    return (
        <div style={{
            padding: 10,
            marginBottom: 10,
            marginTop:20,
            borderRadius: 4,
            backgroundColor:'orangered',
            textAlign:'center',
            color: 'white',
            textTransform: 'capitalize'
        }}>
            {children}
        </div>
    )
}

export default Index
