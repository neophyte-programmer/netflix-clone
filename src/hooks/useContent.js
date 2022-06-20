import { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase'

// target is the films or series
const useContent = (target) => {
	const [content, setContent] = useState([])
	const { firebase } = useContext(FirebaseContext)

    useEffect(() => {
        // use firebase and firestore to access collection
		firebase
			.firestore()
            .collection(target)
            //here we get the collection
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    // here we get the id of the content so we can use it as a key
                    documentID: contentObj.id,
                    
                }))
                
                setContent(allContent)
            }).catch((error) => {
                console.log(error.message)
            })
    }, [])
    
    return { [target]: content}
}

export default useContent
