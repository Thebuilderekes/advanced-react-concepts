import styled from "styled-components";

const LoginButton = styled.button`
  background-color: orangered;
  color: white;
  padding: 5px 10px;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  background-color: green;
  color: white;
  padding: 5px 10px;
`;

function Button() {
  const logoutButtonvalue = "Log out";
  const loginButtonvalue = "Log in";

  return (
    <Section>
      <p>
        These buttons are created using styled components in a seperate
        components in a single file, styled individually within that file usind
        styled component syntax, exported and then imported into where they are
        used, just like react functional components
      </p>
      <div>
        <LoginButton value={loginButtonvalue}>{loginButtonvalue}</LoginButton>
        <LogoutButton value={logoutButtonvalue}>
          {logoutButtonvalue}
        </LogoutButton>
      </div>
    </Section>
  );
}

export default Button;

const Section = styled.section`
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
