import {H2, PageContainer, SaveBtn} from "../components";
import {Link} from "react-router-dom";

export const Page404 = () => {
  return (
    <PageContainer>
      <H2>Страница не найдена!</H2>
      <SaveBtn as={Link} to="/">Вернуться на главную</SaveBtn>
    </PageContainer>
  )
}