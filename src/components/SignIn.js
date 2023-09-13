import { signInWithGooglePopup } from "../utils/firebase"

const SignIn = () => {

return (
        <div>
            <button onClick={signInWithGooglePopup} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Log In
</button>
        </div>
    )
}
export default SignIn;