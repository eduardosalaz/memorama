<template>
 <div class="Card" @click="selectCard" >
    <div v-if="visible" class="card-face is-front"> 
            {{value}} - {{matched}} - {{text}}
    </div>    
     <div v-else class="card-face is-back"> 
             back
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
    background-color: red;
    color:white;
}
.card-face.is-back{
    background-color: blue;
    color:white;
}
</style>


<script>
///import {computed} from 'vue'
export default{
    props:{
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
            type:Number,
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
