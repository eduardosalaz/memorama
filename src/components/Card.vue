<template>
 <div class="Card" @click="selectCard" >
    <div v-if="visible" class="card-face is-front"> 
            {{value}}-{{text}}
            <img v-if="imgVisible" :src="`/imgMemo/${value}.png`" :alt ="imgName" class="imgStyle">
            <!-- <img v-if="matched" src="/imgMemo/bochi sit.webp" :alt ="imgName" class="imgStyle"> -->
    </div>    
     <div v-else class="card-face is-back"> 
             
    </div>  
        
 </div>
</template>

<style>
.Card{
    border: 5px solid #ccc;
    position:relative;
}
.card-face{
    width: 100%;
    height: 100%;
    position: ABSOLUTE;
}
.card-face.is-front{
    background-color: green;
    color:white;
}
.card-face.is-back{
    background-image: url("../../public/imgMemo/BGImage.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 160px 160px;
    background-color: blue;
    color:white;
}
.imgStyle{
    width: 160px;
    height:160px;
}
</style>


<script>
import {provide} from 'vue'
export default{
    props:{
        imgVisible:{
            type:Boolean,
            required:true
        },
        text:{
            type:String,
            required:true
        },
        matched: {
            type:Boolean,
            default:false

        },
        position:{
            type:Number,
            required:true
        },
        value:{
            type:String,
            required: true
        },
        visible:{
            type:Boolean,
            default:false
        }
        
    },
    
    setup(props,context){

        
     ///   const flippedStyles = computed (() => {
      ///      if( props.visible) {
       ///         return 'is-flipped'
        ///    }
       /// })
       provide("tiempoo",69) 

        const selectCard = () => {
            context.emit('select-card',{
                position:props.position,
                faceValue :props.value
            })
        }
        return{
            //flippedStyles,
            selectCard
            
        }
    }
}

</script>
