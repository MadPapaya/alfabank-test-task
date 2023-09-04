import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";
import {selectTheme, setTheme} from "../store/theme";
import {PiMoonStars} from "react-icons/pi";
import {BsSun} from "react-icons/bs";

const PageContainer = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 550px) {
    padding: 0 10px;
  }
`

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`


const EditRow = styled(Link)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${props => props.theme.backgroundColorSecondary};
  border-radius: 10px;
  font-size: 16px;
  line-height: 150%;
  text-decoration: none;
  color: ${props => props.theme.textColor};

  svg {
    font-size: 1.5em;
    color: ${props => props.theme.textColorAccent};
  }
`

const SwitchThemeButton = styled.div`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.backgroundColor};
    -webkit-transition: .4s;
    transition: .3s ease-in-out;
    border-radius: 34px;

    &:before {
      position: absolute;
      z-index: 2;
      content: "";
      height: 26px;
      width: 26px;
      left: 6px;
      bottom: 4px;
      background-color: ${props => props.theme.textColor};
      transition: .3s ease-in-out;
      border-radius: 50%;
      
      ${props => props.theme.type === 'light' && `
        transform: translateX(34px);
      `};
    }
  }
  
  svg {
    position: absolute;
    top: 4px;
    z-index: 1;
    font-size: 26px;
    color: ${props => props.theme.textColor};
    transition: .3s ease-in-out;

    &:first-of-type {
      left: 6px;
      
      ${props => props.theme.type === 'dark' && `
        opacity: 0;
      `};
    }
    
    &:last-of-type {
      right: 6px;

      ${props => props.theme.type === 'light' && `
        opacity: 0;
      `};
    }
  }
`

export const EditProfilePage = () => {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <PageContainer>
      <EditContainer>
        <EditRow to="/profile/edit/photo">
          <p>Изменить фото</p>
          <FiArrowRight/>
        </EditRow>
        <EditRow to="/profile/edit/login">
          <p>Изменить логин</p>
          <FiArrowRight/>
        </EditRow>
        <EditRow to="/profile/edit/email">
          <p>Изменить E-mail</p>
          <FiArrowRight/>
        </EditRow>
        <EditRow to="/profile/edit/phone">
          <p>Изменить телефон</p>
          <FiArrowRight/>
        </EditRow>
        <EditRow to="/profile/edit/bio">
          <p>Редактировать описание</p>
          <FiArrowRight/>
        </EditRow>
        <EditRow onClick={() => dispatch(setTheme(theme.type === 'light' ? 'dark' : 'light'))}>
          <p>Тема:</p>
          <SwitchThemeButton>
            <BsSun/>
            <span/>
            <PiMoonStars/>
          </SwitchThemeButton>
        </EditRow>
      </EditContainer>
    </PageContainer>
  )
}