import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 42px 0 18px;
`;

export const BackToSignInButton = styled.TouchableWithoutFeedback`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const BackToSignInButtonContent = styled.View`
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackToSignInButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSLab- Medium';
  margin-left: 16px;
`;
