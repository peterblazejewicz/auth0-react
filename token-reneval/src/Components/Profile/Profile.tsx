import React, { Component, CSSProperties } from 'react';
import { Auth0Authentication } from '../../auth/Auth0Authentication';
import { UserProfile } from '../../Model/UserProfile';
const loading = require('../Common/loading.svg');
import './Profile.css';

export interface ProfileState {
  profile?: UserProfile;
}

export interface ProfileProps {
  auth: Auth0Authentication;
}

class Profile extends Component<ProfileProps, ProfileState> {
  state: ProfileState = {};
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile().then(profile => this.setState({ profile }));
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    if (!profile) {
      return (
        <div className="d-flex justify-content-center">
          <img src={loading} alt="loading" />
        </div>
      );
    } else {
      const style: CSSProperties = {
        width: '64px',
      };
      return (
        <div className="container profile-container">
          <div className="media">
            <img
              className="mr-3 img-thumbnail"
              style={style}
              src={profile.picture}
              alt={profile.name}
            />
            <div className="media-body">
              <h5 className="mt-0">{profile.name}</h5>
              <p>{profile.nickname}</p>
              <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;
