import React from "react";
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer id="copyleft" className=" text-white text-center py-4">
            <div className="container">
                <p> <small>Copyleft &copy; Jampiier {new Date().getFullYear()}</small></p> {}
            </div>
        </footer>
    );
};

export default Footer;