import React, { useState, useEffect } from "react";
import Commentform from "./commentform";
import ListComments from "./listcomments";

let Post = () => {
    // manejo de estados de los likes
    let [likes, setLike] = useState(0);
    let updateLikes = () => {
        setLike(likes+1);
    };
    //manejo del boton de comentario
    let [btnComment, setBtnComment] = useState(false);
    let isShowComment = () => setBtnComment(!btnComment);
    //console.log(btnComment);
    //funcion para obtener comentario del formulario
    let [textComment, setTextComment] = useState("");
    let getCommentData = (Comment)=>{
        setTextComment(Comment);
    }
     //listado de comentaros
     let ListCom = [
        {id:1, text: "El Deportivo Independiente Medellín es un club de fútbol colombiano con sede en la ciudad de Medellín."},
        {id:2, text: "Es uno de los equipos más importantes del país y ha logrado múltiples títulos a lo largo de su historia."}
    ];
    let nextID = 3;
    let [listData, setlistData] = useState(ListCom);
    //comprobar si hay un nuevo comentario
    useEffect(()=>{
        if(textComment){
            setlistData([
                ...listData,
                {id: nextID++, text: textComment}
            ]);
        }
    }, [textComment]);
 
    //console.log(ListCom);
    //console.log(listData)
    return(
        <div className="card" style={{"width": "18rem"}}> 
            <div className="card-body">
                 <h4 className="card-title">Deportivo Independiente Medellín</h4>
                 <p className="card-text">El Deportivo Independiente Medellín es un club de fútbol colombiano con sede en la ciudad de Medellín. Es uno de los equipos más importantes del país y ha logrado múltiples títulos a lo largo de su historia.</p>
                 <img src="../../img/dim.png" className="card-img-top" alt="Escudo del Deportivo Independiente Medellín" />
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item d-flex justify-content-around">
                    <span className="">👍😂😁 {likes} </span> <span>{listData.length} 💬</span>
               </li>
               <li className="list-group-item d-flex justify-content-around">
                    <button className="btn btn-primary"
                    onClick={updateLikes}
                    >👍Likes</button>
                     <button className="btn btn-primary"
                     onClick={isShowComment}
                     >💬comment</button>
               </li>
            </ul>
            <div className="card-footer">
                { btnComment && <Commentform getCommentData = {getCommentData} />}
            </div>
            <ListComments ListComData = {listData} />
            {/* Botón para cambiar la imagen del post */}
            {/* <button className="btn btn-primary" onClick={() => changeImageAndResetComments("./../assets/Nueva-imagen.jpg")}>Cambiar Imagen</button> */}
        </div>
    );
};

export default Post;
