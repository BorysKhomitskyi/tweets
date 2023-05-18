import PropTypes from "prop-types";
import TweetCard from "../TweetCard/TweetCard";
import { Item, List, Wrapper } from "./TweetCardsList.styled";

const TweetsCardList = ({ users, onFollowClick }) => {
  return (
    <Wrapper>
      <List>
        {users.map(({ id, tweets, followers, avatar }) => (
          <Item key={id}>
            <TweetCard
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              onFollowClick={onFollowClick}
            />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

TweetsCardList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired),
  onFollowClick: PropTypes.func.isRequired,
};

export default TweetsCardList;
