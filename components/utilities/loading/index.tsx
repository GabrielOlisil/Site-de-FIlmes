import styled from "styled-components";
import { StyledTypes } from "../../../interfaces/styledTypes";

const StyledLoading = styled.div`
    background-color: #4a4a4d79;
    color: white;

    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        max-width: 15rem;
        background-color: #242426;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex: 1;
        min-height: 10rem;
        p {
            text-align: center
        }
    }
`;


const Loading = () => {
    return (
        <StyledLoading >
            <div>
                <p>

                    loading
                </p>
            </div>

        </StyledLoading>

    )
}

export default Loading;