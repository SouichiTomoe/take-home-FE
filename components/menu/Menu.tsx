import { useMemo } from 'react';
import Image from 'next/image';
import style from './menu.module.scss';
import logo from '../../assets/logo.svg';
import settings from '../../assets/settings-icon.svg';
import { useAppContext } from '../../context';

const Menu = ({ options }: any) => {
  const [appState] = useAppContext();
  const theme = useMemo(() => style[appState ? 'container' : 'containerDark'], [appState]);
  if (!options) return <></>;
  return (
    <div className={theme}>
      <div className={style.logo}>
        <Image
          loader={(src) => logo}
          src={logo}
          alt="Application logo"
          width="138"
          height="48"
          unoptimized={true}
        />
      </div>
      <ul className={style.listContainer}>
        {options.map((item: any, index: number) => {
          return (
            <li
              key={`id-${index}`}
              onClick={() => {
                console.log('goto', item.path);
              }}
            >
              <div className={style.item}>
                <div className={style.option}></div>
                <span>{item.label}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={style.footer}>
        <Image
          loader={(src) => logo}
          src={settings}
          alt="Application logo"
          width="24"
          height="24"
          unoptimized={true}
        />
        <span className={style.setting}>Settings</span>
      </div>
    </div>
  );
};

export default Menu;
