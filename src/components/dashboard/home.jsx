import { useRef } from "react";
import { auth, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc } from "firebase/firestore/lite";
import { collection } from 'firebase/firestore/lite'

const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();
        const title = form.current[0]?.value;
        const description = form.current[1]?.value;
        const cover = form.current[2]?.files[0];
        const url = form.current[3]?.value;

        const storageRef = ref(storage, `portfolio/${cover.name}`);
        //upload the cover image into the storage once its uploaded
        // we get a url for our image
        uploadBytes(storageRef, cover).then(
            (snapshot) => {
                //take reference of the snapshot uploaded and pass it to this
                //function to get its url
                getDownloadURL(snapshot.ref).then((downloadUrl) => {

                    savePortfolio({
                        title,
                        description,
                        cover: downloadUrl,
                        url
                    })
                }, (error) => { //error handler in case downloadUrl fails
                    console.log(error)
                    savePortfolio({
                        title,
                        description,
                        cover: null,
                        url

                    })
                })
            }, (error) => { //error handler in case downloadUrl fails
                console.log(error)
                savePortfolio({
                    title,
                    description,
                    cover: null,
                    url

                })
            }
        )
    }
    const savePortfolio = async (portfolio)=>{
        console.log(portfolio);
        try {
            await addDoc(collection(db, 'portfolio',portfolio))
            window.location.reload(false)
        }catch(error) {
          alert("Failed to add portfolio");
        }
     }

    return (
        <div className="dashboard">

            <form ref={form} onSubmit={submitPortfolio}>
                <p>
                    <input type="text" placeholder="Title" />
                </p>
                <p>
                    <textarea placeholder="Description" />
                </p>
                <p>
                    <input type="file" placeholder="Cover" />
                </p>
                <p>
                    <input type="text" placeholder="Url" />
                </p>
                <button type="submit"> Submit </button>
                <button onClick={() => auth.signOut()}> SignOut </button>
            </form>
        </div>
    )
}

export default Home;