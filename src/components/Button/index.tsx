// import style from "./index.module.scss";
import "./index.module.scss";
type prop = {
  text: string;
  //   onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Index = ({ text }: prop): JSX.Element => {
  return <button type="submit">{text}</button>;
};

export default Index;
