import React from 'react'

const EditComponent = ({ postContent, setPostContent, saveEditedPost }) => {
    return (
        <div id="edit-section">
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
            />
            <button onClick={saveEditedPost}>Save Edited Post</button>
        </div>
    )
}

export default EditComponent