import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Verify = () => {

    const navigate = useNavigate();

    useEffect(() => {

        navigate("/orders");

    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-2xl font-semibold">
                Verifying Payment...
            </h2>
        </div>
    );

}

export default Verify;