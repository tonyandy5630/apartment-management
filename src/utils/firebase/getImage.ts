import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import app from './config'

const storage = getStorage(app, process.env.NEXT_PUBLIC_bucketURL)

const getImageURLFromFirebase = (imageName: string) => {
    try {
        const imageRef = ref(storage, `assets/${imageName}`)

        return getDownloadURL(imageRef)
    } catch (ex) {
        console.log(ex)
    }
}

export default getImageURLFromFirebase
