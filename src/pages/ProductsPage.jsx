import { useEffect, useState } from "react"
export default function ProductsPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data =>
                setData(data)
            )
            .catch(error => console.error('errore nel fetch', error))

    }, [])



    return (
        <>
            <div className="container">
                <div className="row">
                    {data.map((dato, index) => (
                        <div key={index} className="col-4">
                            <div class="card h-100 border-0" style={{ width: "18rem" }}>
                                <img src={dato.image} class="card-img-top" alt="..." style={{
                                    height: '300px',
                                    objectFit: 'contain',
                                    backgroundColor: '#fff'
                                }} />
                                <div class="card-body">
                                    <h4 class="card-text">{dato.title}</h4>
                                    <p>{dato.price}</p>
                                    <sub>{dato.desrciption}</sub>
                                </div>
                            </div>
                        </div>

                    )
                    )
                    }
                </div>
            </div>
        </>
    )
}