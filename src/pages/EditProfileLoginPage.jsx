import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, updateLogin} from "../store/user";
import {useState} from "react";
import {H2, Input, InputError, PageContainer, SaveBtn} from "../components";

export const EditProfileLoginPage = () => {
  const user = useSelector(selectUser)
  const [inputValue, setInputValue] = useState(user.userName)
  const [inputError, setInputError] = useState(false)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit = () => {
    if (inputValue.length < 6) {
      setInputError(true)
      return
    }

    dispatch(updateLogin(inputValue))
    nav('/profile/edit')
  }

  return (
    <PageContainer>
      <H2>Введите новый логин:</H2>
      <Input
        type="text"
        placeholder="Введите новый логин"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputError && (
        <InputError>
          Логин должен содержать не менее 6 символов
        </InputError>
      )}
      <SaveBtn onClick={onSubmit}>Сохранить</SaveBtn>
    </PageContainer>
  )
}