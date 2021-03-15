import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constans/routes';
export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassWord] = useState('');
    const [error, serError] = useState('');

    const isInValid = firstName === '' || password === '' || emailAddress === '';

    let handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassWord('');
                serError(error.message);
            });
    }

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                </Form.Title>
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        placeholder="First name"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                    <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        placeholder="Password"
                        autoComplete="off"
                        onChange={({ target }) => setPassWord(target.value)}
                    />
                    <Form.Submit disabled={isInValid} type="submit">
                        Sign up
                    </Form.Submit>
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>

    )
}