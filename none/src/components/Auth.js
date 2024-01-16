import {auth, provider} from '../firebase-config.js'
import {signInWithPopup} from 'firebase/auth'
import "../style.css"
import "../chatstyle.css"

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Auth = (props) => {
    const {setIsAuth} = props;

    const signInWithGoogle = async () => {
        try{
        const result = await signInWithPopup(auth, provider)
        cookies.set("auth-token", result.user.refreshToken);
        setIsAuth(true);
        } catch(err){
            console.log(err);
        }
    };

    return (
    <div className='intro'>
        <h1 className='intro_title'>안녕하세요.</h1>
        <h1 className='intro_title2'>이곳은 ABT입니다.</h1>
        <h1 className='intro_title3'>로그인하여 입장을 시작하세요.</h1>
        <div className="input_text2">
            <p>
                -ABT는 서울특별시 연희동 홍연길을 기반으로 합니다.-
            </p>
            <button onClick={signInWithGoogle} class="sign_button">ABT 로그인하기</button>
        </div>
    </div>
    );
}