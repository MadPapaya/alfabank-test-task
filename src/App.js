import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Link, useLocation, useOutlet} from "react-router-dom";
import {routes} from "./index";
import styled, {ThemeProvider} from "styled-components";
import {Header} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme} from "./store/theme";
import {useEffect} from "react";
import {fetchUser} from "./store/user";
import GlobalCSS from './global.css'
import {BiArrowBack} from "react-icons/bi";

const PageWrapper = styled.main`
  position: absolute;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 100vh;

  &.page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  &.page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  &.page-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`

const PageTitle = styled.div`
  font-size: 30px;
  line-height: 150%;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 2px 2px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1);
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (max-width: 550px) {
    font-size: 20px;
  }
`

const PageTitleInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 1480px;
  margin: 0 auto;
  padding: 24px 20px;

  @media screen and (max-width: 550px) {
    gap: 5px;
    padding: 16px 10px;
  }
`

const H1 = styled.h1`
  font-size: inherit;
  line-height: inherit;
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.textColor};
  font-size: 0.8em;
  width: 1.5em;
  height: 1.5em;
  transition: .3s ease-in-out;

  &:hover, &:active {
    color: ${props => props.theme.textColorSecondary};
  }

  @media screen and (max-width: 550px) {
    font-size: 1em;
  }
`

const BackLinkIcon = styled(BiArrowBack)`
  display: block;
`

function App() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  //<плавная замена страниц>
  const location = useLocation()
  const currentOutlet = useOutlet()
  const {nodeRef, name, backLink} =
  routes.find((route) => route.path === location.pathname) ?? {nodeRef: undefined, name: '404', backLink: -1}
  //</плавная замена страниц>

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchUser())
    }, 1000)

    return () => clearTimeout(timer)
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS/>
      <Header/>

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <PageWrapper ref={nodeRef}>
              <PageTitle>
                <PageTitleInner>
                  {backLink && (
                    <BackLink to={backLink}>
                      <BackLinkIcon/>
                    </BackLink>
                  )}

                  <H1>{name}</H1>
                </PageTitleInner>
              </PageTitle>

              {currentOutlet}
            </PageWrapper>
          )}
        </CSSTransition>
      </SwitchTransition>
    </ThemeProvider>
  )
}

export default App;
