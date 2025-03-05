import { useEffect } from "react";

const Avionics = () => {
    useEffect(() => {
        if (window.g3) {
            window.g3.gallery.contrib("body");
        }
    }, []);

    return null; // No need to render anything explicitly
};

export default Avionics;