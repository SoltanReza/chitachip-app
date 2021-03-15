import { ErrorResponse, UserProfile } from 'types';

/* --- STATE --- */
export interface ProfilePageState {
  editProfile: {
    params?: EditProfileRequest;
    data?: EditProfileResponse;
    error?: ErrorResponse;
  };
}

export type ContainerState = ProfilePageState;

// #region EditProfile
export interface EditProfileRequest {
  id: number;
  profile: UserProfile;
}
export interface EditProfileResponse {}
// #endregion EditProfile
