import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, updateBio} from "../store/user";
import {useState} from "react";
import {H2, PageContainer, SaveBtn, Textarea} from "../components";

export const EditProfileBioPage = () => {
  const user = useSelector(selectUser)
  const [inputValue, setInputValue] = useState(user.bio)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(inputValue)
    dispatch(updateBio(inputValue))
    nav('/profile/edit')
  }

  return (
    <PageContainer>
      <H2>Обновите описание (для перехода на новую строку используйте тег br):</H2>
      <form onSubmit={onSubmit}>
        <Textarea
          as="textarea"
          placeholder="Введите новое описание"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SaveBtn type="submit">Сохранить</SaveBtn>
      </form>
    </PageContainer>
  )
}