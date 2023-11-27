import style from './BlueBtn.module.scss';

type PropsType = {
  text: string;
};

const BlueBtn = ({ text }: PropsType) => {
  return <button className={style.btn}>{text}</button>;
};

export default BlueBtn;
