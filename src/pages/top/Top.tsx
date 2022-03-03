import React, { FC } from "react";

import Footer from "../../components/footer/Footer";
import HeaderInfo from "../../components/header/info/HeaderInfo";
import LeagueSelector from "../../components/leagueSelector/LeagueSelector";
import Opportunities from "../../components/opportunities/Opportunities";
import Table from "../../modules/UI/table/Table";

const Top: FC = () => {
    return(
        <div className="Top">
            <LeagueSelector />
            <HeaderInfo />
            <Opportunities />
            <Table
                tableName={'Топ 10 команд'}
            />
            <Table
                tableName={'Топ 10 игроков'}
            />
            <Footer />
        </div>
    )
}

export default Top;