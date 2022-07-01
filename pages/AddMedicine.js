import React, { useState, useEffect } from 'react'

const AddMedicine = () => {
    const [arrobj, setarr] = useState([])
    const [nam, setnam] = useState("MEDCINE NAME")
    const [qty, setqty] = useState("DAYS")
    const [timming, settimming] = useState("TIMMING")
    



    const addmed = (event) => {


        event.preventDefault()
        if (nam == "MEDCINE NAME" || qty == "DAYS" || timming == "TIMMING") {
            alert('PLEASE FILL ALL DETAILS');

        }
        else {
            arrobj.push({ medname: nam, timming: timming, nodays: qty, price: "" })
            setrel(rel + 1)
        }
        console.log(arrobj);
    }


    return (
        <div>

            <div className="container-fluid">
                <div className="row justify-content-center my-5 bg-danger">
                    <div className='col-12'>
                        <form onSubmit={addmed}>
                            <div className="row justify-content-center my-5">

                                <div className='col-3'>
                                    <div className="my-3">
                                        <input type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder={nam} onChange={(event) => { setnam(event.target.value) }}></input>
                                    </div>
                                </div>

                                <div className='col-3'>
                                    <select className="form-select my-3" aria-label="Default select example" placeholder={timming} onChange={(event) => { settimming(event.target.value) }}>
                                        <option value="SELECTED">SELECT TIMMING</option>
                                        <option value="DAY">DAY</option>
                                        <option value="NIGHT">NIGHT</option>
                                        <option value="DAY/NIGHT">DAY/NIGHT</option>
                                        <option value="DAY/NIGHT/AFTERNOON">DAY/NIGHT/AFTERNOON</option>

                                    </select>
                                </div>

                                <div className='col-2'>
                                    <div className="my-3">
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={qty} onChange={(event) => { setqty(event.target.value) }}></input>
                                    </div>
                                </div>



                                <div className='col-1'>

                                    <button type="submit" className="btn btn-primary my-3">         <svg type='submit' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus  plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg></button>

                                </div>



                            </div>

                        </form>
                    </div>



                </div>
            </div>

            <div className="row justify-content-center my-5">
                <div className='col-5'>

                    <table className="table table-bordered table-dark my-4">

                        <tbody>
                            {
                                arrobj.map((i, j) => {
                                    return <tr key={j}>
                                        <td>{i.medname}</td>
                                        <td>{i.timming}</td>
                                        <td>{i.nodays}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}

export default AddMedicine