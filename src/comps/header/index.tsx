import React, { FC, useEffect } from 'react';
import {
  Wrapper,
  Container,
  SpaceBetween,
  Logo,
  Menu,
  Initials,
  Name,
} from './styles';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACTION_TYPES, User } from '../../store/user/user.types';
import { RootState } from '../../store/store';

const Header: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: USER_ACTION_TYPES.FETCH_USER_START });
  }, []);

  const user = useSelector((state: RootState) => state.user?.user);

  const returnInitials = (user: User) => {
    const first = user?.firstName.charAt(0);
    const second = user?.lastName.charAt(0);

    return first?.concat(second);
  };

  return (
    <Wrapper>
      <Container>
        <SpaceBetween marginBottom={19}>
          <Logo />
          <Menu />
        </SpaceBetween>

        <SpaceBetween marginBottom={16}>
          <Initials>{returnInitials(user[0])}</Initials>
          <Name>
            {user[0]?.firstName} &nbsp; {user[0]?.lastName}
          </Name>
        </SpaceBetween>
      </Container>
    </Wrapper>
  );
};

export default Header;
