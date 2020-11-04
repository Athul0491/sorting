import React from 'react';
import "./style.css";
import {mergeSort} from "../sortingAlgo/sortingAlgo.js";


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array : [],
        };
    }
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let a=0;a<150;a++){
            array.push(randomInt(5,350));
        }
        this.setState({array});
    }
    mergeSort(){
        const animations = mergeSort(this.state.array);
        const newAnimations= [];
        for (const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);

        }
        for(let i = 0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';

            setTimeout(()=>{
                
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },(i*5));
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;

                },(i+1)*5);
            }
    }
    }
    heapSort(){}
    bubbleSort(){}
    quickSort(){}
    render(){
        const {array} = this.state;
         

        return(
            <html>
            
            <div className="array-container" style={{height:`300px`}}>
            
                
            {
                array.map((value,idx) => (
                    <div className="array-bar" 
                    
                    key= {idx}
                    style={{height:`${value}px`}}>
                    </div>
                    
                ))
                
            }
              
            </div>
            <header>
                <div className='navBar'>
                    <ul class="nav__links">
                        <li><a className='button'  onClick={() => this.mergeSort()}>Merge Sort</a></li>
                        <li><a className='button'  onClick={() => this.heapSort()}>Heap Sort</a></li>
                        <li><a className='button'  onClick={() => this.bubbleSort()}>Bubble Sort</a></li>
                        <li><a className='button'  onClick={() => this.quickSort()}>Quick Sort</a></li>
                    </ul>
                    <button className='cta'  onClick={() => this.resetArray()}>Generate New Array</button>

                </div>
            </header>
            </html>
        )

    }

}


function randomInt(min,max){
    return Math.floor(Math.random()*(max -min + 1)+ min);
}