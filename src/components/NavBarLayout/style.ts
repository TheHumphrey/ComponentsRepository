import styled from 'styled-components';

const NavBarStyle = styled.div`
  .navbar-brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .userLayout {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .userInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        span {
          font-size: 1rem;
          font-weight: 600;
        }
        .business {
          font-size: 0.8rem;
          font-weight: 800;
        }
      }

      .userIcon img {
        margin-left: 0.4rem;
        width: 3rem;
        border-radius: 50%;
      }
    }
  }
`;

export default NavBarStyle;
