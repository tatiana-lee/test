import './ModifiedCard.css';
import { Card } from 'antd';
import mail from '../../utils/mail.svg';
import phone from '../../utils/phone.svg';

const ModifiedCard = ({ data, ...rootDOMAttributes }) => {
  return Array.isArray(data) ? data?.map((e, i) => (
    <Card className='card' key={i} id={i} {...rootDOMAttributes}>
      <h2 className='name'>{e.name}</h2>
      <p className='info info-phone'>
        <img src={phone} alt='phone'></img>
        {e.phone}
      </p>
      <p className='info info-mobile'>
        <img src={mail} alt='mail'></img>
        {e.email}
      </p>
    </Card>
  )) : <><p>Нет данных...</p></>;
};
export default ModifiedCard;
