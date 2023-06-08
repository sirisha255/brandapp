import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function ProductCrud() {

    const [id,setId] = useState("");
    const [productname , setProductName] = useState("");
    const [manufacturer,setManufacturer] = useState("");
    const [barcode,setBarcode] = useState("");
    const [description,setDescription] = useState("");
    const [co2,setCo2] = useState("");
    const [marking,setMarking] = useState("");
    const [origin,setOrigin] = useState("");

    const [products,setProducts] = useState([]);
   const [editId,setEditId] = useState(-1);
   
   const [uproductname , usetProductName] = useState("");
   const [umanufacturer,usetManufacturer] = useState("");
   const [ubarcode,usetBarcode] = useState("");
   const [udescription,usetDescription] = useState("");
   const [uco2,usetCo2] = useState("");
   const [umarking,usetMarking] = useState("");
   const [uorigin,usetOrigin] = useState("");

    useEffect(() =>{
        (async() => await Load())();
    }, []);
  

    async function Load() {
      const result = await axios.get("http://localhost:5109/Product");
      console.log('RESPONSE', result.data);
    setProducts(result.data.products)
      

    }

    const handleSubmit = (e) =>{
      const data = {
        id:id,
        productname:productname,
         manufacturer:manufacturer,
         barcode:barcode,
         description:description,
         co2:co2,
         marking:marking,
         origin:origin,
         Type :"Add"
      }
      axios.post("http://localhost:5109/Product/Add", data)
      .then((json) =>{
        clear();
    })
      .catch((err) =>{
        console.log(err);
      })


    }
    const clear = () =>{
        setId("");
        setProductName("");
        setManufacturer("");
        setBarcode("");
        setDescription("");
        setCo2("");
        setMarking("");
        setOrigin("");
        
        Load();
    }
    const handleUpdate =() => {
      axios.put('http://localhost:5109/Product/Update?id=' + editId,
      {
        id: editId,
        productname : uproductname,
        manufacturer : umanufacturer,
        barcode : ubarcode,
        description : udescription,
        co2 : uco2,
        marking : umarking,
        origin: uorigin

      }).then(result =>{
        console.log(result);
         Load();
        setEditId(-1);
      }).catch(err =>console.log(err));
    }
  


     const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete the product") === true){
            axios.delete("http://localhost:5109/Product/Delete?id=" + id)
            .then((result) =>{
                console.log("Delete Values:",result);
                Load();
            })
            .catch(function(err) {
                console.log(err);
        });
    
      }
     }
     
        const handleEdit = (id) =>{
          axios.get('http://localhost:5109/Product/ + id')
          .then(res =>{
            console.log(res.data)
            usetProductName(res.data.productname)
            usetManufacturer(res.data.manufacturer)
            usetBarcode(res.data.barcode)
            usetDescription(res.data.description)
            usetCo2(res.data.co2)
            usetMarking(res.data.marking)
            usetOrigin(res.data.origin)


          }).catch(err => console.log(err));
          setEditId(id);
        }

         return (
        <Fragment>
    <div>
        <h1>Product Details</h1>
         <div className='container'>
            <form>
                <div className='form-group' style={{margin:"0 auto"}}>
                <input type='text' className='form' placeholder='Product ID' id='id' hiddenvalue={id} onChange={(event) =>{setId(event.target.value);}}/>
                    <br></br>

                <input type='text' className='form' placeholder='Product Name' id='productname' value={productname} onChange={(event) =>{setProductName(event.target.value);}}/>
               <br></br>
            
               <input type='text' className='form' placeholder='Manufacturer' id='manufacturer' value={manufacturer} onChange={(event) =>{setManufacturer(event.target.value);}}/>
               <br></br>
            
               <input type='text' className='form' placeholder='Barcode' id='barcode' value={barcode} onChange={(event) =>{setBarcode(event.target.value);}}/>
               <br></br>
            
               <input type='text' className='form' placeholder='Description' id='description' value={description} onChange={(event) =>{setDescription(event.target.value);}}/>
               <br></br>

            
               <input type='text' className='form' placeholder='Co2' id='co2' value={co2} onChange={(event) =>{setCo2(event.target.value);}}/>
               <br></br>

        
               <input type='text' className='form'  placeholder='Marking' id='marking' value={marking} onChange={(event) =>{setMarking(event.target.value);}}/>
               <br></br>

               
               <input type='text' className='form' placeholder='Origin' id='origin' value={origin} onChange={(event) =>{setOrigin(event.target.value);}}/>
                             <br></br>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={(e) => handleSubmit(e)}>Add Product</button>

                  

                </div>
            </form>
         </div>
<br></br>
<table className='table table-striped table-bordered' align='center'>
    <thead>
        <tr>
            <th scope='col'>Id</th>
            <th scope='col'>ProductName</th>
            <th scope='col'>Manufacturer</th>
            <th scope='col'>Barcode</th>
            <th scope='col'>Description</th>
            <th scope='col'>Co2</th>
            <th scope='col'>Marking</th>
            <th scope='col'>Origin</th>
            <th scope='col'>Option</th>

        </tr>
    </thead>
    <tbody style={{}}>

           {
            products.map(product => (
                       product.id === editId ?
                     <tr>
                      <td>{product.id}</td>
                      <td><input type='text' value={uproductname} onChange={e => usetProductName(e.target.value)}/></td>
                      <td><input type='text' value={umanufacturer} onChange={e => usetManufacturer(e.target.value)}/></td>
                      <td><input type='text' value={ubarcode} onChange={e => usetBarcode(e.target.value)}/></td>
                      <td><input type='text' value={udescription} onChange={e => usetDescription(e.target.value)}/></td>
                      <td><input type='text' value={uco2} onChange={e => usetCo2(e.target.value)}/></td>
                      <td><input type='text' value={umarking} onChange={e => usetMarking(e.target.value)}/></td>
                      <td><input type='text' value={uorigin} onChange={e => usetOrigin(e.target.value)}/></td>


                      <td><button  className= 'btn btn-primary'onClick={() =>handleUpdate(product.id)} >Update</button></td>
                    
                     </tr>
                     
                     :
                    <tr key={product.id}>
                    <th>{product.id}</th>
                    <td>{product.productname}</td>
                   <td>{product.manufacturer}</td>
                   <td>{product.barcode}</td>
                   <td>{product.description}</td>
                   <td>{product.co2}</td>
                   <td>{product.marking}</td>
                   <td>{product.origin}</td>
                   
                <td>
                    <button type='button' className='btn btn-warning' onClick={() => handleEdit(product.id)}>Edit</button>
                    <button type='button' className='btn btn-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                    

                </td>
               
               
                </tr>
            )
           )}
    </tbody>
</table>
    </div>
    </Fragment>
  );
            }
          
    
export default ProductCrud;
