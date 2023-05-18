import PropTypes from "prop-types";
import { loadFromStorage } from "../../services/storage";
import {
  Avatar,
  AvatarBox,
  Button,
  ButtonText,
  Card,
  FollowersNumber,
  TweetsNumber,
  UserInfo,
} from "./TweetCard.styled";

const TweetCard = ({ id, avatar, tweets, followers, onFollowClick }) => {
  const ifFollowing = loadFromStorage(`tweet_${id}`) === true;

  const handleFollowClick = () => {
    onFollowClick(id, ifFollowing);
  };

  return (
    <Card>
      <AvatarBox>
        <Avatar width={62} height={62} src={avatar} alt="user avatar" />
      </AvatarBox>
      <UserInfo>
        <TweetsNumber>{tweets.toLocaleString("en-US")} Tweets</TweetsNumber>
        <FollowersNumber>
          {followers.toLocaleString("en-US")} Followers
        </FollowersNumber>
      </UserInfo>
      <Button
        type="button"
        onClick={handleFollowClick}
        isFollowing={ifFollowing}
      >
        <ButtonText isFollowing={ifFollowing}>
          {ifFollowing ? "Following" : "Follow"}
        </ButtonText>
      </Button>
    </Card>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  onFollowClick: PropTypes.func.isRequired,
};

export default TweetCard;
