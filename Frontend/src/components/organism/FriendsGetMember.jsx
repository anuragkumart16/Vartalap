import React, { useEffect, useRef, useState } from "react";
import Heading from "../atom/Heading";
import Holderdiv from "../atom/Holderdiv";
import SearchBar from "../molecule/SearchBar";
import { getMembers } from "../../services/member";
import { useNavigate } from "react-router-dom";
import SmallTabBody from "./SmallTabBody";
import useOverlay from "../../hooks/useOverlay";
import { MdAccountCircle } from "react-icons/md";
import Button from "../atom/Button";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserCard({user}) {
  const { setShowOverlay, setOverlayElements } = useOverlay();
  return (
    <div style={{
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
      width: '100%',
      maxWidth: '500px'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {user.profilePicture ? (
          <img src={user.profilePicture} alt="profile" style={{width: '100%', borderRadius: '50%'}}/>
        ) : (
          <MdAccountCircle size="2.3rem" style={{width: '100%', color: '#666'}}/>
        )}
      </div>
      <div>
        <h3 style={{margin: 0, color: '#333'}}>{user.username}</h3>
        <p style={{margin: '0.5rem 0', color: '#666', fontSize: '0.9rem'}}>{user.email}</p>
        <p style={{margin: 0, color: '#888', fontSize: '0.8rem'}}>Friends: {user.friends.length}</p>
        <Button 
          width="fit-content" 
          style={{padding: '0.5rem 1rem',marginTop:'1rem'}}
          onclick={() => {
            setShowOverlay(true);
            const FriendRequestModal = ({userId}) => {
              const [message, setMessage] = useState("");
              return (
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p>Add a custom message (optional):</p>
                  <input 
                    type="text" 
                    style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }} 
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button onclick={() => setShowOverlay(false)}>Cancel</Button>
                    <Button onclick={() => {
                      api.post(`/member/request`, { id: userId, message })
                        .then((res) => {
                          console.log(res);
                          toast.success('Friend request sent successfully!');
                        })
                        .catch((err) => {
                          console.log(err);
                          if (err.response?.data?.message) {
                            toast.error(err.response.data.message);
                          } else {
                            toast.error('Failed to send friend request. Please try again.');
                          }
                        });
                      setShowOverlay(false);
                    }}>Send</Button>
                  </div>
                </div>
              );
            };
            setOverlayElements(<FriendRequestModal userId={user._id} />);
            // Here you would call the API to send friend request with the message
            // requestMember(user._id, message);
          }}
        >
          Add Friend
        </Button>

      </div>
    </div>
  )
}

function GetMember() {
  const { setShowOverlay, setOverlayElements } = useOverlay();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);

  const handleClick = (id) => {
    const userData = list.find((item) => item._id === id);
    setShowOverlay(true);
    setOverlayElements(<UserCard user={userData} />);
    setList([])
    setSearchText("")
    inputRef.current.value = ""
  }

  useEffect(() => {
    if (searchText.length === 0) {
      return;
    } else if (searchText.length % 2 === 0) {
      getMembers(searchText.trim())
        .then((data) => {
          setList(data.data);
        })
        .catch(() => {
          navigate("/error", {
            state: {
              error: "Server Error!",
              message:
                "Unable to connect to server at the moment, We are working on it, please try again later",
            },
          });
        });
    }
  }, [searchText, navigate]);

  return (
    <Holderdiv
      style={{
        margin: "2rem",
        maxHeight: "90vh",
        overflow: "auto",
        border: "1px solid #eae7e3",
      }}
      width="80%"
    >
      <Heading>Find Friends</Heading>
      <SearchBar changeHandler={setSearchText} reference={inputRef} />
      {searchText.length > 0 && (
        <SmallTabBody
          style={{ marginTop: "1rem", width: "100%", position: "relative" }}
          list={list}
          emptyMessage="No Users Found!"
          handleClick={handleClick}
        />
      )}
    </Holderdiv>
  );
}

export default GetMember;
