import { signInWithGooglePopup } from "../utils/firebase";
import '../index.css';

const SignIn = () => {

return (
        <div>
            <button onClick={signInWithGooglePopup} className="signIn py-2 px-4 border
      hover:border-transparent rounded
     text-xs sm:text-sm   lg:text-base lg:ml-0">
  Log In
</button>
        </div>
    )
}
export default SignIn;