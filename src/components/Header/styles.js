import styled from "styled-components";

const HeaderStart = styled.header`
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

const HeaderComponents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    gap: 1rem;
`;

const HeaderInfo = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    box-sizing: border-box;
`;

const HeaderTitle = styled.h1`
    font-size: 2.5rem;
    margin: 0;
`;

const HeaderImg = styled.img`
    width: 70px;
`;

const ChangeWindowImg = styled.img`
    width: 2rem;
    cursor: pointer;

    &:hover {
        filter: brightness(1.3);
        cursor: pointer;
    }
`;

const ChangeWindowHouse = styled.img`
    background-color: #333;
    padding: .5rem .5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
        filter: brightness(1.3);
        cursor: pointer;
    }
`;

const Login = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    margin-left: 3rem;
`;

const NotificationImg = styled.img`
    cursor: pointer;
`;

export {
    HeaderStart,
    HeaderComponents,
    HeaderInfo,
    HeaderTitle,
    HeaderImg,
    ChangeWindowImg,
    ChangeWindowHouse,
    Login,
    NotificationImg,
};