import styled from "styled-components";
import widget from "../assets/widget-icon.svg"
import item from "../assets/item-icon.svg"
import plus from "../assets/plus-icon.svg"
import cardbg from "../assets/card-bg.svg"
import photo from "../assets/photo.svg"


const Leftside = (props) => {
  return (
    <Container>
      <ArtCard> 
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={widget} alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src={item} alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src={plus} alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("data:image/jpeg;base64,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");
    background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid #0a66c2;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

console.log("Card Background:", cardbg);

export default Leftside;