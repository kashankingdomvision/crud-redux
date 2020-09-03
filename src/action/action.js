
import actionTypes from '../constant/constant';

export const addPost = (data) => {
    return{
        type: actionTypes.ADD_POST,
        data
    }
}

export const editPost = (id) => {
    return{
        type: actionTypes.EDIT_POST,
        id:id
    }
}

export const updatePost = (id,data) => {
    return{
        type: actionTypes.UPDATE,
        id:id,
        data:data
    }
}

export const deletePost = (id) => {
    return{
        type: actionTypes.DELETE_POST,
        id:id
    }
}