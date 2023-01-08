import styled from "styled-components";
import { StyledTypes}  from "../../interfaces/styledTypes";



const StyledNavbar = styled.nav`
    width: 100%;
    min-height: 80px;
    border-bottom: 1px solid ${({theme}: StyledTypes) => theme.borderColor};
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    background-color: ${({ theme }: StyledTypes) => theme.backgroundBase};


    .container{
        flex: 1;
        display: flex;
        max-width: 90vw;
        align-items: center;
        margin: 0 auto;
        justify-content: space-between;
        color: white;

        .links{
            display: flex;
            gap: 2rem;
            
            li{
                list-style: none;
                a {
                    color: inherit;
                    padding: .7rem;
                    border-radius: .6rem;
                    text-decoration: none;
                }
                
            }
        }
        .menu {
            padding: .7rem;
            border-radius: .6rem;

        }

        .links li a:hover,
        .menu:hover {
            color: ${({ theme }) => theme.accentColor};
            background-color: #ffffff1d;
            cursor: pointer;

        }
    }

`;

const Navbar = () => {
    return (
        <StyledNavbar >
            <div className="container">
                <div className="links">
                    <li><a href="">Filmes</a></li>
                    <li><a href="">Séries</a></li>
                </div>
                <div className="menu">Menu</div>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;
