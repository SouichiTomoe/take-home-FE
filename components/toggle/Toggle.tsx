import style from './toggle.module.scss';

function ToggleButton({ onclick }: any) {
  return (
    <div className={style.toggle}>
      <label className={style.labelClass}>
        <input onClick={onclick} className={style.inputClass} type="checkbox" />
        <span className={style.slider}></span>
      </label>
    </div>
  );
}

export default ToggleButton;
