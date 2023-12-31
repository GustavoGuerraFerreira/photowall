import React from "react";
import Photo from "./Photo";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
function PhotoWall(props) {
    return <div>
        <Link className="addIcon" to= "/addPhoto"></Link>
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo post={post} key={index} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    </div>
}
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired

}


export default PhotoWall