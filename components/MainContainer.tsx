import { ReactChild } from "react";

const MainContainer = ({children}:{children:ReactChild}) => {
    return (
             <main className="flex flex-col gap-5 mt-10 px-2 lg:px-10 pt-10 mx-auto justify-center">
        
            {children}
        </main>
    );
}

export default MainContainer;