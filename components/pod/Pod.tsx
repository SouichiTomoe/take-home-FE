import style from './pod.module.scss';

const Pod = ({ status }: any) => {
  const getStatusClass = (status: string): string =>
    style[status === 'online' ? 'dotGreen' : 'dotRed'];

  if (!status) return <></>;
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2>Pod Online Status</h2>
      </div>
      <div className={style.statusContainer}>
        {status.map((element: any, index: number) => {
          return (
            <div key={`id-${index}`} className={style.card}>
              <div className={style.cardTitle}>
                <p>Location {element.location}</p>
              </div>
              <div className={style.block}>
                <ul className={style.listContainer}>
                  {element.users.map((user: any, index: number) => {
                    return (
                      <li key={`card-${index}`} className={style.list}>
                        <div className={getStatusClass(user.status)}></div>
                        <span className={style.name}>{user.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pod;
