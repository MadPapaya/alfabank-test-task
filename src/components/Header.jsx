import {Link} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectIsUserLoading, selectUser} from "../store/user";

const AppHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  color: ${props => props.theme.textColor};
  backdrop-filter: saturate(180%) blur(20px);
`

const HeaderContainer = styled.div`
  max-width: 1480px;
  padding: 15px 40px;
  margin: 0 auto;

  @media screen and (max-width: 550px) {
    padding: 15px 20px;
  }
`

const HeaderNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }
`

const HeaderLogo = styled(Link)`
  display: block;
  flex-shrink: 0;

  img {
    display: block;
    width: auto;
    height: 50px;
  }
`

const HeaderMenuLinks = styled.div`
  display: flex;
  gap: 16px;
`

const HeaderMenuLink = styled(Link)`
  display: flex;
  background-color: ${props => props.theme.backgroundColorSecondary};
  color: ${props => props.theme.textColorSecondary};
  font-size: 16px;
  line-height: 125%;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.textColorAccent};
    color: ${props => props.theme.backgroundColor};
  }
`

const HeaderProfile = styled.div`
`

const HeaderProfileImage = styled.div`
  width: 50px;
  height: 50px;
  padding: 6px;
  border: 2px solid ${props => props.theme.textColorAccent};
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  background-color: ${props => props.theme.backgroundColorSecondary};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }
  
  &:hover + div {
    opacity: 1;
    pointer-events: initial;
  }
`

const HeaderProfileMenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease-in-out;
  margin-top: -50px;
  cursor: pointer;

  &:hover {
    opacity: 1;
    pointer-events: initial;
  }
`

const HeaderProfileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -4px rgba(0, 0, 0, .1);
  width: max-content;
  margin-top: 60px;
  padding: 4px;
  background-color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.textColorAccent};
  border-radius: 10px;
`

const HeaderProfileMenuLink = styled(Link)`
  display: block;
  font-size: 16px;
  padding: 8px 24px;
  color: ${props => props.theme.textColor};
  border-radius: 4px;
  text-decoration: none;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.backgroundColorSecondary};
    color: ${props => props.theme.textColorAccent};
  }
`

export const Header = () => {
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectIsUserLoading)

  return (
    <AppHeader>
      <HeaderContainer>
        <HeaderNav>
          <HeaderMenu>
            <HeaderLogo to="/">
              <img src="/images/icons/logo.png" alt="AlfaBank logo"/>
            </HeaderLogo>

            <HeaderMenuLinks>
              <HeaderMenuLink to="/">Главная</HeaderMenuLink>
            </HeaderMenuLinks>
          </HeaderMenu>

          <HeaderProfile>
            <HeaderProfileImage>
              <img src={isLoading ? user.defaultPhotoUrl : user.defaultPhotoUrl} alt="Profile image"/>
            </HeaderProfileImage>

            {!isLoading && user && (
              <HeaderProfileMenuContainer>
                <HeaderProfileMenu>
                  <HeaderProfileMenuLink to="/profile">
                    Профиль
                  </HeaderProfileMenuLink>
                  <HeaderProfileMenuLink to="/profile/edit">
                    Редактировать профиль
                  </HeaderProfileMenuLink>
                </HeaderProfileMenu>
              </HeaderProfileMenuContainer>
            )}
          </HeaderProfile>
        </HeaderNav>
      </HeaderContainer>
    </AppHeader>
  )
}