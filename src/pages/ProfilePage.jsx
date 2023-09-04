import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectIsUserLoading, selectUser} from "../store/user";
import {Link} from "react-router-dom";

const PageContainer = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 550px) {
    padding: 0 10px;
  }
`

const ProfileContainer = styled.div`
  background-color: ${props => props.theme.backgroundColorSecondary};
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    padding: 20px;
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    background-color: transparent;
    padding: 0;
  }
`

const ProfileMainInfoContainer = styled.div`
  width: calc(50% - 20px);

  @media screen and (max-width: 1024px) {
    width: calc(50% - 10px);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

const ProfileMainInfo = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .1);
  overflow: auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.textColorAccent};
    border-radius: 5px;
  }

  @media screen and (max-width: 1024px) {
    padding: 15px;
  }

  @media screen and (max-width: 800px) {
    height: auto;
  }
`

const ProfileSecondaryInfoContainer = styled(ProfileMainInfoContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`

const ProfileSecondaryInfo = styled(ProfileMainInfo)`
  justify-content: flex-start;
  height: calc((500px - 40px) / 2);

  @media screen and (max-width: 1024px) {
    height: calc((500px - 20px) / 2);
  }

  @media screen and (max-width: 800px) {
    height: auto;
    max-height: 30vh;
  }
`

const ProfilePhoto = styled(Link)`
  display: block;
  width: 104px;
  height: 104px;
  padding: 6px;
  border: 2px solid ${props => props.theme.textColorAccent};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => props.theme.backgroundColorSecondary};
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
  }
`

const UserName = styled.h2`
  font-size: 24px;
  line-height: 150%;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`

const UserPhoneNumber = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textColorAccent};
  line-height: 150%;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 60px;
  text-align: center;
`

const UserRowInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
  padding: 10px;
  background-color: ${props => props.theme.backgroundColorSecondary};
  border-radius: 10px;

  p {
    font-size: 16px;
    line-height: 150%;

    &:last-child {
      color: ${props => props.theme.textColorAccent};
    }
  }

  @media screen and (max-width: 380px) {
    p {
      font-size: 14px;
    }
  }
`

const UserPosition = styled.h3`
  font-size: 20px;
  line-height: 150%;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`

const UserBio = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`

const UserPayment = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.backgroundColorSecondary};
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const UserPaymentInfo = styled.div`
  p {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    p {
      font-size: 14px;
    }
  }
`

const UserPaymentAmount = styled.div`
  font-size: 20px;
  line-height: 150%;
  font-weight: 500;
  padding: 10px 20px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.$amount ? 'green' : 'red'};
  border-radius: 10px;
  flex-shrink: 0;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 5px 10px;
  }
`

export const ProfilePage = () => {
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectIsUserLoading)

  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileMainInfoContainer>
          <ProfileMainInfo>
            <ProfilePhoto to="/profile/edit/photo">
              <img src={isLoading ? user.defaultPhotoUrl : user.defaultPhotoUrl} alt="Profile image"/>
            </ProfilePhoto>
            <UserName>{user.fullName}</UserName>
            <UserPhoneNumber>{user.phoneNumber}</UserPhoneNumber>
            <UserRowInfo>
              <p>Имя пользователя:</p>
              <p>{user.userName}</p>
            </UserRowInfo>
            <UserRowInfo>
              <p>E-mail:</p>
              <p>{user.email}</p>
            </UserRowInfo>
            <UserRowInfo>
              <p>Дата рождения:</p>
              <p>{user.dateOfBirth}</p>
            </UserRowInfo>
          </ProfileMainInfo>
        </ProfileMainInfoContainer>
        <ProfileSecondaryInfoContainer>
          <ProfileSecondaryInfo>
            <UserPosition>{user.position}</UserPosition>
            <UserBio dangerouslySetInnerHTML={{__html: user.bio}}/>
          </ProfileSecondaryInfo>

          <ProfileSecondaryInfo>
            {user.recentPayments.map(payment => (
              <UserPayment key={payment.id}>
                <UserPaymentInfo>
                  <p>{payment.date}</p>
                  <p>{payment.type}</p>
                </UserPaymentInfo>
                <UserPaymentAmount $amount={Number(payment.amount) > 0}>
                  {payment.amount} руб.
                </UserPaymentAmount>
              </UserPayment>
            ))}
          </ProfileSecondaryInfo>
        </ProfileSecondaryInfoContainer>
      </ProfileContainer>
    </PageContainer>
  )
}