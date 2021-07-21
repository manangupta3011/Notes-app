import React from 'react'

export const Footer = () => {
    let footerStyle = {
        marginTop: "91px",
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
