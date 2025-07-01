import React, { useEffect, useState } from 'react';
import { getFriendRequests, acceptFriendRequest, rejectFriendRequest } from '../../services/member';
import PeopleCard from '../molecule/PeopleCard';
import Button from '../atom/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FriendRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // requestId or null

  useEffect(() => {
    getFriendRequests()
      .then((data) => {
        setRequests(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setRequests([]);
        setLoading(false);
      });
  }, []);

  const handleAccept = async (id) => {
    setActionLoading(id);
    try {
      await acceptFriendRequest(id);
      setRequests((prev) => prev.filter((req) => req._id !== id));
    } catch {
      toast.error('Failed to accept request');
    }
    setActionLoading(null);
  };
  const handleReject = async (id) => {
    setActionLoading(id);
    try {
      await rejectFriendRequest(id);
      setRequests((prev) => prev.filter((req) => req._id !== id));
    } catch {
      toast.error('Failed to reject request');
    }
    setActionLoading(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '0rem 1rem', overflowY: 'scroll' }}>
      <h3 style={{ textAlign: 'center', margin: '1rem 0' }}>Friend Requests</h3>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : requests.filter(req => req.status === 'pending').length === 0 ? (
        <p style={{ textAlign: 'center', color: '#8c8d8d' }}>No Friend Requests</p>
      ) : (
        requests.filter(req => req.status === 'pending').map((req) => (
          <div
            key={req._id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.2rem',
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
              padding: '0.7rem 1.2rem',
              minHeight: '72px',
              gap: '1.2rem',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <PeopleCard
                name={req.senderId?.username}
                subtext={req.requestMessage || req.senderId?.email}
                id={req.senderId?._id}
                imgurl={req.senderId?.profilePicture}
                handleClick={() => {}}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end', minWidth: '90px' }}>
              <Button
                onclick={() => handleAccept(req._id)}
                style={{ background: '#388e3c', color: '#fff', padding: '0.3rem 0.8rem', width: '80px', borderRadius: '6px' }}
                disabled={actionLoading === req._id}
              >
                {actionLoading === req._id ? '...' : 'Accept'}
              </Button>
              <Button
                onclick={() => handleReject(req._id)}
                style={{ background: '#b71c1c', color: '#fff', padding: '0.3rem 0.8rem', width: '80px', borderRadius: '6px' }}
                disabled={actionLoading === req._id}
              >
                {actionLoading === req._id ? '...' : 'Reject'}
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default FriendRequests; 