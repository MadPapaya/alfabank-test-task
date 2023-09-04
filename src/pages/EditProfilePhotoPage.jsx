import styled from "styled-components";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectUser, updatePhoto} from "../store/user";
import {useState} from "react";
import {H2, PageContainer, SaveBtn} from "../components";

const PhotoItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }
`

const PhotoItem = styled.div`
  width: calc((100% - 120px) / 4);
  display: flex;
  justify-content: center;

  div {
    width: 76px;
    height: 76px;
    padding: 6px;
    border: 2px solid ${props => props.$selected ? props.theme.textColorAccent : props.theme.textColor};
    border-radius: 50%;
    cursor: ${props => props.$selected ? 'inherit' : 'pointer'};
    overflow: hidden;
    background-color: ${props => props.theme.backgroundColorSecondary};
    box-shadow: ${props => props.$selected ? '0 0 15px 0 rgba(240,50,38,.5)' : '0 0 10px 0 rgba(0, 0, 0, .1)'};
    transition: .3s ease-in-out;

    &:hover {
      box-shadow: ${props => props.$selected ? '0 0 15px 0 rgba(240,50,38,.5)' : '0 0 15px 0 rgba(0, 0, 0, .5)'};
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  @media screen and (max-width: 550px) {
    width: calc((100% - 40px) / 3);
  }
`

const AvailablePhotos = [
  {
    id: 1,
    photoUrl: "/images/defaultPhotos/photo1.png"
  },
  {
    id: 2,
    photoUrl: "/images/defaultPhotos/photo2.png"
  },
  {
    id: 3,
    photoUrl: "/images/defaultPhotos/photo3.png"
  },
  {
    id: 4,
    photoUrl: "/images/defaultPhotos/photo4.png"
  },
  {
    id: 5,
    photoUrl: "/images/defaultPhotos/photo5.png"
  },
  {
    id: 6,
    photoUrl: "/images/defaultPhotos/photo6.png"
  },
  {
    id: 7,
    photoUrl: "/images/defaultPhotos/photo7.png"
  },
  {
    id: 8,
    photoUrl: "/images/defaultPhotos/photo8.png"
  }
]

export const EditProfilePhotoPage = () => {
  const user = useSelector(selectUser)
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(user.defaultPhotoUrl)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const onSubmit = () => {
    dispatch(updatePhoto(selectedPhotoUrl))
    nav('/profile/edit')
  }

  return (
    <PageContainer>
      <H2>Выберите фото:</H2>
      <PhotoItems>
        {AvailablePhotos.map(photo => (
          <PhotoItem
            key={photo.id}
            $selected={selectedPhotoUrl === photo.photoUrl}
            onClick={() => setSelectedPhotoUrl(photo.photoUrl)}
          >
            <div>
              <img src={photo.photoUrl} alt={`profile photo ${photo.id}`}/>
            </div>
          </PhotoItem>
        ))}
      </PhotoItems>
      <SaveBtn onClick={onSubmit}>Сохранить</SaveBtn>
    </PageContainer>
  )
}