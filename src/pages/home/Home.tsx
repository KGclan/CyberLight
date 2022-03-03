import React, { FC } from "react";
import Footer from "../../components/footer/Footer";
import Games from "../../components/games/Games";
import HeaderInfo from "../../components/header/info/HeaderInfo";
import Opportunities from "../../components/opportunities/Opportunities";

const Home: FC = () => {
    return(
        <div className="Home">
            <HeaderInfo />
            <Opportunities />
            <Games />
            <Footer />
        </div>
    )
}

export default Home;