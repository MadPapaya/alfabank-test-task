import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, updatePhone} from "../store/user";
import {useState} from "react";
import {H2, Input, InputError, PageContainer, SaveBtn} from "../components";

export const EditProfilePhonePage = () => {
  const user = useSelector(selectUser)
  const [inputValue, setInputValue] = useState(user.phoneNumber)
  const [inputError, setInputError] = useState(false)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()

    if ((inputValue[0] === '+' && inputValue.length !== 19) || (inputValue[0] === '8' && inputValue.length !== 17) ) {
      setInputError(true)
      return
    }
    
    dispatch(updatePhone(inputValue))
    nav('/profile/edit')
  }

  const prefixNumber = (str) => {
    if (str === "8") {
      return "8 (";
    }
    return "375 (";
  };

  const onInputChange = (e) => {
    const value = e.target.value.replace(/\D+/g, "");
    let numberLength = 11;
    let startIndex = 0

    let result;
    if (e.target.value.includes("+8") || e.target.value[0] === "8") {
      result = "";
    } else {
      result = "+";
      startIndex = 1
    }

    for (let i = 0; i < value.length && i < numberLength + startIndex; i++) {
      console.log(value[i])
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4 + startIndex:
          result += ") ";
          break;
        case 7 + startIndex:
          result += "-";
          break;
        case 9 + startIndex:
          result += "-";
          break;
        default:
          break;
      }

      if (startIndex === 1 && i < 3) {
        result = '+375 ('
        continue
      }
      result += value[i];
    }

    setInputValue(result)
  }

  return (
    <PageContainer>
      <H2>Введите новый номер:</H2>
      <form onSubmit={onSubmit}>
        <Input
          type="tel"
          placeholder="Введите новый номер"
          value={inputValue}
          onChange={onInputChange}
        />
        {inputError && (
          <InputError>
            Введите номер телефона в формате 8 (xxx) xxx-xx-xx или +375 (xx) xxx-xx-xx
          </InputError>
        )}
        <SaveBtn type="submit">Сохранить</SaveBtn>
      </form>
    </PageContainer>
  )
}