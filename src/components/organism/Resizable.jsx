import React from 'react'

function Resizable({ children, left, right, top, bottom, style }) {
    const defaultStyle = {
        // backgroundColor:'#e9e6e3'
        backgroundColor: 'red'

    }
    const ColResize = {
        cursor: 'col-resize'
    }
    const RowResize = {
        cursor: 'row-resize'
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {top && <div style={{ ...RowResize, ...defaultStyle, ...style }}>.</div>}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {left && <div style={{ ...ColResize, ...defaultStyle, ...style }}>.</div>}
                {children}
                {right && <div style={{ ...ColResize, ...defaultStyle, ...style }}>.</div>}
            </div>
            {bottom && <div style={{ ...RowResize, ...defaultStyle, ...style }}>.</div>}
        </div>
    )
}

export default Resizable
