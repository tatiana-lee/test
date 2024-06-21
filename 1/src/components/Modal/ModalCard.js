import { Modal } from 'antd';
import './ModalCard.css';

const ModalCard = ({ isModalOpen, handleCancel, data }) => {
  return (
    <Modal
      title={data?.name}
      footer={''}
      centered
      width={500}
      height={500}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      <div className='testContainer' style={{ marginTop: '20px' }}>
        <div className='test'>
          <p className='basic-info-one'>Телефон:</p>
          <p className='basic-info-two'>{data?.phone}</p>
        </div>
        <div className='test'>
          <p className='basic-info-one'>Почта:</p>
          <p className='basic-info-two'>{data?.email}</p>
        </div>
        <div className='test'>
          <p className='basic-info-one'>Дата приема:</p>
          <p className='basic-info-two'>{data?.hire_date}</p>
        </div>
        <div className='test'>
          <p className='basic-info-one'>Должность:</p>
          <p className='basic-info-two'>{data?.position_name}</p>
        </div>
        <div className='test'>
          <p className='basic-info-one'>Подразделение:</p>
          <p className='basic-info-two'>{data?.department}</p>
        </div>
      </div>
      <p className='basic-info-three'>Дополнительная информация:</p>
      <p className='basic-info-four'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sequi
        error porro, architecto fuga suscipit hic officia inventore provident ab
        cum tenetur culpa quae omnis voluptatem rem adipisci obcaecati
        reprehenderit?
      </p>
    </Modal>
  );
};
export default ModalCard;
