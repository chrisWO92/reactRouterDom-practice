
import { useAuth } from './auth'

const useProfiles = (blogpost) => {

const auth = useAuth()

const isAdmin = auth.user?.isAdmin;
const isEditor = auth.user?.isEditor;
const isAuthor = auth.user?.isAuthor;
const isPostAuthor = auth.user?.isAuthor && (auth.user?.username === blogpost?.author);
const isUser = !isAdmin && !isEditor && !isPostAuthor

return {isAdmin, isEditor, isAuthor, isPostAuthor, isUser}

}

export default useProfiles
