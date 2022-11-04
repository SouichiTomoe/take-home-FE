import style from './card.module.scss';

function Card({ total }: any) {
  const getBackgroundClass = (background: string) =>
    [
      style.container,
      style[
        background === 'primary'
          ? 'colorPrimary'
          : background === 'secondary'
          ? 'colorSecondary'
          : 'colorTernary'
      ],
    ].join(' ');

  return (
    <div className={getBackgroundClass(total.background)}>
      <div className={style.titleContainer}>
        <div>{total.title}</div>
        <select className={style.cardSelect} name="total" id="total">
          {total.options.map((option: any, index: number) => {
            return (
              <option key={`options-${index}`} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.block}>{total.text}</div>
      <div className={style.footer}>{total.percentage}% Improvement</div>
    </div>
  );
}

export default Card;
