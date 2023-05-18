import { useEffect, useState } from 'react';
import { saveToStorage } from '../../services/storage';
import { fetchUsers, updateFollowers } from '../../services/tweetsAPI';
import BackBtn from '../../components/BackBtn/BackBtn';
import TweetCardsList from '../../components/TweetCardsList/TweetCardsList';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import Loader from '../../components/Loader/Loader';
import { Section, } from './TweetsPage.styled';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadMore, setIsLoadMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsLoadMore(false);

    fetchUsers(page)
      .then(newUsers => {
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setIsLoading(false);
        setIsLoadMore(true);
      })
      .catch(console.log);
  }, [page]);

  useEffect(() => {
    if (users.length === 12 && page !== 1) {
      setIsLoadMore(false);
    }
  }, [page, users.length]);

  const handleFollowClick = (userId, isFollowing) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        updateFollowers(user.id, { followers: updatedUser.followers });
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    saveToStorage(`tweet_${userId}`, isFollowing ? false : true);
  };

  const onButtonLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Section>
      <BackBtn to="/">Back</BackBtn>
      <TweetCardsList users={users} onFollowClick={handleFollowClick} />
      {isLoading && Loader(page)}
      {isLoadMore && (
        <LoadMoreBtn onBtnLoadMore={onButtonLoadMore} disabled={isLoading} />
      )}
    </Section>
  );
};

export default TweetsPage;
