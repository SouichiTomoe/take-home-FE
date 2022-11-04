import ToggleSwitch from '../toggle/Toggle';
import style from './header.module.scss';
import { useAppContext } from '../../context';

const Header = ({ user }: any) => {
    const [appState, setAppState] = useAppContext();
    const toggleTheme = () => {
        console.log(appState);
        setAppState(!appState);
    };
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.title}>Hello {user.name}</h1>
            </div>
            <div className={style.themeSwitch}>
                <span className={style.mode}>{true ? 'Light Mode' : 'Dark Mode'}</span>
                <ToggleSwitch onclick={toggleTheme} />
            </div>
        </div>
    );
};

export default Header;
