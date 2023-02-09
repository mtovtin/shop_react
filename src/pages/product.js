import React , { useEffect }from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import styles from "../styles/Home.module.css";
import InputLabel from '@material-ui/core/InputLabel'
import { useState} from 'react' 
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Input } from '@mui/material'


export default function Product({handlerAddProduct, products}) {
    const [isShown, setIsShown] = useState(true);
    const arr=[]
    const handleClick = event => {
arr.push({name})
console.log(arr)
      };
    const [id, setId] = useState(undefined) 
  
    const [name, setName] = useState(undefined) 
    const [description, setDescription] = useState(undefined) 
    const [price, setPrice] = useState(undefined) 
    const [quantity, setQuantity] = useState(undefined) 
    const [category, setCategory] = useState(undefined) 
    const [SKU, setSKU] = useState(undefined) 
    const [manufacturer, setManufacturer] = useState(undefined) 
    const [model, setModel] = useState(undefined) 
    const [image, setImage] = useState(null) 

    const handleChangePrice = (e) => {
        const regex = /^\d+(\.\d{1,2})?$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setPrice(e.target.value);
        }
      };


      const handleChange = (e) => {
        const regex = /^\d+(\.\d{1,2})?$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
          setQuantity(e.target.value);
        }
      };

      const isEmpty = (url) => url.length ===0 

      const handleChangeCategory = (e) => {
        setCategory(e.target.value);
      };

      const handleInput = (e) => {
        if(e.target.files.length !== 0){
           setImage(URL.createObjectURL(e.target.files[0]))
          }

      };
	return (
        <>
  <div className={styles.newProduct}>
<TextField  required
 error={id === ""}
  helperText={id === "" ? 'Field is empty!' : ' '} value={id} onChange={(e) => setId(e.target.value)}  id="id" label="id" variant="standard" />
<TextField  error={name === ""}
  helperText={name === "" ? 'Field is empty!' : ' '} value={name} onChange={(e) => setName(e.target.value)}  id="name" label="name" variant="standard" />
<TextField  error={description === ""}
  helperText={description === "" ? 'Field is empty!' : ' '} multiline value={description} onChange={(e) => setDescription(e.target.value)}   id="description" label="description" variant="standard" />
<TextField  InputProps={{
        inputProps: { min: 0 }
      }}  error={price === ""}
  helperText={price === "" ? 'Field is empty!' : ' '} type="number" value={price} onChange={(e) => handleChangePrice(e)}  id="price" label="price" variant="standard" />
<TextField style={{marginBottom:'20px'}}  InputProps={{
        inputProps: { min: 0 }
      }} type="number" value={quantity}     onChange={(e) => handleChange(e)}    id="quantity" label="quantity" variant="standard" />


<TextField  error={SKU === ""}
  helperText={SKU === "" ? 'Field is empty!' : ' '} value={SKU} onChange={(e) => setSKU(e.target.value)} id="SKU" label="SKU" variant="standard" />
<TextField  error={manufacturer === ""}
  helperText={manufacturer === "" ? 'Field is empty!' : ' '} value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} id="manufacturer" label="manufacturer" variant="standard" />
<TextField style={{marginBottom:'20px'}}   error={model === ""}
  helperText={model === "" ? 'Field is empty!' : ' '} value={model} onChange={(e) => setModel(e.target.value)} id="model" label="model" variant="standard" />
{/* <Button onClick={() =>  handlerAddProduct([id, name, description, price, quantity, category, SKU, manufacturer, model])} variant="contained">Add</Button> */}
<InputLabel id="categoryLabel">category</InputLabel>
  <Select  error={category === ""}
  helperText={category === "" ? 'Field is empty!' : ' '}
    labelId="categoryLabel"
    id="category"
    value={category}
    onChange={handleChangeCategory}
    label="category"
  >

    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
<Input
  accept="image/*"
  id="image"
  multiple
  type="file"
  onChange={handleInput}
  style={{visibility:'hidden'}}
/>

<InputLabel style={{textAlign:'center', marginBottom:'40px'}} htmlFor="image">
  <Button   accept="image/*"
  variant="outlined"
  id="image"
  multiple
  type="file"
  onChange={handleInput}  component="span">
    Upload image
  </Button>
</InputLabel> 
<Button 
disabled={!id || !name || !description || !price || !quantity || !category || !SKU || !manufacturer || !model || price ===0 || quantity === 0} 
onClick={() => {

  
handlerAddProduct({id: id, name: name,description : description,price : price, image: image, quantity : quantity,category : category,SKU : SKU,manufacturer : manufacturer,model : model})
}
} variant="contained">Add</Button>

</div>
</>
    );
}


