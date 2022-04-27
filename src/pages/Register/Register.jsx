import clsx from 'clsx'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { signInWithGoogle, auth } from '../../firebase'
import styles from './Register.module.scss'
export default function Register() {
    const handleSubmit = () => {}
    const handleSignWithGoogle = () => {
        signInWithGoogle()
            .then((res) => {})
            .catch((err) => {
                console.log('Error')
            })
    }
    return (
        <div className={clsx(styles.register, 'd-flex-r')}>
            <form onSubmit={handleSubmit} className={clsx(styles.form)}>
                <div className={clsx(styles.login, 'd-flex-c')}>
                    <input
                        type='text'
                        className={clsx(styles.input, 'input-valid-style')}
                        placeholder={'Email or Phone Number'}
                    />
                    <input
                        type='password'
                        className={clsx(styles.input, 'input')}
                        placeholder={'Password'}
                    />
                    <button
                        type='submit'
                        className={clsx(styles.submit, 'btn', 'btn-blue')}>
                        Login
                    </button>
                    <Link
                        to={'/'}
                        className={clsx(styles.forgotPassword, 'btn')}>
                        {' '}
                        Forgot Password ?
                    </Link>
                </div>
                <div className={clsx(styles.signinBox, 'd-flex-c')}>
                    <div className={clsx(styles.signinBtn, 'btn', 'btn-green')}>
                        Sign In
                    </div>
                </div>
                <div className={styles.signinWithOption}>
                    <h3 className={styles.singinTittle}>Sign In With</h3>
                    <div className={clsx(styles.loginOptions, 'd-flex-r')}>
                        <div
                            onClick={handleSignWithGoogle}
                            className={clsx(
                                styles.loginOption,
                                'd-flex-r',
                                'btn'
                            )}>
                            <span>Google</span>
                            <FcGoogle className={styles.optionIcon} />
                        </div>
                        <div
                            className={clsx(
                                styles.loginOption,
                                'd-flex-r',
                                'btn'
                            )}>
                            <span>GitHub</span>
                            <AiFillGithub className={styles.optionIcon} />
                        </div>
                        <div
                            className={clsx(
                                styles.loginOption,
                                'd-flex-r',
                                'btn'
                            )}>
                            <span>Twitter</span>
                            <AiOutlineTwitter className={styles.optionIcon} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
