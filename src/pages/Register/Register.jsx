import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useState } from 'react'
import { signInWithGoogle } from '../../firebase'
import styles from './Register.module.scss'
export default function Register() {
    const googleProvider = new GoogleAuthProvider()
    let auth = getAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handleSigout = () => {
        signOut(auth)
            .then((res) => {
                console.log('ok')
            })
            .catch((err) => {
                alert(err)
            })
    }
    const handleOnChange = (e) => {
        setData((prevData) => {
            return { ...prevData, [e.target.name]: e.target.value }
        })
    }
    console.log(data)
    return (
        <div className={styles.register}>
            <div>
                <div className={styles.formGroup}>
                    <label
                        htmlFor={styles.formInput}
                        className={styles.formLabel}>
                        email
                    </label>
                    <input
                        type='text'
                        className={styles.formInput}
                        name='email'
                        onChange={handleOnChange}
                        id={styles.formInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label
                        htmlFor={styles.formInput}
                        className={styles.formLabel}>
                        password
                    </label>
                    <input
                        type='text'
                        className={styles.formInput}
                        onChange={handleOnChange}
                        name='password'
                        id={styles.formInput}
                    />
                </div>
                <button onClick={signInWithGoogle} className={styles.submit}>
                    Submit
                </button>
            </div>
            <button onClick={handleSigout}>signOut</button>
        </div>
    )
}
