<template>
<div>

  <h1 class="font-serif text-blue-200 text-center text-2xl mt-16">Weather forcast</h1>
  <div class="lg:ml-40">
  <div class="bg-blue-900 w-80 rounded-sm ml-6 mr-5 mt-5 pb-10 md:ml-60 lg:ml-96 ">
   <h1 class="text-white pt-3 pl-1 pr-1 text-center font-serif text-md"> Forcast Weather Condition</h1>
    <input type="text" placeholder="Enter country" class="border-none w-60 p-2 rounded-3xl focus:outline-none mt-5 ml-5" v-model="country"> <i class="fa-solid fa-magnifying-glass text-xl  pl-2 pt-1 ml-1 bg-white w-10 h-10 rounded-full" @click="searchTemprature"></i>
<img src="\sunny image.jpg" alt="" class="w-40 h-40 rounded-full ml-16 mt-5">
<h1 class="text-white text-3xl text-center -ml-5 font-serif mt-3" v-if="temprature">{{temprature}}&deg;C</h1>
<h1 class="text-white text-center text-2xl font-serif">{{inputCountry}}</h1>
<div class="flex justify-between text-white ml-3 mr-3 mt-5 ">
    <div class="flex" v-if="humidity"> 
<div>
 <i class="fa-solid fa-droplet text-xl"></i>
</div>
<div class="ml-1" >
<h1>{{humidity}}%</h1>
<h1>humidity</h1>
</div>
    </div>
        <div class="flex" v-if="wind">
<div>
 <i class="fa-solid fa-wind text-xl"></i>
</div>
<div class="ml-1 ">
<h1>{{wind}}km/hr</h1>
<h1>wind speed</h1>
</div>
    </div>
</div>
  </div>
   </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            temprature:null,
            wind:null,
            humidity:null,
            country:'',
            inputCountry:''
        }
    },
    mounted(){
     
    },
    methods:{
        searchTemprature(){
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.country}&appid=a9276c0e75eb42093398230763e8fd0c`).then((res)=>{
this.inputCountry = this.country
            console.log('temprature',res.data.main.temp)
            this.temprature = res.data.main.temp
            console.log('humidity',res.data.main.humidity)
            this.humidity = res.data.main.humidity
            console.log('wind',res.data.wind.speed)
            this.wind = res.data.wind.speed

             this.country=''
        })
        }
    }

}
</script>

<style>

</style>