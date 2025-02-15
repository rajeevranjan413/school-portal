
import React, { ReactNode } from "react";
import Header from "@/components/Home/Header";


interface LayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {



    return (
        <>
            <Header />
            <main className="bg-red-50">

                <div className="max-w-[1600px] m-auto">{children}</div>
            </main>


        </>
    );
};

export default MainLayout;
