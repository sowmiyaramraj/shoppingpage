import React,{useState} from "react";
import twostates from "./books/twostates.jpg";
import fivepointsomeone from "./books/fivepointsomeone.jpg";
import halfgirlfriend from "./books/halfgirlfriend.jpg";
import revolution2020 from "./books/revolution2020.jpg";
import oneindiangirl from "./books/oneindiangirl.jpg";
import the3mistakesoflife from "./books/the3mistakesoflife.jpg";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


function Startbootstrap()
{
  const [value, setValue] =React.useState(2);
  const [intialvalue, setIntilavalue]= useState(0);
 
let book={
  twostates,
  fivepointsomeone,
  halfgirlfriend,
  oneindiangirl,
  revolution2020,
  the3mistakesoflife,
};
 
const handleincrement=(e)=>
{
  if(e.target.innerText==="ADD TO CART")
  {
    setIntilavalue(intialvalue+1);
    e.target.innerText="REMOVE FROM CART";
  }
  else{
    setIntilavalue(intialvalue-1);
    e.target.innerText="ADD TO CART";


  }
}

 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

    return(
        <div className="margin" >
          <div className="div1">
          
            <h3>Start BootStrap   &nbsp;
            <Button variant="outlined">Home</Button> &nbsp;
            <Button variant="outlined">About</Button>&nbsp;
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Shop
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>All product</MenuItem>
        <MenuItem onClick={handleClose}>Popular item</MenuItem>
        <MenuItem onClick={handleClose}>New Arrival</MenuItem>
      </Menu> &nbsp;
 <button type="button" className="badge badge-pill badge-info" >
  Cart <span class="badge badge-light">{intialvalue}</span>
</button>
      </h3>
     
        </div>
        <div className="div2" >
          <h1> Shop in style</h1>
          <h4>With this shop home page</h4>
        </div><br/><br/>
        <div className="detail">
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="childgrid" xs={4}>
          
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        width="10"
        className="images"
        image ={book.twostates}
        alt="twostates"
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
        Two States
        </Typography>
        <Typography variant="body2" color="text.secondary">
         by Chetan Bhagat
         <br/>
         <Typography component="legend">paperback</Typography>
      <Rating name="read-only" value={value} readOnly />
        </Typography><br/>
        <h1 >₹200</h1>
      </CardContent>
       
      <CardActions >
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={(e)=>handleincrement(e)}>ADD TO CART</Button>
      </CardActions>
    </Card>
         
        </Grid>
        <Grid xs={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        width="10"
        className="images"
        image={book.fivepointsomeone}
        alt="green iguana"
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
        Five Point Someone
        </Typography>
        <Typography variant="body2" color="text.secondary">
         by Chetan Bhagat
         <br/>
         <Typography component="legend">paperback</Typography>
      <Rating name="read-only" value={value} readOnly />
        </Typography><br/>
        <h1>₹200</h1>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={(e)=>handleincrement(e)}>ADD TO CART</Button>
      </CardActions>
    </Card>
</Grid>
<Grid xs={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        width="10"
        className="images"
        image={book.halfgirlfriend}
        alt="green iguana"
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
        Half Girlfriend
        </Typography>
        <Typography variant="body2" color="text.secondary">
         by Chetan Bhagat
         <br/>
         <Typography component="legend">paperback</Typography>
      <Rating name="read-only" value={value} readOnly />
        </Typography><br/>
        <h1>₹200</h1>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={(e)=>handleincrement(e)}>ADD TO CART</Button>
      </CardActions>
    </Card>
</Grid>
<Grid xs={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        width="10"
        className="images"
        image={book.the3mistakesoflife}
        alt="green iguana"
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
      The 3 Mistakes Of Life
        </Typography>
        <Typography variant="body2" color="text.secondary">
         by Chetan Bhagat
         <br/>
         <Typography component="legend">paperback</Typography>
      <Rating name="read-only" value={value} readOnly />
        </Typography><br/>
        <h1>₹200</h1>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={(e)=>handleincrement(e)}>ADD TO CART</Button>
      </CardActions>
    </Card>
</Grid>
<Grid xs={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        width="10"
        className="images"
        image={book.revolution2020}
        alt="green iguana"
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
        Revolution2020
        </Typography>
        <Typography variant="body2" color="text.secondary">
         by Chetan Bhagat
         <br/>
         <Typography component="legend">paperback</Typography>
      <Rating name="read-only" value={value} readOnly />
        </Typography><br/>
        <h1>₹200</h1>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small" onClick={(e)=>handleincrement(e)}>ADD TO CART</Button>
      </CardActions>
    </Card>
</Grid>
<Grid xs={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        width="10"
        className="images"
        image={book.oneindiangirl}
        alt="green iguana"
      />
      <CardContent className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
        One Indian Girl
        </Typography>
        <Typography variant="body2" color="text.secondary">
         by Chetan Bhagat
         <br/>
         <Typography component="legend">paperback</Typography>
      <Rating name="read-only" value={value} readOnly />
        </Typography><br/>
        <h1>₹200</h1>
      </CardContent>
      <CardActions>
        <Button size="small" >Buy Now</Button>
        <Button size="small" onClick={(e)=>handleincrement(e)}>ADD TO CART</Button>
      </CardActions>
    </Card>
</Grid>
       
      </Grid>
    </Box>
    <br/>
    <div className="div4">
         <h3> no copyrights </h3>
        </div>
        
        </div>
        
          
        </div>
    );
}

export default Startbootstrap;