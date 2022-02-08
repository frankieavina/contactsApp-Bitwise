import './ContactCard.css';
import styled from 'styled-components';
import './../../app.css';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);
  margin: 30px;
  padding: 20px;
  display: flex;
`;

const CloseButton = styled.button`
  background-color: #999;
  color: #fff;
  border: 0;
  border-radius: 100%;
  font-weight: bold;

  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

const ContactCard = ({ 
    firstName='', 
    lastName='', 
    phoneNumber='', 
    profilePic='' 
}) => {
    return (
        <Card>
            <div className="flex flex-1">
                <div className="ContactCard__left">
                <img
                    className="ContactCard__photo"
                    src={profilePic}
                    alt={`Profile of ${firstName} ${lastName}.`}
                />
                </div>
                <div className="ContactCard__right">
                <p>
                    {firstName} {lastName}
                </p>
                <p>{phoneNumber}</p>
                </div>
            </div>
            <div className="flex align-items-center">
                <CloseButton></CloseButton>
            </div>
        </Card>
    )
}

export default ContactCard;