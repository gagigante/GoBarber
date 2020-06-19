import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  /* padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px; */
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 70}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 80px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 30px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;
