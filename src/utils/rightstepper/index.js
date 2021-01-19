
import './index.css'
import {useEffect} from 'react'

export default function RightStepper(props){

    let sectionOffsetList = [];
    const topBuffer = 300

    function scrollToTop(e) {

        window.scrollTo({
            top: topBuffer + e.currentTarget.offsetTopVal,
            behavior: 'smooth',
          });

        //remove all selected steppers
        let dotList = document.getElementsByClassName("stepper-dot--divcon")
        for (let i =0 ;i<dotList.length; i++){
            dotList[i].classList.remove("stepper-dot--selected")
        }
        e.currentTarget.classList.add("stepper-dot--selected")
    }

    
   

    function resetSectionTopList(onload = false) {
                // get offset of all sections
        //desc, basic info, favourite, hobbies, connections 
        let offsetTopList = []
        let detailArr = props.detail;

        detailArr.map((item) => {
            offsetTopList.push(document.getElementById(item.id).offsetTop)
        })


        let testArr = [] 

        offsetTopList.map((item, index) => {           
            sectionOffsetList.push(
                {
                    id: detailArr[index].id + "-dot", offsetTop: item, 
                    offsetBottom: index < (offsetTopList.length -1) ? offsetTopList[index + 1]: 50000, 
                    datanumber: index + 1, 
                    tooltip: detailArr[index].tooltip })
        })

        //console.log("resiize", sectionOffsetList)

        if(onload){
                console.log("true***************************")
                //add new right stepper
                let rightStepperHTML = '  '

                sectionOffsetList.map((item) => {
                    rightStepperHTML = rightStepperHTML +  
                    `<div id="${item.id}" title="${item.tooltip}" datanumber="${item.datanumber}" class= "stepper-dot--divcon">
                        <div class="stepper-dot--div"></div>
                    </div>`
                })

                //console.log(rightStepperHTML)
             document.getElementById("right-stepper").innerHTML = rightStepperHTML;

             let  dotList =  document.getElementsByClassName("stepper-dot--divcon")
             for (let i = 0; i< dotList.length ; i++){
                dotList[i].addEventListener('click', scrollToTop)
                dotList[i].offsetTopVal = sectionOffsetList[i].offsetTop;
             }

            }
    }

    

    function checkActiveSection() {
        //console.log("cehck window scroll", sectionOffsetList)
        
        for(let i=0 ; i < sectionOffsetList.length; i++){
            if(window.pageYOffset > (topBuffer - 20 + sectionOffsetList[i].offsetTop) &&  window.pageYOffset < (topBuffer  + 20 + sectionOffsetList[i].offsetBottom)){
                //remove all selected steppers
                let dotList = document.getElementsByClassName("stepper-dot--divcon")
                for (let i =0 ;i<dotList.length; i++){
                    dotList[i].classList.remove("stepper-dot--selected")
                }
                document.getElementById(dotList[i].id).classList.add("stepper-dot--selected")
            }
        }
      
    }



    useEffect(() => {

        //console.log("bind about" );

        resetSectionTopList(true);

        window.addEventListener("scroll" , checkActiveSection);
        window.addEventListener("resize" , resetSectionTopList)
    
        return () => {
          //console.log("unbind about")
          window.removeEventListener("scroll", checkActiveSection);
          window.removeEventListener("resize", resetSectionTopList);
        } 
    
      }, []);

    return(
        <div id="right-stepper" className="right-stepper">    
    
        </div> 
        )
}