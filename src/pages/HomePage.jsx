import {Link} from "react-router-dom";
import styled from "styled-components";

const bestDeals = [
  {
    id: 1,
    title: 'Лучшее предложение 1!',
    description: 'Мини описание лучшего предложения1:',
    descriptionList: [
      'Описание бонуса 1',
      'Описание бонуса 2',
    ]
  },
  {
    id: 2,
    title: 'Лучшее предложение 2!',
    description: 'Мини описание лучшего предложения2:',
    descriptionList: [
      'Описание бонуса 1',
      'Описание бонуса 2',
    ]
  },
  {
    id: 3,
    title: 'Лучшее предложение 3!',
    description: 'Мини описание лучшего предложения3:',
    descriptionList: [
      'Описание бонуса 1',
      'Описание бонуса 2',
    ]
  },
  {
    id: 4,
    title: 'Лучшее предложение 4!',
    description: 'Мини описание лучшего предложения4:',
    descriptionList: [
      'Описание бонуса 1',
      'Описание бонуса 2',
    ]
  },
  {
    id: 5,
    title: 'Лучшее предложение 5!',
    description: 'Мини описание лучшего предложения5:',
    descriptionList: [
      'Описание бонуса 1',
      'Описание бонуса 2',
    ]
  },
  {
    id: 6,
    title: 'Лучшее предложение 6!',
    description: 'Мини описание лучшего предложения6:',
    descriptionList: [
      'Описание бонуса 1',
      'Описание бонуса 2',
    ]
  }
]

const PageContainer = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 550px) {
    padding: 0 10px;
  }
`

const BestDealsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const BestDealItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc((100% - 40px) / 3);
  background-color: ${props => props.theme.backgroundColorSecondary};
  border-radius: 16px;
  overflow: hidden;
  padding: 32px 32px 0;
  transition: background-color, .3s ease-in-out, .3s ease-in-out;

  h4 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
    color: ${props => props.theme.textColorAccent};
    margin-top: 13px;
    position: relative;
    text-align: center;
    transition: color .3s ease-in-out;
  }

  p {
    color: ${props => props.theme.textColorSecondary};
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 0;
    transition: color .3s ease-in-out;
  }

  ul {
    list-style: none;
  }

  li {
    position: relative;
    margin: 8px 0;
    padding-left: 29px;
    color: ${props => props.theme.textColorSecondary};
    transition: color .3s ease-in-out;

    &:before {
      background-color: ${props => props.theme.textColorAccent};
      content: "";
      display: block;
      height: 2px;
      left: 0;
      position: absolute;
      top: calc(0.5em + 3px);
      width: 17px;
      transition: background-color .3s ease-in-out;
    }
  }

  img {
    display: block;
    width: calc(100% + 64px);
    margin-left: -32px;
  }

  a {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.type === 'light' ? '#ea2119' : '#fff'};
    color: ${props => props.theme.type === 'light' ? '#fff' : '#ea2119'};
    transition: all .4s ease-in-out;
    text-decoration: none;
    padding: 12px 32px 15px;
    border-radius: 30px;
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;

    &:hover {
      opacity: 0.85;
    }
  }

  @media screen and (min-width: 851px) {
    a {
      bottom: -52px;
      background-color: #fff;
      color: #ea2119;
    }

    &:hover {
      background-color: #f03226;
      box-shadow: 0 0 15px 0 rgba(240,50,38,.5);

      h4, p, li {
        color: #fff;
      }

      li:before {
        background-color: #fff;
      }

      a {
        bottom: 40px;
      }
    }
  }
  
  @media screen and (max-width: 1024px) {
    padding: 24px 16px 0;
    
    h4 {
      font-size: 24px;
      line-height: 32px;
    }
    
    img {
      width: calc(100% + 32px);
      margin-left: -16px;
    }
  }

  @media screen and (max-width: 850px) {
    width: calc((100% - 20px) / 2);

    a {
      font-size: 18px;
      line-height: 22px;
      padding: 10px 20px;
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

export const HomePage = () => {

  return (
    <PageContainer>
      <BestDealsWrapper>
        {bestDeals.map(deal => (
          <BestDealItem key={deal.id}>
            <h4>{deal.title}</h4>
            <p>{deal.description}</p>
            <ul>
              {deal.descriptionList.map(desc => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
            <img src="/images/bestDealImage.webp" alt="best deal image"/>
            <Link to="/">Подробнее</Link>
          </BestDealItem>
        ))}
      </BestDealsWrapper>
    </PageContainer>
  )
}