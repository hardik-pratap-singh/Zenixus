import React, { useEffect, useRef } from 'react'


const Modal = (props) => {

    // let {openmodal} = props ; 

    // let ref = useRef(null) ; 

    // openmodal= (ref) => {
    //     ref.current.click() ; 
    // }

    //How to pass refs from on compo to another child to parent and parent to child 
    //second thing, understand well the working of useRef hook

    

    useEffect(() => {

    } , [])
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">
                My Info
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
