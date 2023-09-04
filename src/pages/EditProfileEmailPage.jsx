import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, updateEmail} from "../store/user";
import {useState} from "react";
import {H2, Input, PageContainer, SaveBtn} from "../components";

export const EditProfileEmailPage = () => {
  const user = useSelector(selectUser)
  const [inputValue, setInputValue] = useState(user.email)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateEmail(inputValue))
    nav('/profile/edit')
  }

  return (
    <PageContainer>
      <H2>Введите новый E-mail:</H2>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          placeholder="Введите новый e-mail"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SaveBtn type="submit">Сохранить</SaveBtn>
      </form>
    </PageContainer>
  )
}