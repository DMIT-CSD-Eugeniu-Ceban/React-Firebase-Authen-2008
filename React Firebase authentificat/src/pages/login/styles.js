import styled from 'styled-components';

const LoginPageStyle = styled.section`
    max-width:400px;
    margin: 2rem auto;
    header{
        margin-bottom: 2rem;
    }

    h1{
        font-size: 2rem;
    }

    .Toastify__toast {
        background-color: coral; 
        color: white;
    }

    .Toastify__toast-icon {
        color: blue;
    }

    .Toastify__progress-bar--error {
        background-color: blue;
}
`



const FormControl = styled.div`
    margin-bottom: 2rem;
`

export { LoginPageStyle, FormControl }