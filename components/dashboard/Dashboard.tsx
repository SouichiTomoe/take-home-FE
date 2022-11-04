import { useMemo } from 'react';
import Card from '../card/Card';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Pod from '../pod/Pod';
import style from './dashboard.module.scss';
import { useAppContext } from '../../context';

const Dashboard = ({ data }: any) => {
    const [appState] = useAppContext();
    const theme = useMemo(() => style[appState ? 'container' : 'containerDark'], [appState]);
    return (
        <div className={theme}>
            <div className={style.menuContainer}>
                <Menu options={data.menuOptions}></Menu>
            </div>
            <div className={style.dashboardContainer}>
                <Header user={data.user} />
                <Pod status={data.status} />
                <div className={style.cardsContainer}>
                    {data.totals.map((total: any, index: number) => {
                        return <Card key={`id-${index}`} total={total}></Card>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
