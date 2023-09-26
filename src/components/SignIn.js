import { signInWithGooglePopup } from "../utils/firebase"

const SignIn = () => {

return (
        <div>
            <button onClick={signInWithGooglePopup} className=" signIn font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Log In
</button>
        </div>
    )
}
export default SignIn;