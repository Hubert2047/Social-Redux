import { collection, onSnapshot } from 'firebase/firestore'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mediaActions } from '../../components/Store/media-slice'
import { db } from '../../firebase'
import AlbumCard from '../AlbumCard/AlbumCard'
import styles from './MusicHome.module.scss'

export default function MusicHome() {
    const albums = useSelector((state) => state.media.albums)
    const collectionRef = collection(db, 'albums')
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('go effec')
        onSnapshot(
            collectionRef,
            (data) => {
                console.log(
                    data.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                )
                dispatch(
                    mediaActions.setAlbums(
                        data.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() }
                        })
                    )
                )
            },
            (err) => {
                alert(err)
            }
        )
    }, [])

    return (
        <div className={styles.musicHome}>
            <div className={styles.slider}>
                <img
                    className={styles.img}
                    src='https://img.freepik.com/free-vector/riot-against-war-ukraine-people-holding-yellow-blue-ukrainian-flag-demonstration-stop-russian-aggression-young-woman-traditional-dress-man-protest-cartoon-vector-illustration_107791-10900.jpg?size=626&ext=jpg'
                    alt=''
                />
            </div>
            <ul className={styles.albums}>
                {albums?.map((album) => {
                    return <AlbumCard key={album.id} album={album} />
                })}
            </ul>
        </div>
    )
}
