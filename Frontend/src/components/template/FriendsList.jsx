import React, { useEffect, useState, useContext } from 'react';
import SmallTabBody from '../organism/SmallTabBody';
import { getFriends } from '../../services/member';
import { ChatContext } from '../../context/ChatContext';

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setChatId, setChatName, setChatEmail, setChatProfilePicture } = useContext(ChatContext);

  useEffect(() => {
    getFriends()
      .then((data) => {
        setFriends(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setFriends([]);
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    const friend = friends.find(f => f._id === id);
    if (friend) {
      setChatId(friend._id);
      setChatName(friend.username);
      setChatEmail(friend.email);
      setChatProfilePicture(friend.profilePicture);
    }
  };

  return (
    <SmallTabBody
      list={friends}
      emptyMessage={loading ? 'Loading...' : 'No Friends Found'}
      handleClick={handleClick}
    />
  );
}

export default FriendsList; 