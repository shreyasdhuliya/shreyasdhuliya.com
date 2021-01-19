import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

//firebase
//import { FirebaseContext } from '../../../firebase';
import {RDB} from '../../../firebase'

import './buttonlist.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '90%',
    marginTop:"30px",
    maxWidth:"1200px"
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  const [imagesList, setImagesList] =  useState ([
    {
      url: '',
      title: 'Resume',
      width: '42%',
      link:"/portfolio/developer"
    },
    {
      url: '',
      title: 'Data Science',
      width: '16%',
    link: "/portfolio/datascience"
    },
    {
      url: '',
      title: 'About Me',
      width: '42%',
      link:"/about"
     
    },
    {
        url: '',
        title: 'Products',
        width: '40%',
        link:"/portfolio/artwork?scroll=product"
      },
      {
        url: '',
        title: 'Portraits',
        width: '40%',
        link:"/portfolio/artwork?scroll=pastel"
      },
      
      {
        url: '',
        title: 'Scupltures',
        width: '20%',
        link:"/portfolio/artwork?scroll=clay"
      },
      {
        url: '',
        title: 'Workshops',
        width: '42%',
        link:"/portfolio/artwork?scroll=charcoal"
      },
      {
        url: '',
        title: 'Earlier Works',
        width: '16%',
        link:"/portfolio/artwork?scroll=others"
      },
      {
        url: '',
        title: 'Art and Craft',
        width: '42%',
        link:"/portfolio/artwork?scroll=artcraft"
      },
  ]);

  useEffect(()=> {
    
    var newImagesList = imagesList.slice();

    RDB.ref('home/shortcut').once("value", snap => {                     
                     
      //sorting images url from db
          let urlList = snap.val();
           let sortedUrlList = {}
           for(let i = 0; i< Object.keys(urlList).length; i++ ){
            sortedUrlList[urlList[Object.keys(urlList)[i]]["display-order"] - 1] = urlList[Object.keys(urlList)[i]]["url"]
           }
           //setting new images list                           
           for(let i = 0; i< newImagesList.length; i++ ){
            newImagesList[i]["url"] =  sortedUrlList[i]
           }                           
           setImagesList(newImagesList)
    })
  },[])
  

  return (
    <>
    <div className={`${classes.root} `}>
      {imagesList.map((image) => (
        <ButtonBase
          focusRipple
          href= {image.link}
          key={image.title}
          className={`${classes.image} r-btn--group`}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundColor:"#9c27b0"
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}

            
    </div>


    {/*<FirebaseContext.Consumer>
                {firebase => {                    
                  if(imagesList[0]["url"] == ""){
                    var newImagesList = imagesList.slice();
                    //console.log(imagesList)
                    firebase.rdb.ref('home/shortcut').once("value", snap => {                     
                     
                      //sorting images url from db
                          let urlList = snap.val();
                           let sortedUrlList = {}
                           for(let i = 0; i< Object.keys(urlList).length; i++ ){
                            sortedUrlList[urlList[Object.keys(urlList)[i]]["display-order"] - 1] = urlList[Object.keys(urlList)[i]]["url"]
                           }
                           //setting new images list                           
                           for(let i = 0; i< newImagesList.length; i++ ){
                            newImagesList[i]["url"] =  sortedUrlList[i]
                           }                           
                           setImagesList(newImagesList)
                    })
                    console.log("hello")

                  }
                }}
            </FirebaseContext.Consumer>*/}
    </>
  );
}